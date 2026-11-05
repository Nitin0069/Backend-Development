const mongoose = require("mongoose")


async function connectDb () {
    await mongoose.connect("mongodb+srv://yt:BXQFjACzSQAc4QmK@yt-sheriyans.dljb3kw.mongodb.net/tablee")
    console.log("connected to db")
}

module.exports = connectDb