import React, { useContext, useState } from "react";
import "./Login.css";
import loginLogout from "../../Img/logo2.png";
import * as firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from "../../App";
import firebaseConfig from "./firebaseConfig";
import { useHistory, useLocation } from "react-router-dom";

firebase.initializeApp(firebaseConfig);

const Login = () => {
  const { value, value2 } = useContext(UserContext);
  const [newUser, setNewUser] = useState(false);
  const [loggedInUser, setLoggedInUser] = value;
  const [userInfo, setUserInfo] = useState({
    name: "",
    password: "",
    email: "",
    success: false,
    error: "",
  });
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const handleGoogleSignIn = () => {
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        var token = result.credential.accessToken;
        const { displayName, email } = result.user;
        const signedInUser = {
          name: displayName,
          email: email,
          loggedIn: true,
        };
        setLoggedInUser(signedInUser);
        console.log(loggedInUser);
        history.replace(from);
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        const newUserInfo = { ...userInfo };
        newUserInfo.error = errorMessage;
        setUserInfo(newUserInfo);
      });
  };

  const handleBlur = (e) => {
    let isFormValid = true;

    if (e.target.name === "email") {
      isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      const isPasswordValid = e.target.value.length > 6;
      const passwordContainsNumber = /\d{1}/.test(e.target.value);
      isFormValid = isPasswordValid && passwordContainsNumber;
    }

    if (isFormValid) {
      const newUserInfo = { ...userInfo };
      newUserInfo[e.target.name] = e.target.value;
      setUserInfo(newUserInfo);
    }
  };

  const handleSubmit = (e) => {
    if (userInfo.email && userInfo.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(userInfo.email, userInfo.password)
        .then((response) => {
          updateUserName(userInfo.name);
          const { displayName, email } = response.user;
          console.log(response.user.displayName);
          const signedInUser = {
            name: userInfo.name,
            email: email,
            loggedIn: true,
          };
          setLoggedInUser(signedInUser);
          const newUserInfo = { ...userInfo };
          newUserInfo.success = true;
          newUserInfo.error = "";
          setUserInfo(newUserInfo);
          history.replace(from);
        })
        .catch(function (error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          const newUserInfo = { ...userInfo };
          newUserInfo.success = false;
          newUserInfo.error = errorMessage;
          setUserInfo(newUserInfo);
        });
      if (!newUser && userInfo.email && userInfo.password) {
        firebase
          .auth()
          .signInWithEmailAndPassword(userInfo.email, userInfo.password)
          .then((response) => {
            const { displayName, email } = response.user;
            const signedInUser = {
              name: displayName,
              email: email,
              loggedIn: true,
            };
            setLoggedInUser(signedInUser);
            history.replace(from);
          })
          .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            const newUserInfo = { ...userInfo };
            newUserInfo.success = false;
            newUserInfo.error = errorMessage;
            setUserInfo(newUserInfo);
          });
      }
    }
    e.preventDefault();
  };

  const updateUserName = (name) => {
    const user = firebase.auth().currentUser;
    user
      .updateProfile({
        displayName: name,
      })
      .then(function () {
        console.log("Youser name updated");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="login-container">
      <img
        src={loginLogout}
        alt=""
        className="rounded mx-auto mb-5 pt-3 d-block img-fluid"
        style={{ height: "80px" }}
      />

      <div className="login-box">
        <form onSubmit={handleSubmit}>
          {newUser && (
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                class="form-control"
                id="name"
                name="name"
                onBlur={handleBlur}
              />
            </div>
          )}

          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
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
            {newUser && <small className="text-warning">Password should be more than six characters & must contain a number</small>}
          </div>
          {/* {newUser && (
            <div class="form-group">
              <label for="exampleInputPassword2">Confirm Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword2"
                name="password2"
                onBlur={handleBlur}
              />
            </div>
          )} */}

          <button type="submit" class="btn btn-danger form-control btn-lg">
            {newUser ? "Sign in" : "Log in"}
          </button>
        </form>
        {userInfo.success ? (
          " "
        ) : (
          <small className="d-block text-center text-danger">
            {userInfo.error}
          </small>
        )}
        {newUser ? (
          <p className="d-block text-center">
            already have an account?{" "}
            <span
              className="text-danger"
              style={{ cursor: "pointer" }}
              onClick={() => setNewUser(!newUser)}
            >
              Login
            </span>
          </p>
        ) : (
          <p className="d-block text-center">
            Don't have an account?{" "}
            <span
              className="text-danger"
              style={{ cursor: "pointer" }}
              onClick={() => setNewUser(!newUser)}
            >
              Sign in
            </span>
          </p>
        )}

        <p className="d-block text-center">--- or ---</p>

        <button className="btn btn-dark btn-block" onClick={handleGoogleSignIn}>
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
