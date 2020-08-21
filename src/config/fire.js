import firebase from 'firebase'
// Required for side-effects
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCd_Gt-RcwMuh0BoiPVyQqkkNTpbmycyKs",
  authDomain: "phutbol-70b57.firebaseapp.com",
  databaseURL: "https://phutbol-70b57.firebaseio.com",
  projectId: "phutbol-70b57",
  storageBucket: "phutbol-70b57.appspot.com",
  messagingSenderId: "343787537179",
  appId: "1:343787537179:web:78fe349b014d404ce2c9be",
  measurementId: "G-59JF9XTN4N"
};
// Initialize Firebase
export const fire = firebase.initializeApp(firebaseConfig);
export const db = fire.firestore();