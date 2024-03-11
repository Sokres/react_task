// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTUYB1vGK-vLqHzOKxn-AaM2COaRJ-cxs",
  authDomain: "myproject-2a210.firebaseapp.com",
  projectId: "myproject-2a210",
  storageBucket: "myproject-2a210.appspot.com",
  messagingSenderId: "884572802665",
  appId: "1:884572802665:web:863c2d007a1a3d8b029cf8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);