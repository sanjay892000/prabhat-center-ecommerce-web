import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
      <section className="main-page">
        <div className="login-container">
          <div className="left-page">
          <img className="" src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" alt="loading.." />
          </div>
          <div className="right-page">
          <form>
            <h1 className="login-head">Sign in</h1> 
            <input type="text" name="email" placeholder="Enter your email id" />
            <input type="password" name="password" placeholder="Enter your password" />
            <div className="notAccount">
              <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
              <p>Forgot password? <Link to="/reset">Reset</Link></p>
            </div>
            <button>Login</button>
          </form>
          </div>
        </div>
      </section>
  );
}

export default Login;
