// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKMuUG37G8VlMQNpDayQvUeA8c7KprYeg",
  authDomain: "notes-2c43e.firebaseapp.com",
  projectId: "notes-2c43e",
  storageBucket: "notes-2c43e.appspot.com",
  messagingSenderId: "517575553147",
  appId: "1:517575553147:web:e4a98908f3f30b8174b2de",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const auth = firebase.auth();
export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();
export const firestore = getFirestore();
