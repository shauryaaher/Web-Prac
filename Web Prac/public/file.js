// Your web app's Firebase configuration
//Put your own Firebase config
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
firebase.analytics();
const auth = firebase.auth();
const messaging = firebase.messaging();
const perf = firebase.performance();

messaging
  .requestPermission()
  .then(() => {
    console.log("Cloud Messaging permission granted");
    return messaging.getToken();
  })
  .then((token) => {
    console.log(token);
  })
  .catch((error) => {
    Toast.show("An error occured while granting messaging permission");
    setTimeout(() => {
      Toast.hide("An error occured while granting messaging permission");
    }, 3000);
  });

const authProvider = new firebase.auth.GoogleAuthProvider();
const githubProvider = new firebase.auth.GithubAuthProvider();
const microsoft = new firebase.auth.OAuthProvider("microsoft.com");

const persistence = firebase.auth.Auth.Persistence.SESSION;

signInWithMicrosoft.addEventListener("click", () => {
  auth.signInWithPopup(microsoft)
  .then((user) => {
    console.log("Successfully signed in");
    console.log(user);
  })
  .catch((error) => {
    console.error(error);
    Toast.show("An error occured while signing you in");
    setTimeout(() => {
      Toast.hide("An error occured while signing you in");
    });
  });
});

googleSignIn.addEventListener("click", () => {
  auth
    .signInWithPopup(authProvider)
    .then((user) => {
      console.log("Successfully signed in");
      console.log(user);
    })
    .catch((error) => {
      Toast.show("An error occured while signing you in");
      setTimeout(() => {
        Toast.hide("An error occured while signing you in");
      }, 3000);
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
      Toast.show("An error occured while signing you in");
      setTimeout(() => {
        Toast.hide("An error occured while signing you in");
      }, 3000);
      console.error(error);
    });
});

guestUser.addEventListener("click", () => {
  auth
    .signInAnonymously()
    .then(() => {
      console.log("Successfully signed in");
    })
    .catch((error) => {
      setTimeout(() => {
        Toast.hide("An error occured while signing you in");
      }, 3000);
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
      Toast.show("An error occured while signing you out");
      setTimeout(() => {
        Toast.hide("An error occured while signing you out");
      }, 3000);
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
    document.getElementById("guestUser").style.display = "none";
    document.getElementById("signOut").style.display = "block";
    document.getElementById("signInWithMicrosoft").style.display = "none";
    document.getElementById("infoUser").innerHTML =
      "Greetings, " + (username = user.displayName);
  } else {
    //User is not signed in
    document.getElementById("googleSignIn").style.display = "block";
    document.getElementById("githubSignIn").style.display = "block";
    document.getElementById("guestUser").style.display = "block";
    document.getElementById("signOut").style.display = "none";
    document.getElementById("signInWithMicrosoft").style.display = "block";
    document.getElementById("infoUser").innerHTML = "";
  }
});

const Toast = {
  init() {
    this.hideTimout = null;
    this.el = document.createElement("div");
    this.el.id = "toast";
    document.body.appendChild(this.el);
  },
  show(message) {
    clearTimeout(this.hideTimout);
    this.el.textContent = message;
    this.el.id = "toast-visible";
  },
  hide(message) {
    setTimeout(this.hideTimout);
    this.el.textContent = message;
    this.el.id = "toast";
  },
};
document.addEventListener("DOMContentLoaded", () => Toast.init());
//#JeSuisLePatron
