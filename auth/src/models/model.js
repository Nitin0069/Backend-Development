const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    password: String
})


const model = mongoose.model("auth", UserSchema)

module.exports = model