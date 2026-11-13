const express = require("express")
const jwt = require("jsonwebtoken")
const router = express.Router()
const userModel = require("../models/model")

router.post("/create", async (req,res) => {

const token = req.cookies.token;

if (!token){
 return   res.status(401).json({
        message: "Unauthorized"
    })
}
try {
const decoded = jwt.verify(token , process.env.JWT_SECRET)

const user = await userModel.findOne({
    _id: decoded.id

})
return res.status(200).json({
    message: "Authorized",
    user: user
})
;}
catch(err) {
   console.log("JWT ERROR , ", err.message)
    return res.status(401).json({
        message: "Unauthorized - invalid token"
    })
}    
   // message: "Unauthorised"
})
//console.log(req.cookies)

module.exports = router