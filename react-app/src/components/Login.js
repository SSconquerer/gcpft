import React,{Component} from 'react'
import '../styles/Login.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom'

import {
    faYoutube,
    faFacebook,
    faTwitter,
    faGoogle
  } from "@fortawesome/free-brands-svg-icons";
class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username : '',
            password : ''
        }

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleUsernameChange(e) {
        console.log(e);
        this.setState({
            username : e.target.value
        })
    }
    handlePasswordChange(e) {
        this.setState({
            password : e.target.value
        })
    }
    render() {
        return (
            <div className="body"> 
            <div className="container">
                
                <div className="item-container">
                    <h2 className="log-in">Log in</h2>
                </div>
                <div className="item-container">
                    <button className = "image-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        aria-hidden="true" role="img" width="24" height="24"  
                        viewBox="0 0 24 24">
                            <a className = "google">
                                <FontAwesomeIcon  icon={faGoogle} size="2x" />
                            </a> 
                        </svg>
                    </button>
                    <button className = "image-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        aria-hidden="true" role="img" width="24" height="24" 
                        viewBox="0 0 24 24">
                            <a  className = "twitter">
                                <FontAwesomeIcon icon={faTwitter} size="2x" />
                            </a>
                            
                        </svg>
                    </button>
                    <button className = "image-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        aria-hidden="true" role="img" width="24" height="24"
                        viewBox="0 0 24 24" >
                            <a className = "facebook">
                                <FontAwesomeIcon  icon={faFacebook} size="2x" />
                            </a>
                        </svg>
                    </button>
                </div>
                <div className="item-container">
                    <p>or login using email</p>
                </div>
                <form>
                    <div className="form-input">
                        <label className="label">Email</label>
                        <input type="text" value = {this.state.username} onChange = {this.handleUsernameChange}/>
                    </div>
                    <div className="form-input">
                        <label className="label">Password</label>
                        <input type="password" value = {this.state.password}  onChange = {this.handlePasswordChange}/>
                    </div>
                    <div className="display-space-between">
                        <div>
                            <input type="checkbox" checked />
                            <label className="chekbox-label">Remember Me</label>
                        </div>
                        <div>
                            <a href="#">Forget password</a>
                        </div>
                    </div>
                    <div>
                        <button type="submit"> Log in 
                        
                        </button>
                    </div>
                </form>
                <div className="display-space-between">
                    <a href="#">privacy policy</a>
                    <a href="#">Terms & condition</a>
                </div>
            </div> 
            </div>
          )
    }
  
}

export default Login