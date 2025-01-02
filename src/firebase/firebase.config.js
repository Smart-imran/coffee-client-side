// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVYb1HYIvcFd3SFrtxOQp-XhcdGOkOkyY",
  authDomain: "coffee-store-d1bb0.firebaseapp.com",
  projectId: "coffee-store-d1bb0",
  storageBucket: "coffee-store-d1bb0.firebasestorage.app",
  messagingSenderId: "575821841715",
  appId: "1:575821841715:web:cd83881bca8948a6942a46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;