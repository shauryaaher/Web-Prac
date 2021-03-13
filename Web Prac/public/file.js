// Your web app's Firebase configuration
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

const auth = firebase.auth();

const authProvider = new firebase.auth.GoogleAuthProvider();

googleSignIn.addEventListener("click", () => {
  auth
    .signInWithPopup(authProvider)
    .then((user) => {
      console.log("Successfully signed in");
      console.log(user);
    })
    .catch((error) => {
      console.error(error);
    });
});

signOut.addEventListener("click", () => {
  auth
    .signOut()
    .then(() => {
      console.log("Successfully signed out");
    })
    .catch((error) => {
      console.error(error);
    });
});
