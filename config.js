import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyArIG2t0Ae6zDQGZhSdIzZDkbTxjzOBUHA",
    authDomain: "project-c-71-9e96b.firebaseapp.com",
    projectId: "project-c-71-9e96b",
    storageBucket: "project-c-71-9e96b.appspot.com",
    messagingSenderId: "307690565062",
    appId: "1:307690565062:web:f8d591017dac509e2616c7"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
