import React from "react";
import { Link } from "react-router-dom";
import signupImage from './about-login.svg'
import './signup.css'

function Signup() {
  return (
    <section className="main-pages">
        <div className="login-containers">
          <div className="left-pages">
          <img className="" src={signupImage} alt="loading.." />
          </div>
          <div className="right-pages">
          <form>
            <h1>Sign up</h1> 
            <input type="text" name="name" placeholder="Enter your name" />
            <input type="text" name="email" placeholder="Enter your email id" />
            <input type="password" name="password" placeholder="Enter password" />
            <input type="password" name="repassword" placeholder="Conform password" />
            <div className="notAccounts">
              <p>If i have an account? <Link to="/login">Login</Link></p>
            </div>
            <button>Sign up</button>
          </form>
          </div>
        </div>
      </section>
  );
}

export default Signup;
