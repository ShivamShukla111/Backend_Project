import express from 'express'
const app = express()
import cors from 'cors'
import cookieParser from 'cookie-parser' // Mai mere server se jo user ka browser hai na uske andar ki cookies access kar pau or cookies set bhi kar pau or CRUD operation bhi perform kar pau.

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "18kb"}))
app.use(express.urlencoded({extended: true, limit: "18kb"}))
app.use(express.static("Public"))
app.use(cookieParser())


//Import Routes
import userRouter from './routes/user.routes.js'

//Routes creation
app.use("/api/v1/users", userRouter)



export default app