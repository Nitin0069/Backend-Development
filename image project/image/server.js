require("dotenv").config();


const connectDb = require("./src/db/db")
const app = require ("./src/app")


connectDb();

app.listen(3009, () => {
    console.log("server started")
})