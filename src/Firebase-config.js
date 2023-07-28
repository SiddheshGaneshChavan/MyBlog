// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyCM0V-ASJQ0xZsnH09Ugek0RbFdRW48e7I",
  authDomain: "sid-blogwebsite.firebaseapp.com",
  projectId: "sid-blogwebsite",
  storageBucket: "sid-blogwebsite.appspot.com",
  messagingSenderId: "279265552511",
  appId: "1:279265552511:web:419b5e9a20c8abf758774a",
  measurementId: "G-W757T1SG09"
};


const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider()