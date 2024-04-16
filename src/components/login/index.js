import {Component} from 'react'

import { GoogleLogin } from '@react-oauth/google';
import './index.css'

class Login extends Component{
  

   responseMessage = (response) => {
        console.log(response);
    }

   errorMessage = (error) => {
        console.log(error);
    }

    render(){
        return (
            <div className="mainContainer">
                <div className="boardContainer">
                    <h1 className="boardName">Board.</h1>

                </div>
                <div className="signInContainer">
                    <h1 className="signInHeader">Sign In</h1>
                    <p className="signInParagraph">Sign in to your account</p>
                    <div className="loginWithGoogle">

                     <GoogleLogin onSuccess={this.responseMessage} onError={this.errorMessage} />
                     
                    </div>
                    <form className="loginFormContainer "> 
                        <div className="usernameContainer">
                            <label htmlFor="emailInput" className="label">
                                Email Address
                            </label>
                            <input
                            id="emailInput"
                            type="text"
                            placeholder="Email"
                            className="input"
                           
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
                           
                            />
                        </div>
                        <p className="forgotPassword">Forgot password?</p>
                        <button className="signInButton">Sign In</button>
                    </form>
                    <p className="registerContainer">Don't have an account? <span className="spanRegister"> Register here</span></p>
                </div>

            </div>
        )
    }
}

export default Login