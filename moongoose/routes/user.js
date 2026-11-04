const express = require("express")
const router = express.Router();

router.post("/", async (req,res) => {
    const body = req.body;
    if (
        !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
    ) {
        return res.status(400).json({msg : "All fields are required" })
    }
    const result = await  User.create({
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        gender: body.gender,
        job_title: body.job_title,    
    }) 
    console.log("result", result)
return res.status(201).json({message : "success"})
})
 // get html 
// apii
router.get  ( '/', async (req,res) => {
const allDbUsers = await User.find({});
return res.json(allDbUsers)
})

router.route("/:id").get(async (req,res) => {
    const user = await User.findById(req.params.id )
if (!user) return res.status(404).json({error: "usernot found"})
return res.json(user);
})
.patch(async (req,res) => {
await User.findByIdAndUpdate(req.params.id, {last_name: "changes"})
return res.json({status: "succes "})
})


