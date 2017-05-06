import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from 'firebase';
// Initialize Firebase
 var config = {
   apiKey: "AIzaSyCoDLPtQsCiz4UTAcJ1Kz6bUrNCUvWFkkU",
   authDomain: "talkeetnanumberdb.firebaseapp.com",
   databaseURL: "https://talkeetnanumberdb.firebaseio.com",
   projectId: "talkeetnanumberdb",
   storageBucket: "talkeetnanumberdb.appspot.com",
   messagingSenderId: "905009429420"
 };
 firebase.initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
