// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmB4T3_6KrUvNuewKsbXMXUvtQHp4ntx4",
  authDomain: "badminton-tournament-cbf42.firebaseapp.com",
  projectId: "badminton-tournament-cbf42",
  storageBucket: "badminton-tournament-cbf42.firebasestorage.app",
  messagingSenderId: "783824112109",
  appId: "1:783824112109:web:5bf86ecfc8ca1c27183fe4",
  measurementId: "G-RT8RXEMRRZ"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
