// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth"; //Needed for Google Account authentication
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Change this to your Firebase App configuration!!
const firebaseConfig = {
  apiKey: "AIzaSyAKfl2M3wgbhKqMxtfVsZaiCKvr4WU-QN8",
  authDomain: "codeandgeek-andromeda.firebaseapp.com",
  projectId: "codeandgeek-andromeda",
  storageBucket: "codeandgeek-andromeda.appspot.com",
  messagingSenderId: "1096628255584",
  appId: "1:1096628255584:web:58a2e45559612109963c05",
  measurementId: "G-8GD6JQBFPD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//Export Google Auth as Provider (Need to enable it in the Firebase Dahsboard!)
export const provider = new GoogleAuthProvider();
