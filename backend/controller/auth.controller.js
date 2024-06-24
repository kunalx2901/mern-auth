
import User from "../models/user.model.js"
import bcryptjs from "bcryptjs"
export const auth = async (req , res)=>{
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
        res.status(500).json({
            msg: err
        })

    }

}