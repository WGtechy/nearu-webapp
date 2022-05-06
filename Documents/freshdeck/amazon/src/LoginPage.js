import React from 'react'
import { useState, setError } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './LoginPage.css'
import { auth } from "./firebase";
import { useRef } from 'react';
import { useAuth } from './authContext';


function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const signup = useAuth();    

  const handleSubmit = async (e) => {
      e.preventDefault()
      await signup(emailRef.value, passwordRef.value)
  }
  console.log(handleSubmit)
    // const register = () =>{
    //     auth
    //     .createUserWithEmailAndPassword(email, password) 
    //     .then((auth) => {
    //         if (auth) {
    //           navigate('/')
    //         }
    //     })
    //     .catch(error => alert(error.message))
    // }


    return (
    
    <div className='loginPage'>
     <Link to='/'>
        <img className='loginPage-logo' 
        src='https://pngimg.com/uploads/amazon/amazon_PNG24.png'
            alt=''
        />
        </Link>
        <div className='login-container'>
          <h1>Sign-in</h1>
          <form onSubmit={handleSubmit}>
                <label for="email">Email</label>
                <input type="text" id="email" inputRef={emailRef} required></input>
                <label for="password">Password</label>
                <input type="password" id="password" inputRef={passwordRef} required></input>
                <label for="email">Pasword Confirmation</label> 
                <input type="text" id="email" inputRef={passwordConfirmRef} required></input>
                <button type="submit" >Sign Up</button>
            </form>
          <p>Choosing "Keep me signed in" reduces the number of times you're asked to Sign-In on this device.
To keep your account secure, use this option only on your personal devices.</p>
{/* <button  onClick={register} 
className='login-register'
>Create a new account</button> */}
        </div>
    </div>
    
  )
}

export default SignUp