const userModel = require("../models/model");
const jwt = require("jsonwebtoken")

async function registerUser(req, res) {
  //  const {username , email , password } = req.body;
    const user = await userModel.create({

        username : req.body.username,
         email : req.body.email,
          password: req.body.password
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