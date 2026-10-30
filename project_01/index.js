const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs")
const app = express();
const port = 3003;

app.use(express.urlencoded({extended: false}))

app.use((req,res,next) => {
console.log("hello from middleware 1")
//return res.json({msg: "hello from middleware 1"})
req.MyUserName = "nitin@";
next()
});
/*
app.use((req,res,next) => {
    console.log("hell from middleware 2", req.MyUserName)
    next()
   // return res.end("hey")
})

// GET: Get all users
app.get("/api/users", (req, res) => {
    return res.json(users);
});
*/


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
    return res.json({ status: "success", id: users.length });
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
 

app.get('/users' ,
 (req, res) => {
const html = `
<ul>
    ${users.map((user) => `<li> ${user.first_name} </li> `)}
</ul>
`;
res.send(html)
})








/*
app.get("/text", (req, res) => {
    res.send("<ul><li>Nitin</li><li>Rahul</li></ul>  " + "<h1> Rana <h1>" );
});


app.get("/json", (req, res) => {
    res.json({
        message: "<ul><li>Nitin</li><li>Rahul</li></ul>"
    });
});
*/