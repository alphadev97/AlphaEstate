// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "alphaestate-37e93.firebaseapp.com",
  projectId: "alphaestate-37e93",
  storageBucket: "alphaestate-37e93.appspot.com",
  messagingSenderId: "164896790958",
  appId: "1:164896790958:web:c7576242c3b323e9c4503f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
