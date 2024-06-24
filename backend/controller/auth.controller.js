
import User from "../models/user.model.js"
import bcryptjs from "bcryptjs"
import { errorHandler } from "../utilis/error.js"
export const auth = async (req , res ,next)=>{
	// console.log(req.body)

    const {username , password , email} = req.body
    const hashedPassword = bcryptjs.hashSync(password , 10)
    const newUser = new User({username , password:hashedPassword , email})
    try{
       await newUser.save() 
        res.json({
            msg:"user created"
        })        
    }
    catch(err){
        next(errorHandler(500 , "something went wrong !"))
    }

}