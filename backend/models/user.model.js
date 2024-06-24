import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

mongoose.connect(process.env.MONGO).then(()=>{
	console.log("connected to database")
})
.catch((err)=>{
	console.log(err)
})

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    }
}, {timestamp:true})

const User = mongoose.model("User" ,userSchema)

export default User