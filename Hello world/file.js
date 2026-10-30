const fs = require('fs')
const os = require('os')

console.log(os.cpus().length)


//Sync... 

 // fs.writeFileSync("./test.txt", "Hey world")

//Async
/*
 fs.writeFile("./test.txt" , "hey worlddss",  (err) => {
     console.log("Writing finished");
 } )
*/
/*
const result = fs.readFileSync("./contact.txt", 'utf-8')
console.log(result)
*/
/*
fs.readFile('./contact.txt' , 'utf-8' , (err, result) => {
    if(err) {
        console.log(err)
        }
        else {
            console.log(result)
        }
})
        */
/*
fs.appendFileSync('test.txt', "\n hii")

fs.cpSync('./test.txt', './copy.txt')

fs.mkdirSync("mkdir")
*/