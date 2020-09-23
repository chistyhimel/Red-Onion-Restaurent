import React, { useState } from "react";
import "./Login.css";
import loginLogout from "../../Img/logo2.png";
import GoogleSignIn from "./GoogleSignIn";
const Login = () => {

  const [user,setUser] = useState({
    name:"",
    password:"",
    email:"",

  })

  const handleBlur = (e) => {
    let isFormValid = true;

    if(e.target.name === "email"){
      isFormValid = /\S+@\S+\.\S+/.test(e.target.value)
    }
    if(e.target.name === "password"){
      const isPasswordValid = e.target.value.length > 6 ;
      const passwordContainsNumber = /^\d*$/.test(e.target.value)
      isFormValid = isPasswordValid && passwordContainsNumber;
    }
    if(isFormValid){
      
    }
  }
  return (
    <div className="login-container">
      <img
        src={loginLogout}
        alt=""
        className="rounded mx-auto my-5 d-block img-fluid"
        style={{ height: "80px" }}
      />

      <div className="login-box">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              onBlur={handleBlur}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              name="password"
              onBlur={handleBlur}
            />
          </div>

          <button type="submit" class="btn btn-danger form-control btn-lg">
            Log in
          </button>
        </form>
        <p className="d-block text-center pt-3">or</p>

        <GoogleSignIn></GoogleSignIn>
      </div>
    </div>
  );
};

export default Login;
