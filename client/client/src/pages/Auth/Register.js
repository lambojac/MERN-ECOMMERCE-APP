import React from 'react'
import Layout from '../../components/Layout/Layout'
import "./Register.css"
import {useState} from "react"
const Register = () => {
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[address,setAddress]=useState("")
    const[phone,setPhone]=useState("")
  return (
    <Layout title="ecommerce app">
    <div classname="register">
  <form>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={name} />
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} />
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  value={address}/>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={phone} />
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1" value={password} />
    </div>
    <div className="mb-3 form-check">
      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
      <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
</div>
    </Layout>
  )
}

export default Register
