 //  server ko create krna
const express = require("express")
  const app = express();

  const notes = [];

  app.use(express.urlencoded({extended: "false"}))
app.use(express.json());


app.post('/notes', (req,res) => {
    const body = req.body;
    //res.json(body)
    notes.push(body)
    console.log(body)
})

app.get('/notes', (req,res) => {
res.status(200).json({
    message: "notes fetched successfully" , notes: notes
})
})
// delete

app.delete('/notes/:id', (req,res) => {
    const id = req.params.id
    delete notes [id]
    res.status(200).json({
        message: "note deleted succcessfully"
    })
} )

app.patch ('/notes/:id', (req,res) => {
    const id = req.params.id

    const descreption = req.body.descreption
    notes[id].descreption = descreption
})

module.exports = app;