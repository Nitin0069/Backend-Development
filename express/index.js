const express = require("express")

const app = express();


app.get('/', (req,res)=> {
return res.end("this is kuch nhi page")    
})

app.get('/home' , (req, res) => {
  return  res.send("this is home page")
})

app.get('/about' , (req, res) => {
  return  res.send("this is about page" + "hey" + req.query.name)
})

app.listen(3001)
