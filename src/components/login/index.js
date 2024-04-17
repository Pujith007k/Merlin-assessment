import { GoogleLogin } from '@react-oauth/google';
import React, { useState } from 'react';
import {jwtDecode} from 'jwt-decode'
import { useNavigate } from 'react-router-dom';
import './index.css'

const Login =()=>{
    let navigate = useNavigate();

    const [Email,setEmail]=useState('')
    const [Password,setPassword]=useState('')

    const responseMessage = (response) => {
        const jwtToken=jwtDecode(response.credential)
        console.log(jwtToken);
        
        localStorage.setItem("jwtToken", jwtToken);
        navigate('/');
        
        
    }

    const errorMessage = (error) => {
        console.log(error);
    }
    const submitEmail=(event)=>{
        setEmail(event.target.value)
    }

    const submitPassword=(event)=>{
        setPassword(event.target.value)
    }

    const submitForm=(event)=>{
     event.preventDefault()
     const userDetails={Email,Password}
     console.log(userDetails)
    }

    
        return (
            <div className="mainContainer">
                <div className="boardContainer">
                    <h1 className="boardName">Board.</h1>

                </div>
                <div className="signInContainer">
                    <h1 className="signInHeader">Sign In</h1>
                    <p className="signInParagraph">Sign in to your account</p>
                    <div className="loginWithGoogle">

                     <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
                     
                    </div>
                    <form className="loginFormContainer " onSubmit={submitForm}> 
                        <div className="usernameContainer">
                            <label htmlFor="emailInput" className="label">
                                Email Address
                            </label>
                            <input
                            id="emailInput"
                            type="text"
                            placeholder="Email"
                            className="input"
                            onChange={submitEmail}
                            value={Email}
                            />
                        </div>
                        <div className="passwordContainer">
                            <label htmlFor="passwordInput" className="label">
                                Password
                            </label>
                            <input
                            id="passwordInput"
                            type="password"
                            placeholder="Password"
                            className="input"
                            onChange={submitPassword}
                            value={Password}
                            />
                        </div>
                        <p className="forgotPassword">Forgot password?</p>
                        <button type="button" className="signInButton">Sign In</button>
                    </form>
                    <p className="registerContainer">Don't have an account? <span className="spanRegister"> Register here</span></p>
                </div>

            </div>
            
        )
    }


export default Login