import React, { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase-config";
import { UserContext } from "./../../App";
import { useHistory, useLocation } from "react-router";

const Login = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  const [singInUse, setSignInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { form: { pathname: "/" } };

  // const firebaseConfig = {firebaseConfig}
  var provider = new firebase.auth.GoogleAuthProvider();
  const googleHandler = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result.user.photoURL);
        const { displayName, email, photoURL } = result.user;
        const isSignInUser = {
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setSignInUser(isSignInUser);
        storeAuthToken()
        history.replace(from);
        var credential = result.credential;
        var token = credential.accessToken;
        var user = result.user;
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };

  const storeAuthToken = () => {
    firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        // Send token to your backend via HTTPS
        sessionStorage.setItem("token", idToken)
        // console.log(idToken);
        // ...
      })
      .catch(function (error) {
        // Handle error
      });
  };
  return (
    <div>
      <button onClick={() => googleHandler()}>Google sing in</button>
    </div>
  );
};

export default Login;
