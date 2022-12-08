// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA65sVBRf-UJtJsQs1K_Q4x8IbTK1ac4f8",
  authDomain: "reactquiz-5c9f0.firebaseapp.com",
  projectId: "reactquiz-5c9f0",
  storageBucket: "reactquiz-5c9f0.appspot.com",
  messagingSenderId: "618830062248",
  appId: "1:618830062248:web:b28c01e15a1c6abb50589d",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;