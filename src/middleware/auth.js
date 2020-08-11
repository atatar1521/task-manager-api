const jwt = require('jsonwebtoken')
const User = require('../models/user')


const auth = async(req,res, next)=>{
 try{
     //Check the header 
  const token = req.header('Authorization').replace('Bearer ', '')
  //Verify if the header is match with token
  const decoded = jwt.verify(token, process.env.JWT_SECRET)
  //Getting the user
  const user = await User.findOne({_id:decoded._id , 'tokens.token': token})
  //if there isn't a user throw an error
  if(!user){
     throw new Error()
 }
 //Return the user 
 req.token = token
 req.user = user
    next()
 //Checking for authentication and throw error when not authenticate
}catch (e) { 
    console.log(e)
    res.status(401).send({ error: 'Please authenticate' }) 
}
} 

module.exports = auth