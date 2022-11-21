import React from "react"
import { Link } from "react-router-dom"
import "../CSS/Login.css"
export default function Login() {
  return (
    <div className="login">
        <span className="loginTitle">Login</span>
        <br/>
        <form className="loginForm">
            <label>Email</label>
            <br/>
            <input type="text" className="loginInput" placeholder="Enter your email..." />
            <br/>
            <br/>
            <label>Password</label>
            <br/>
            <input type="password" className="loginInput" placeholder="Enter your password..." />
            <br/>
            <button className="loginButton">Login</button>
        </form>
        {/* <button className="loginRegisterButton">
            <Link className="link" to="/register">Register</Link>
        </button> */}
    </div>
  )
}