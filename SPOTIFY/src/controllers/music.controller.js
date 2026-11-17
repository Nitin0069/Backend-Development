const musicModel = require("../model/music.model")
const jwt = require("jsonwebtoken")
const {uploadFile} = require ("../services/storage.service")

async function createMusic  (req,res) {

const token = req.cookies.token;

if(!token) {
    return res.status(401).json({message: "Unauthorised"})
}

try {
    const decoded = jwt.verify(token , process.env.JWT_SECRET)

    if(decoded.role !== "artist" ) {
        return res.status(403).json({message: "forbidden"})
    }  

const {title} = req.body
const file = req.file

const result = await uploadFile(file.buffer)
 
const music = await musicModel.create({
    url: result.url,
    title,
    artist: decoded.id,
})

res.status(201).json({
    messaage: "Music created successfully ",
    music: {
        id: music._id,
        url: music.url,
        title: music.title,
        artist: music.artist,
    }

}
)
}
catch(err) {
    return res.status(401).json({ message: "Unauthorised" })
} 
}
module.exports = createMusic