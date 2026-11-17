const usermodel = require("../model/user.model")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs")

async function registerUser(req,res) {
  const { username, email,  password, role = "user"} = req.body

  const isAlreadyExists = await usermodel.findOne({
  $or: [
    {username},
    {email}
]
    })

if(isAlreadyExists) {
  return res.status(409).json({"messaage": "user already exists"})
}


const hash = await bcrypt.hash(password , 5)

const user = await usermodel.create({
  username,
  email,
  password : hash,
  role
})

const token = jwt.sign({
  id: user._id,
  role: user.role,
}, process.env.JWT_SECRET) 

res.cookie("token" , token)
res.status(201).json({user:{
  id: user._id,
  username: user.username,
  email: user.email,
  role: user.role,
}})

}


async function loginUser (req,res) {
  const { username, email , password, } = req.body;

  const user = await usermodel.findOne({
    $or : [
      {username},
      {email}
    ]
  })

  if(!user) {
    return res.status(401).json({messaage: "invalid credentials" })
  }
const isPasswordValid = await bcrypt.compare(password, user.password)

if(!isPasswordValid) {
  return res.status(401).json({message: "invalid credentials"})
}

  const token = jwt.sign({
    id: user._id,
   email: user.email,
   role: user.role
 }, process.env.JWT_SECRET)

res.cookie("token" , token)

res.status(200).json({
  messaage: "User logged in successfully" , 
  user: {
    id: user._id,
    username: user.username,
    email: user.email,
role: user.role,
  }
})
}
module.exports = { registerUser, loginUser }