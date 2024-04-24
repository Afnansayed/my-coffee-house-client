// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWcw4u5-URb-q4QTgK2hH6lnieoJNezUw",
  authDomain: "coffee-store-f03e3.firebaseapp.com",
  projectId: "coffee-store-f03e3",
  storageBucket: "coffee-store-f03e3.appspot.com",
  messagingSenderId: "321315328168",
  appId: "1:321315328168:web:0d572382fe53b4f08cf29d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;