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
const githubProvider = new firebase.auth.GithubAuthProvider();

const persistence = firebase.auth.Auth.Persistence.SESSION;

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

githubSignIn.addEventListener("click", () => {
  auth
    .signInWithPopup(githubProvider)
    .then((user) => {
      console.log("Successfully signed in with GitHub");
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

auth
  .setPersistence(persistence)
  .then(() => {
    console.log("You'll get signed out when the window or tab is closed");
  })
  .catch((error) => {
    console.error(error);
  });

var username;

auth.onAuthStateChanged((user) => {
  if (user != null) {
    //User is signed in
    document.getElementById("googleSignIn").style.display = "none";
    document.getElementById("githubSignIn").style.display = "none";
    document.getElementById("signOut").style.display = "block";
    document.getElementById("infoUser").innerHTML =
      "Greetings, " + (username = user.displayName);
  } else {
    //User is not signed in
    document.getElementById("googleSignIn").style.display = "block";
    document.getElementById("githubSignIn").style.display = "block";
    document.getElementById("signOut").style.display = "none";
    document.getElementById("infoUser").innerHTML = "";
  }
});
