// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAlY8UQCnrNZbiRZshMf0HEnoRH56p7I4A",
    authDomain: "router-firebase-integrat-f2cec.firebaseapp.com",
    projectId: "router-firebase-integrat-f2cec",
    storageBucket: "router-firebase-integrat-f2cec.appspot.com",
    messagingSenderId: "350434187055",
    appId: "1:350434187055:web:ab71ed99433e202c8b33da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;