import { initializeApp } from "firebase/app";
// for the database
import { getFirestore } from "firebase/firestore";

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMsQnujrjM4kAGi6fuWyV70EYGrVoE494",
  authDomain: "doc-clone-1ce98.firebaseapp.com",
  projectId: "doc-clone-1ce98",
  storageBucket: "doc-clone-1ce98.appspot.com",
  messagingSenderId: "998814404321",
  appId: "1:998814404321:web:e49da3fbfd1d2df3da71a0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
