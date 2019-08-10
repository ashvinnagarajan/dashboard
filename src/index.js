import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAnFTWZTgWEugKOSUM6WY_NkxrPzRzn6dU",
    authDomain: "bruin-racing.firebaseapp.com",
    databaseURL: "https://bruin-racing.firebaseio.com",
    projectId: "bruin-racing",
    storageBucket: "bruin-racing.appspot.com",
    messagingSenderId: "675845698054",
    appId: "1:675845698054:web:0778fdd92c4ecc0a"
  };

firebase.initializeApp(firebaseConfig);


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
