import express from "express"
import  bgCyan from "colors"

const app=express()
app.get("/",(req,res)=>{
    res.send({
        message:"welcome to ecommer app"
    })
})
//PORT
const PORT =8080
app.listen(PORT,()=>{
console.log(`server running on ${PORT}`.bgCyan.white);
})
