// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCK5ohF_iQLJZDh00cjdHqpKYDPi7y-C4E",
  authDomain: "electric-power-b258a.firebaseapp.com",
  projectId: "electric-power-b258a",
  storageBucket: "electric-power-b258a.appspot.com",
  messagingSenderId: "815477800332",
  appId: "1:815477800332:web:282647b645c08174beaaa9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;