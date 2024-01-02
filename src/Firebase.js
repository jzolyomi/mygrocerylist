// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth"; //Needed for Google Account authentication
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Change this to your Firebase App configuration!!
const firebaseConfig = {
  apiKey: "AIzaSyB9N1o7_tRM1XcNnvbGaFsFwtZKtLkbN7g",
  authDomain: "my-grocery-list-app-b0d20.firebaseapp.com",
  projectId: "my-grocery-list-app-b0d20",
  storageBucket: "my-grocery-list-app-b0d20.appspot.com",
  messagingSenderId: "834019620093",
  appId: "1:834019620093:web:396c6c1cdf7a495ad7ba94",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//Export Google Auth as Provider (Need to enable it in the Firebase Dahsboard!)
export const provider = new GoogleAuthProvider();
