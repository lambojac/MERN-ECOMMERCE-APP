const express=require("express")

const app= express()

app.get("/",(req,res)=>{
    res.send({
        message:"welcome to ecommer app"
    })
})

const PORT =8080