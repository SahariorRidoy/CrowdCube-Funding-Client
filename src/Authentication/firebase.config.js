// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEc_XkJQs8qNDfDCX6gZwLfscQu-Mj-AM",
  authDomain: "crowd-funding-df6e1.firebaseapp.com",
  projectId: "crowd-funding-df6e1",
  storageBucket: "crowd-funding-df6e1.firebasestorage.app",
  messagingSenderId: "253177397171",
  appId: "1:253177397171:web:b45e9fbf13e59eba9695c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app