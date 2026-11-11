const mongoose = require("mongoose")

async function connectDb () {
    try {
await mongoose.connect(process.env.MONGO_URI)
console.log("db connected")
    }
    catch(err) {
        console.log("database connection error: " , err )
    //    throw err;
    } 
}

module.exports = connectDb
