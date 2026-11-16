const mongoose = require("mongoose")


const musicSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    artist: {
        type: mongoose.schema.Types.ObjectID,
         ref: "user",
         required: true,
    }
})

const musicModel = mongoose.model("music", musicSchema)

module.exports = musicModel;