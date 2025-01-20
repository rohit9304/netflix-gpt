// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB48yyLw1eM0BSoQxGkVPtLjGBIpL7UF2A",
  authDomain: "netflixgpt-ddaca.firebaseapp.com",
  projectId: "netflixgpt-ddaca",
  storageBucket: "netflixgpt-ddaca.firebasestorage.app",
  messagingSenderId: "831464223902",
  appId: "1:831464223902:web:2b1dfba6796f3a703ef78f",
  measurementId: "G-Q4NTLZ502W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
