const mongoose = require("mongoose")

async function connectDB() {
    await mongoose.connect("mongodb+srv://yt:BXQFjACzSQAc4QmK@yt-sheriyans.dljb3kw.mongodb.net/project-image")
   console.log("db connected") 
}

module.export = connectDB