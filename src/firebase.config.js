// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOARXxalTT_vs4ORnIhPSr6I1wa3cuZ7I",
  authDomain: "house-marketplace-app-78f58.firebaseapp.com",
  projectId: "house-marketplace-app-78f58",
  storageBucket: "house-marketplace-app-78f58.appspot.com",
  messagingSenderId: "883927476420",
  appId: "1:883927476420:web:d5dbeb3a17de151fddc191"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()