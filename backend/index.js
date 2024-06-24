import express from 'express' 
// import {User} from './models/user.model.js'
import userRoutes from "./routes/user.routes.js"


const app = express()

app.listen(3000, (req, res) => {
	console.log("server ran succcesfully!!1")
})


app.use("/api/user" , userRoutes)