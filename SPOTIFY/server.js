require("dotenv").config()
const app = require("./src/app")
const connectDb = require("./src/db/db")






connectDb()

app.listen(3003, () => {
    console.log("server is running on port 3003")
})