// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoX9hfV2_FyuiGqrWqLjFigr_a9emRQwE",
  authDomain: "nomnom-xd.firebaseapp.com",
  projectId: "nomnom-xd",
  storageBucket: "nomnom-xd.appspot.com",
  messagingSenderId: "481168221599",
  appId: "1:481168221599:web:d024f1f4d20649cad0c9aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };