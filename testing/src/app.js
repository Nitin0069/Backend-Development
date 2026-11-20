const express = require("express")
const validationRules = require("../src/middlewares/validation.middleware")
const app = express();
/*
app.get("/", (req,res) => {
    res.status(200).json({message: "Hello World"})
})
*/

app.post("/register" ,validationRules.registerUserValidationRules (req,res) => {
    const {username,email,password} = req.body
})









module.exports = app