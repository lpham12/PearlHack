
  // Initialize Firebase
  // TODO: Replace with your project's customized code snippet
  var config = {
     apiKey: "AIzaSyAPZ-lHN-0djIAvdie40OAHLzhox2UilMI",
     authDomain: "pearlhack-6998a.firebaseapp.com",
     databaseURL: "https://pearlhack-6998a.firebaseio.com",
     projectId: "pearlhack-6998a",
     storageBucket: "pearlhack-6998a.appspot.com",
     messagingSenderId: "930675368553"
  };
  firebase.initializeApp(config);
// Firebase App is always required and must be first
/*var firebase = require("firebase/app");

 Add additional services that you want to use
require("firebase/auth");
require("firebase/database");
require("firebase/firestore");
require("firebase/messaging");
require("firebase/functions");
*/
// Comment out (or don't require) services that you don't want to use
// require("firebase/storage");
firebase.initializeApp(config);
/*
function googleLogin() {
    var provider = new firebase.auth.GoogleAuthProvider();
    
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });

      firebase.auth().getRedirectResult().then(function(result) {
        if (result.credential) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
          // ...
        }
        // The signed-in user info.
        var user = result.user;
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
}
*/
var usersRef = firebase.database().ref('user');

document.getElementById('quizForm').addEventListener('submit', submitForm);

function submitForm(e){
  e.preventDefault();

  var gender = getInputVal('gender');

  saveMessage(gender);

  alert("Alert Uploaded to Server");

  document.getElementById('quizForm').reset();
}

function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(color){
  var newUsersRef = usersRef.push();
  newUsersRef.set({
    gender: gender,
    
  });
}
/*
// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyAPZ-lHN-0djIAvdie40OAHLzhox2UilMI",
    authDomain: "pearlhack-6998a.firebaseapp.com",
    databaseURL: "https://pearlhack-6998a.firebaseio.com",
    projectId: "pearlhack-6998a",
    storageBucket: "pearlhack-6998a.appspot.com",
    messagingSenderId: "930675368553"
});
 

var config = {
  apiKey: "AIzaSyAPZ-lHN-0djIAvdie40OAHLzhox2UilMI",
    authDomain: "pearlhack-6998a.firebaseapp.com",
    databaseURL: "https://pearlhack-6998a.firebaseio.com",
    projectId: "pearlhack-6998a",
    storageBucket: "pearlhack-6998a.appspot.com",
    messagingSenderId: "930675368553"
};
firebase.initializeApp(config);
var users = firebase.database().ref("users");


var submitUser = function () {

  // Get input values from each of the form elements
  var firstName = $("#firstName").val();
  console.log(firstName);
  var lastName = $("#lastName").val();
  console.log(lastName);

  // Push a new recommendation to the database using those values
  users.push({
    "firsName": firstName,
    "lastName": lastName,
  });
};




firebase.auth().onAuthStateChanged(function(user){
  if(user) {
document.getElementById("quizForm").style.display = "initial";
document.getElementById("quizForm").style.display = "none";
} else {

  }
})

function submit(){
  var data= [];

  //new connection to database
  ref.on("value", function (snapshot) {
    console.log(snapshot.val());

    data=snapshot.val();
  })

    $('#quizFrom').submit(function(event){
      var $form = $(this);
      console.log("form submitted to database");
    })

    var firstName = $('#firstName').val();
    console.log(firstName);

    var lastName = $('#lastName').val();
    console.log(lastName);
}*/
