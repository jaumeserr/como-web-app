import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/app";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCtZcwzH26wRIj2fljDtXP69l2b52wkeo",
  authDomain: "como-mataro-app.firebaseapp.com",
  projectId: "como-mataro-app",
  storageBucket: "como-mataro-app.appspot.com",
  messagingSenderId: "694759194937",
  appId: "1:694759194937:web:ebfebaeca50e47940ba8e8",
  measurementId: "G-9BPB5DGB3D"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
