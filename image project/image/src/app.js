const express =  require("express")
const app = express()
const multer = require("multer") 
const uploadFile = require("./services/storage_services")
const postModel = require("./models/models")
const cors = require("cors")

app.use(express.json())
app.use(cors())
const upload = multer ({
    storage: multer.memoryStorage()
})


app.post("/create-post", upload.single("image"), async (req, res) => {
    
        console.log(req.file);

        const result = await uploadFile(req.file.buffer);

        console.log(result);
        
            const post = await postModel.create({
                image: result.url,
                caption: req.body.caption
        })

        res.status(200).json({
            message: "Image uploaded successfully",
            imageUrl: post
        });

    
console.log("jo")
    /*    res.status(500).json({
            message: "Image upload failed",
        });
    */
});

app.get("/posts" , async (req,res) => {
    const posts = await postModel.find()
return res.json(posts)
})

module.exports = app;




