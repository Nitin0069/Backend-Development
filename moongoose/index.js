const express = require("express");
const app = express();
const port = 3004;
const mongoose = require('mongoose');


app.use(express.urlencoded());

mongoose.connect('mongodb://localhost:27017/youtube-app-1') 
.then (()=> console.log("mongo db connected"))
.catch((err) => console.log("error:" , err ) )

const userSchema = new mongoose.Schema({
    first_name: {
    type: String,
    required: true,
    },
    last_name: {
        type:  String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
 },
 job_title: {
    type: String,
 },
 gender: { 
    type: String,
 },
},{timestamps: true})

const User = mongoose.model('user', userSchema)

app.post("/api/users", async (req,res) => {
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
  /*
app.get("/users" , async (req,res) => {
const allDbUsers = await User.find({});
const html = `
<ul> 
${allDbUsers.map ((user) => `<li> ${user.first_name} </li> `).join("")} </ul> `
return res.send(html)
})
*/
// apii
app.get  ( '/api/users', async (req,res) => {
const allDbUsers = await User.find({});
return res.json(allDbUsers)
})

app.route("/api/user/:id").get(async (req,res) => {
    const user = await User.findById(req.params.id )
if (!user) return res.status(404).json({error: "usernot found"})
return res.json(user);
})
.patch(async (req,res) => {
await User.findByIdAndUpdate(req.params.id, {last_name: "changes"})
return res.json({status: "succes "})
})




 

    




app.listen(port, () => {
    console.log("Server started at " + port);
});
 







