const {body,params,query,check ,validationResult} = require("express-validator")


async function vadlidateResult(req,res, next) {

const errors = validationResult(req);

if(!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()})
}
next()
}
const registerUserValidationRules = [ 
    body("username")
    .isString()
    .withMessage("Username must be a string")
    .isLength({min: 3, max: 20})
    .withMessage("Username must be between 3 and 20 character"),
vadlidateResult
]

module.exports = {registerUserValidationRules}