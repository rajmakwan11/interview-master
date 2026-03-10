const jwt = require("jsonwebtoken")
const tokenBlacklistModel = require("../models/blacklist.model");


async function authUser(req,res,next){
    const token = req.cookies.token

    if(!token){
        return res.status(401).json({
            message:"Token is not Provided"
        })
    }

    const isTokenBlacklisted = await tokenBlacklistModel.findOne({token})

    if(isTokenBlacklisted){
        res.status(401).json({
            message:"Invalid Token"
        })
    }
    
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRETS)

        req.user = decoded

        next()
    }
    catch(err){
        res.status(401).json({
            message:"Invalid Token"
        })
    }

}

module.exports = {authUser}