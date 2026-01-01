// Import the functions you need from the SDKs you need
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getEvn } from "./getEnv";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: getEvn('VITE_FIREBASE_API'),
  authDomain: "mern-blog-5411d.firebaseapp.com",
  projectId: "mern-blog-5411d",
  storageBucket: "mern-blog-5411d.firebasestorage.app",
  messagingSenderId: "1068920507440",
  appId: "1:1068920507440:web:96efab6096d04b1dc571f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export { auth, provider }