const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
})


const model = mongoose.model("auth", UserSchema)

module.exports = model