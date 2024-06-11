import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import login from "./loginpng.png";

function Login() {
  const handleLogin = (e) => {
    e.preventDefault();
  };
  return (
    <section className="main-page">
      <div className="login-container">
        <div className="left-page">
          <img className="" src={login} alt="loading.." />
        </div>
        <div className="right-page">
          <form>
            <h1 className="login-head">Sign in</h1>
            <input type="text" name="email" placeholder="Enter your email id" />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
            />
            <div className="notAccount">
              <p>
                Don't have an account? <Link to="/signup">Sign up</Link>
              </p>
              <p>
                Forgot password? <Link to="/reset">Reset</Link>
              </p>
            </div>
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
