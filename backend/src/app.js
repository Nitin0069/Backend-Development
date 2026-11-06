const express = require('express')
const noteModel = require("./model/note")

const app = express();

app.use(express.json())

app.post("/notes",  async (req, res) => {
  const data = req.body
 await noteModel.create({
   title: data.title,
   desc: data.desc
 } )
res.status(201).json({message: "successfuly created"})
})


app.get("/notes" , async (req,res) => {
const note = await noteModel.find()
res.json(note)
})


app.delete("/notes/:id" , async (req,res) => {
const id = req.params.id;
await noteModel.findOneAndDelete({
   _id: id
})
res.status(200).json({
   message: "note created successfully"
})
})


app.patch("/notes/:id" , async (req,res) => {
   const id = req.params.id
   const desc = req.body.desc
await noteModel.findOneAndUpdate( {_id: id},   {desc: desc})

res.status(200).json({
   message: "note updated succesfully"
})

})



module.exports = app;