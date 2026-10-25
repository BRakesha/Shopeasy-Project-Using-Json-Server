import React, { useRef, useState } from 'react'
import {  useNavigate } from 'react-router-dom'

function Login() {

    console.log(location);
    
    let message=useRef()
    let gotohome=useNavigate()

    let Credential={
        username:"Rakesh",
        password:"Rakesha@123"
    }
    let [formdata,setformdata]=useState({username:"",pass:""})

    let onchangehandle=(e)=>{
        e.preventDefault()
        setformdata({...formdata,[e.target.name]:e.target.value})
    }

    let handlesubmit=(e)=>{
        e.preventDefault()
        if (formdata.username===Credential.username && formdata.pass===Credential.password){
            gotohome("/home")
        }
        else{
            message.current.innerText="Username Or Password Are Inccorect"
        }
    }
    console.log(formdata);
    
  return (
    <>

   <div className="login-container">
    <h1>Login Page</h1>
    <div className="login-box">
        <form action="" onSubmit={handlesubmit}>
            <input type="text" name='username' placeholder='Enter Your Username' onChange={onchangehandle}/>
            <input type="password" placeholder='Enter password' name='pass' onChange={onchangehandle}/>
            <button>Login</button>
            <h3 ref={message}></h3>
        </form>
    </div>
   </div>
    </>
  )
}

export default Login
