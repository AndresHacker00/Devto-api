const jwt = require ("../lib/jwt.lib")
require ("dotenv").config()
const createError = require('http-errors')

const auth = (req,res,next) => {
    try {
        const authorization = req.headers.authorization || ""
        const token = authorization.replace("Bearer ","")
        const isVerified = jwt.verify(token)
        if (!isVerified.id === req.body.userCreator){
            throw createError(404,"You are not logged!")
        }
        next()
    }catch(error){
        res.status(401)
        res.json ({
            succes:false,
            message:error.message
        })
    }
}


module.exports = auth;