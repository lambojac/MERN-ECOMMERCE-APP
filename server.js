import express from "express"
import  bgCyan from "colors"
import dotenv  from "dotenv"
import morgan from "morgan"
import connectDB from "./config/db.js"
//configure env 
dotenv.config()
//rest object

//database config
connectDB()

const app=express()

//middlewares
app.use(express.json())
app.use(morgan("dev"))
//rest api
app.get("/",(req,res)=>{
    res.send(
        ("<h1>hello how are you doing</h1>")
    )
})
//PORT
const PORT =process.env.PORT
app.listen(PORT,()=>{
console.log(`server running on ${process.env.DEV_MODE} ${PORT}`.bgCyan.white);
})
