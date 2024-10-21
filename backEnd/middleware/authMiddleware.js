const jwt = require('jsonwebtoken');
require('dotenv').config()

const JWT_SECRET = process.env.JWT_SECRET

exports.verifyToken = (req, res, next) =>{
    const token = req.headers['authorization']

    if(!token){
        return res.status(403).json({message: 'no token provided'})
    }

    const bearerToken = token.split(' ')[1];
    try{
        const decoded = jwt.verify(bearerToken, JWT_SECRET)
        req.userId = decoded.userId
        req.userRole = decoded.role
        next()
    }catch(error){
        return res.status(401).json({message: 'Unauthorized',error})
    
}
}
exports.isAdmin = (req, res, next) => {
    if(req.userRole !== 0){
        return res.status(403).json({message: 'Unauthorized, you are not admin'})
    }
    next()
}