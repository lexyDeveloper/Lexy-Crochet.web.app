import { } from "firebase/app";
import { } from "firebase/auth";
import { } from "firebase/analytics";
const auth = getAuth(app);
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBs1qj5tZrYtRltYx_HmdFyoCR2ZU92k0I",
  authDomain: "lexy-crochet.firebaseapp.com",
  projectId: "lexy-crochet",
  storageBucket: "lexy-crochet.firebasestorage.app",
  messagingSenderId: "262470674602",
  appId: "1:262470674602:web:9ed65718952d70a37c08d3",
  measurementId: "G-BTV3JDWF56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

