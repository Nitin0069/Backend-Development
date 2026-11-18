const musicModel = require("../model/music.model")
const jwt = require("jsonwebtoken")
const albumModel = require("../model/album.model")
const {uploadFile} = require ("../services/storage.service")


async function createMusic  (req,res) {

const {title} = req.body
const file = req.file

const result = await uploadFile(file.buffer)
 console.log(req.file.buffer)
  console.log(result)

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
    }}
)}


async function createAlbum (req,res) {
    
const {title, musicIds} = req.body;

const album = await albumModel.create({
    title,
    artist: decoded.id,
    musics: musicIds
})
res.status(201).json({
    messaage: "album created",
    album: {
        id: album._id,
        title: album.title,
        artist: album.artist,
        musics: album.musics,
    }
})
}
module.exports = { createMusic , createAlbum }