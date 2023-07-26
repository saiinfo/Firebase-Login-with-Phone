import './App.css';
import firebase from "firebase/compat/app"
import PhoneAuth from './PhoneAuth';
import React, {useEffect, useState } from "react";
import {onAuthStateChanged} from "firebase/auth"
function App() {

const firebaseConfig = {
  apiKey: "AIzaSyDzCjHKj06VVJ_G2eiB2F0xeXDHFe0Lg3k",
  authDomain: "otp-project-2e009.firebaseapp.com",
  projectId: "otp-project-2e009",
  storageBucket: "otp-project-2e009.appspot.com",
  messagingSenderId: "736479801424",
  appId: "1:736479801424:web:798bda13304d2e104fe155",
  measurementId: "G-KG3XQ081K4"
};


firebase.initializeApp(firebaseConfig);

const [user, setUser] = useState(null);

useEffect(() =>{
  const unRegistered = onAuthStateChanged(firebase.auth(),(currentUser)=>{
    console.log(currentUser);
    setUser(currentUser);
  })

  return()=>unRegistered();
     
     })

  return (
    <div className="App">
     <h1>Phone number auth</h1>
     <PhoneAuth auth={firebase.auth()}></PhoneAuth>
    </div>
  );
}

export default App;
