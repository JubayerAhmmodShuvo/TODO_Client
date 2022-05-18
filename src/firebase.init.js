// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0uhaMbmTxar9uM7Ooa91SKGiFq1mN4YU",
  authDomain: "todo-app-c8f85.firebaseapp.com",
  projectId: "todo-app-c8f85",
  storageBucket: "todo-app-c8f85.appspot.com",
  messagingSenderId: "323724044530",
  appId: "1:323724044530:web:cf6ab4cd6f96a440e5c86b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;