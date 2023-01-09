// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvWCqVFZXJ7kflMuxt3x5V9PHkNERCktU",
  authDomain: "fire-auth2-b2bc1.firebaseapp.com",
  projectId: "fire-auth2-b2bc1",
  storageBucket: "fire-auth2-b2bc1.appspot.com",
  messagingSenderId: "627316204479",
  appId: "1:627316204479:web:1e66028346ad38b681370a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();


export const auth = getAuth(app);
