// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjdeXGUZsZKbDBKQu9TbABEwmyd738fkM",
  authDomain: "backend-curso-react-142ea.firebaseapp.com",
  projectId: "backend-curso-react-142ea",
  storageBucket: "backend-curso-react-142ea.firebasestorage.app",
  messagingSenderId: "211148955520",
  appId: "1:211148955520:web:69df5e960713eec250eb65"
};

// Initialize Firebase
const backendApp = initializeApp(firebaseConfig);

export const db = getFirestore(backendApp);