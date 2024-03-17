import React from 'react'
import Layout from '../../components/Layout/Layout'
import "./Register.css"
import {useState} from "react"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
const Register = async() => {
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[address,setAddress]=useState("")
    const[phone,setPhone]=useState("")
    const navigate=useNavigate()
    const submit=async(e)=>{
        e.preventDefault()
try{
const res=await axios.post("http://localhost:8080/api/v1/auth/register",{name, email, address, phone})
if(res.data.success){
    toast.success(res.data.message)
    navigate("/login")
}else{
    toast.error(res.data.message)
}
       }catch(error){
console.log(error)
toast.error('something went wrong')
       }
    }
  return (
    <Layout title="ecommerce app">
    <div classname="register">
  <form onSubmit={submit}>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={name} onChange={(e)=>setName(e.target.value)} />
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Address</label>
      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  value={address} onChange={(e)=>setAddress(e.target.value)} required/>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
      <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={phone} onChange={(e)=>setPhone(e.target.value)} required/>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1" value={password}  onChange={(e)=>setPassword(e.target.value)} required/>
    </div>
    <div className="mb-3 form-check">
      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
      <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" className="btn btn-primary" >Submit</button>
  </form>
</div>
    </Layout>
  )
}

export default Register
