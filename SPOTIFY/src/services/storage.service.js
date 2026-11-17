 const {ImageKit} = require("@imagekit/nodejs")


 const ImageKitClient = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
 })

 async function uploadfile(file) {
    const result = await ImageKitClient.files.upload({
        file: file.toString("base64"),
        fileName:"music" + Date.now(),
        folder: "yt-complete-backend/music"
    })
    return result
 }

 module.exports = {uploadfile}