const app = require("./src/app")
const connectDB = require("./src/db/db")


connectDB();

app.listen(3008, () => {
    console.log("server runnin on 3008")
})