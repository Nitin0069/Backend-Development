const userModel = require("../models/model");
const jwt = require("jsonwebtoken")



async function registerUser(req, res) {
  //  const {username , email , password } = req.body;
const  {username, email, password} = req.body

const userAlreadyExists = await userModel.findOne({
  email
})

if(userAlreadyExists  ) {
  return res.status(409).json({
    message: "email already exists"
  })
}
    const user = await userModel.create({

username, email, password

    })

    const token = jwt.sign({
        id: user._id },
        process.env.JWT_SECRET
  )
  res.cookie("token" , token,  )
  res.status(201).json({
    message: "user registered successfully",
    user,
    
  })


}

 
module.exports = {registerUser}















/*



const userModel = require("./models/models")
const jwt = require("jsonweb token")


async createUser (req,res) {
const {email. id , name} = req.body
const user = usermodel.create ({
username, name, enail
})

const env = json.sign({
email, } process.env.secrert.jwt_secret)

}
res.json(202).
*/