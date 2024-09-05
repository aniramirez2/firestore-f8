// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCy7_fI13p6RATpEFiy6fIISGL-5nuW46o",
  authDomain: "front-8.firebaseapp.com",
  projectId: "front-8",
  storageBucket: "front-8.appspot.com",
  messagingSenderId: "19788994011",
  appId: "1:19788994011:web:3d21a51f7f9b47100783fe"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app)