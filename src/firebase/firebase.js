// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpNKfIB2jM-tGoPKJ2lJ1S4HiamCn6wfI",
  authDomain: "duke-website-8b9d7.firebaseapp.com",
  projectId: "duke-website-8b9d7",
  storageBucket: "duke-website-8b9d7.appspot.com",
  messagingSenderId: "429863889147",
  appId: "1:429863889147:web:40b85ca8f12dd98eb4285e",
  measurementId: "G-RBFS0CY4E9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);