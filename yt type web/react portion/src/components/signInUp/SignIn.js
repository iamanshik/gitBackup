import React from "react";
import './sign.css'
export default function SignIn() {
  return (
    <>
      <div className="LoginContainer">
        <div className="LoginBox">
            <h1>My Web App</h1>
            <h2>Sign in</h2>
            <p>Use your My Web App Account</p>
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password" />
            <button>Sign In</button>
        </div>
      </div>
    </>
  );
}
