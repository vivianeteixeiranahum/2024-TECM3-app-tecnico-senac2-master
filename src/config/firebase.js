// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxYzW2bSQU-kp4CHWuQjZB_Qb3w-paTk8",
  authDomain: "fir-t1-ae20e.firebaseapp.com",
  projectId: "fir-t1-ae20e",
  storageBucket: "fir-t1-ae20e.appspot.com",
  messagingSenderId: "1008343596130",
  appId: "1:1008343596130:web:1d59422245610bebb7a53b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
