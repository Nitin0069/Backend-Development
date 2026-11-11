const userModel = require("../models/model");


async function registerUser(req, res) {
    const {username , email , password } = req.body;

}

module.exports = {registerUser}