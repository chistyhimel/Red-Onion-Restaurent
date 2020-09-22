import React from "react";
import "./Login.css";
import loginLogout from "../../Img/logo2.png";
const Login = () => {
  return (
    <div className="login-container">
      <img
        src={loginLogout}
        alt=""
        className="rounded mx-auto my-5 d-block img-fluid"
        style={{ height: "80px"}}
      />

      <div className="login-box">
        <form className="p-md-5 p-sm-4">
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>


          <button type="submit" class="btn btn-danger form-control btn-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
