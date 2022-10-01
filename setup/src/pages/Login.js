import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import './forms.css'
const Login = () => {
  const [username, setUsername]=useState('')
  const [password, setPassword]=useState('')
const fileuploadhandler=(e)=>{
e.preventDefault();
  const body={
    'username':username,
    'passWord':password
  }
  const config ={
    headers:{ 
        'Content-Type': 'application.json',
        'Authorization': 'basic T64Mdy7m['
        
    },
  }
  
  
 axios.post('http://localhost:3002/api/auth/login',
  body
 ).then((res)=>{
  console.log(res)
 })
 .catch((err)=>console.log(err))
 
}

  return (
    <div className="wrapper">
        <div className="title">
          Login
         </div>
        <form className="form" onSubmit={fileuploadhandler}>
        <div className="inputfield">
        <label>Username</label>
        <input  onChange={(e)=>setUsername(e.target.value)} value={username} type="text" className="input"></input>
         </div> 
         <div className="inputfield">
        <label>Password</label>
        <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" className="input"></input>
         </div> 
         <button className='btn-btn'>Submit</button>
         </form>
    </div>	
  )
}

export default Login