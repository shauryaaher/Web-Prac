importScripts("https://www.gstatic.com/firebasejs/8.3.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.3.0/firebase-messaging.js");
//Please put your own Firebase config.
var firebaseConfig = {
    apiKey: "AIzaSyCtvhW0qWpIJn41bx54xTxgxVEmRFwAW-s",
    authDomain: "web-prac-12a96.firebaseapp.com",
    projectId: "web-prac-12a96",
    storageBucket: "web-prac-12a96.appspot.com",
    messagingSenderId: "947491979867",
    appId: "1:947491979867:web:56633f2cc68459f30bb57e",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const messaging = firebase.messaging();
//#JeSuisLeParton
