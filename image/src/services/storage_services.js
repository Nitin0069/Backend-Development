const ImageKit = require("@imagekit/nodejs") 

const imagekit = new ImageKit({
    privateKey: "private_4TmSHQE06Z/uNadTXUYb6M2sAjo="
})

async function uploadFile(buffer) {
    const result = await imagekit.client.upload({
        file: buffer,
        filename: "image.jpg"
    })
    return result;
}
module.exports = uploadFile