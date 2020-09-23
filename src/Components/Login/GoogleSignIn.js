import React, { useContext } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig"
import { UserContext } from "../../App";

firebase.initializeApp(firebaseConfig)


const GoogleSignIn = () => {
    const { value, value2 } = useContext(UserContext);
    const [loggedInUser,setLoggedInUser] = value;
    

    console.log(loggedInUser)
  return (
    <div>
      <button className="btn btn-primary btn-block" onClick={handleGoogleSignIn}>Sign in with Google</button>
    </div>
  );
};

export default GoogleSignIn;
