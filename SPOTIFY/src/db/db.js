const mongoose = require("mongoose")

async function connectDb() {

try {
 await mongoose.connect(process.env.MONGO_URI)
 console.log(" db connected sucessfully")
}
catch(err) {
    console.log("error" , err)
}

}

module.exports = connectDb