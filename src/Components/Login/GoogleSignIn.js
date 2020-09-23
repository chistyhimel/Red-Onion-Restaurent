import React, { useContext } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig"
import { UserContext } from "../../App";

firebase.initializeApp(firebaseConfig)


const GoogleSignIn = () => {
    const { value, value2 } = useContext(UserContext);
    const [loggedInUser,setLoggedInUser] = value;
    let provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn =()=>{
        firebase.auth().signInWithPopup(provider).then(function(result) {
            var token = result.credential.accessToken;
            const {displayName,email}= result.user;
            const signedInUser = {name:displayName,email:email,loggedIn:true}
            setLoggedInUser(signedInUser)
           
          }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
          });
    }
    console.log(loggedInUser)
  return (
    <div>
      <button className="btn btn-primary btn-block" onClick={handleGoogleSignIn}>Sign in with Google</button>
    </div>
  );
};

export default GoogleSignIn;
