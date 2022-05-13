// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCj0gEWzvQs4wHUYKTH3bffZSIq6_tJo-4",
  authDomain: "fir-a10-f4c91.firebaseapp.com",
  projectId: "fir-a10-f4c91",
  storageBucket: "fir-a10-f4c91.appspot.com",
  messagingSenderId: "24841888308",
  appId: "1:24841888308:web:d1f91ef5c91a9336d1e061"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;




