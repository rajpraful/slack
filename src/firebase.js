// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDY_hoAPw6yTeyyfyfmucFLo-15GPDPqF0",
  authDomain: "slack-607c2.firebaseapp.com",
  projectId: "slack-607c2",
  storageBucket: "slack-607c2.appspot.com",
  messagingSenderId: "1041830572759",
  appId: "1:1041830572759:web:c614ef9c49b0dda23b3692",
  measurementId: "G-3TJ31TKVBV",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
