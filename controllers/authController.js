import userModel from "../models/userModel.js";
import {hashPassword} from "../helpers/authHelper.js"
import JWT from "jsonwebtoken"
import { comparePassword } from "../helpers/authHelper.js";
export const registerController=async(req,res)=>{

try{
const{name, email, password, phone, address}=req.body

//validations
if(!name){
    return res.send({error:"Name is required"})
}
if(!email){
    return res.send({error:"Email is required"})
}
if(!password){
    return res.send({error:"password is required"})
}
if(!phone){
    return res.send({error:"Phone is required"})
}
if(!address){
    return res.send({error:" address is required"})
}
// checkuser
const existing=await userModel.findOne({email})
//existing user
if(existing){
    return res.status(200).send({
        success:true,
        message:"Already register please login"
    })
}

//register user
const hashedPassword=await hashPassword(password)
//save
const user=new userModel({name, email, phone, address,password:hashedPassword}).save()
res.status(201).json({
    success:true,
    message:"User Register successfully",
    user,
})
}catch(error){
console.log(error)
res.status(500).send({
    success:false,
    message:"error in registration",
    error
})
}

}

// post login
export const loginController=async(req,res)=>{
    try{
const {email, password}=req.body
if(!email||!password){
return res.status(404).send({
    success:false,
    message:"Invalid email or password"
})
}

const user=await userModel.findOne({email})
if(!user){
    return res.status(404).send({
        success:false,
        message:"Email isnot registered"
    })
}
const match =await comparePassword(password,user.password)
if(!match){
    return res.status(200).send({
        success:false,
        mesage:"invalid password"
    })
}
//token
const token =await JWT.sign({_id:user._id}, process.env.JWT_SECRET,{
    expiresIn:"7d",
})
res.status(200).send({
    success:true,
    message:"login successfully",
    user:{
name:user.name,
email:user.email,
phone:user.phone,
address:user.address
    },
    token,
})
    

}catch(error){
console.log(error)
res.status(500).send({
    success:false,
    message:"Error in login",
    error
})
    }
}
//test 
 export const testController=(req,res)=>{
console.log("protected route")
 }