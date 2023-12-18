// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHWBwWfONstVEOGExBqHQNXE9_j52EA2k",
  authDomain: "buyproperty-1154d.firebaseapp.com",
  projectId: "buyproperty-1154d",
  storageBucket: "buyproperty-1154d.appspot.com",
  messagingSenderId: "882269508283",
  appId: "1:882269508283:web:b1860966af94ba348c0f9e",
  measurementId: "G-J12SJDLCQ0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
