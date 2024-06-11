import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import signupImage from "./signuppng.png";
import {BaseUrl} from "../Urls";
import "./signup.css";

function Signup() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      repassword: ""
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required*"),
      email: Yup.string().email("Invalid email address").required("Email is required*"),
      password: Yup.string().min(6, "Password must be at least 8 characters").required("Password is required*"),
      repassword: Yup.string().oneOf([Yup.ref('password'), null], "Passwords must match").required("Confirm Password is required*")
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post(`${BaseUrl}/api/auth/register`,  {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ name: values.name, emails: values.email, password: values.password }),
        });
        const user = await response.json();
      if (user.success) {
        formik.resetForm();
      } 
    }catch (error) {
        console.error(error);
        // handle error (e.g., display error message)
      }
    }
  });

  return (
    <section className="main-pages">
      <div className="login-containers">
        <div className="left-pages">
          <img className="" src={signupImage} alt="loading.." />
        </div>
        <div className="right-pages">
          <form onSubmit={formik.handleSubmit}>
            <h1>Sign up</h1>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="error">{formik.errors.name}</div>
            ) : null}
            <input
              type="text"
              name="email"
              placeholder="Enter your email id"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error">{formik.errors.password}</div>
            ) : null}
            <input
              type="password"
              name="repassword"
              placeholder="Confirm password"
              value={formik.values.repassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.repassword && formik.errors.repassword ? (
              <div className="error">{formik.errors.repassword}</div>
            ) : null}
            <div className="notAccounts">
              <p>
                If you have an account? <Link to="/login">Login</Link>
              </p>
            </div>
            <button type="submit">Sign up</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Signup;