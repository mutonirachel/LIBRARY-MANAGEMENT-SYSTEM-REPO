import React from 'react'
import './login.css'
import { FcGoogle } from "react-icons/fc";
import { TbArrowBack } from "react-icons/tb";
function Login() {
  return (
    <div>
    <div className='app'>
        <div className='loginContainer'>
            <h1 className='welcome'>WELCOME TO WISDOM LIBRARY</h1>
            <h3 className='please'>Please enter your details</h3>
            <button className='google'> Login with google <FcGoogle/></button> 
            
            <div className='lines-or'>
                <div className='aimee'></div>  
                <span className='login-span-or'>Or</span> 
            <div className='aime'></div>  
            </div>
           <div className='login-form'>
            <div className='input-container'>
              <label> Email</label><br/><br/>
              <input type="email"required  className='email'/>
            </div> <br />
                <div className='input-container'>
                    <label>Password</label> <br/><br />
                    <input type="password" required  className='password'/><br /> <br /> 
                <input type="checkbox" /> Remember me <span className='login-span-1'>Forgot password </span>
                </div>
               
                <button className='loginbut'> Login</button>
        
                <button className='singn'>Back <TbArrowBack /></button>
                </div>
                    <p  className='add'>Don't have an account?<span className='login-span-2'>Sign up</span></p> 
                </div>
                </div>
    </div>

  )
}

export default Login
