import React, { useEffect } from "react";
import firebase from "firebase/compat/app";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";

const PhoneAuth = (props) => {
  useEffect(() => {
    const uiConfig = {
      signInOptions: [firebase.auth.PhoneAuthProvider.PROVIDER_ID],
      signInSuccessUrl: "https://web.programming-hero.com/",
      privacyPolicyUrl: "/",
    };

    // Wrap the initialization in a Promise to handle timeout
    const initializeFirebaseUI = () => {
      return new Promise((resolve, reject) => {
        const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(props.auth);

        const uiTimeout = setTimeout(() => {
          reject(new Error("FirebaseUI initialization took too long."));
        }, 15000); // 15 seconds timeout

        ui.start(".phone-auth-container", uiConfig)
          .then(() => {
            clearTimeout(uiTimeout);
            resolve(); // Resolve the Promise once initialization is successful
          })
          .catch((error) => {
            clearTimeout(uiTimeout);
            reject(error); // Reject the Promise in case of an error
          });
      });
    };

    initializeFirebaseUI()
      .then(() => {
        console.log("FirebaseUI initialization successful.");
      })
      .catch((error) => {
        console.error("FirebaseUI initialization error:", error);
      });
  }, [props.auth]);

  return <div className="phone-auth-container">
  </div>;

};

export default PhoneAuth;
