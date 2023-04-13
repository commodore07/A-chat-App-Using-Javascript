import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCtUhwhv4YwiS8tJvpE7pyyS5zQHjzEBjY",
  authDomain: "gochat-12484.firebaseapp.com",
  projectId: "gochat-12484",
  storageBucket: "gochat-12484.appspot.com",
  messagingSenderId: "855520094828",
  appId: "1:855520094828:web:32a94aa924d7dd2d59c649"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()