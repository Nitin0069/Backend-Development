const express =  require("express")
const app = express()
const multer = require("multer") 

app.use(express.json())

const upload = multer ({
    storage: multer.memoryStorage()
})


app.post("/create-post" , upload.single("image")  , async (req, res) => {
//console.log(req.body)
console.log(req.file)
console.log("hi");
console.log(req.file.buffer)
})

module.exports = app;




