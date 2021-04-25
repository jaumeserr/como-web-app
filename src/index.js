import React from 'react';
import ReactDOM from 'react-dom';
import firebase from "firebase/app";

import './index.css';
import App from './App';
import ReduxProvider from './redux';
import reportWebVitals from './reportWebVitals';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARfwGBXY6pMHzce9mw9T3aTDAbCScLLtw",
  authDomain: "como-web-app.firebaseapp.com",
  projectId: "como-web-app",
  storageBucket: "como-web-app.appspot.com",
  messagingSenderId: "259441495067",
  appId: "1:259441495067:web:b9a365a3ec6cab41873cbe",
  measurementId: "G-MSDM3R17T3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider>
      <App />
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
