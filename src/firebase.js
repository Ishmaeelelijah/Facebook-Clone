import firebase from 'firebase'

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCBH9JDdXOF_-hJanpKvWr3-ts7BPJ4Zcw",
    authDomain: "facebook-clone-29d13.firebaseapp.com",
    databaseURL: "https://facebook-clone-29d13.firebaseio.com",
    projectId: "facebook-clone-29d13",
    storageBucket: "facebook-clone-29d13.appspot.com",
    messagingSenderId: "936297133925",
    appId: "1:936297133925:web:d833cb6a60357cb216d38c",
    measurementId: "G-M2J88E6QC2"
  };

export const firebaseApp = firebase.initializeApp(firebaseConfig);

export const userRef = firebaseApp.database().ref("users");

export const postRef = firebaseApp.database().ref("posts");

export const storageRef = firebaseApp.storage();