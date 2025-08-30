// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_API_AUTH,
  projectId: import.meta.env.VITE_API_PROJECT,
  storageBucket: import.meta.env.VITE_API_STORAGE,
  messagingSenderId: import.meta.env.VITE_API_MESSAGING,
  appId: import.meta.env.VITE_API_APP,
};


// Initialize Firebase
const backendApp = initializeApp(firebaseConfig);

export const db = getFirestore(backendApp);