// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD73cBPdZRkQMJL7lHRvmBlh-M1Db4dqrI",
  authDomain: "art-store-fe201.firebaseapp.com",
  projectId: "art-store-fe201",
  storageBucket: "art-store-fe201.appspot.com",
  messagingSenderId: "474712253281",
  appId: "1:474712253281:web:2b2ffeaa15c4494a115b20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
