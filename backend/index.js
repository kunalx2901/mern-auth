import express from 'express' 
// import {User} from './models/user.model.js'
import userRoutes from "./routes/user.routes.js"
import authRoutes from "./routes/auth.routes.js"


const app = express()
app.use(express.json())

app.listen(3000, (req, res) => {
	console.log("server ran succcesfully!!!")
})


app.use("/api/user" , userRoutes)
app.use("/api/auth" , authRoutes)

app.use((err,req,res,next)=>{
	
	const statuscode = err.statuscode || 500
	const message = err.message || "INTERNAL SERVER ERROR"

	return res.json({
		statuscode,
		message
	})
})