// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcmZ7ZJVuOP-sCsONtHUeA0raOT-b552U",
  authDomain: "fir-authentication-3c8f8.firebaseapp.com",
  projectId: "fir-authentication-3c8f8",
  storageBucket: "fir-authentication-3c8f8.firebasestorage.app",
  messagingSenderId: "430513229919",
  appId: "1:430513229919:web:b9bc0512ff515c9d568bea",
  measurementId: "G-EW89M33RBB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth;