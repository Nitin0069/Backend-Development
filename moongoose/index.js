const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs")
const app = express();
const port = 3004;
const mongoose = require('mongoose')


//Schema
const mySchema = new mongoose.Schema({
    firstName: {
        type: String,
    required: true,

    },
    lastName: {
        type: String,

    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    jobTitle: {
        type: String,
    },
gender: {
    type : String, 
},
})

const User = mongoose.model('user', mySchema)



app.use(express.urlencoded({extended: false}))

app.use((req,res,next) => {
console.log("hello from middleware 1")
//return res.json({msg: "hello from middleware 1"})
req.MyUserName = "nitin@";
next()
});


// GET: Get all users
app.get("/api/users", (req, res) => {
    res.setHeader("myname", "nitin rana")
    return res.json(users);
});


app.use((req, res, next ) => {
fs.appendFile("log.txt", `${Date.now()} ${req.method} ${req.path}\n `, (err,data) => {
  next();  
}  )
})

// GET: Get a single user by ID
app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);

    const user = users.find((user) => {
        return user.id === id;
    });

    return res.json(user);
});



// POST: Create a user
app.post("/api/users", (req, res) => {
  const body = req.body;
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.status(201).json({ status: "success", id: users.length });
  });
});

// PATCH: Update a user
app.patch("/api/user", (req, res) => {
    return res.json({ status: "pending" });
});

// Start server
app.listen(port, () => {
    console.log("Server started at " + port);
});
 







