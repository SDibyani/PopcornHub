
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDnfhhlZp-pKpQLVH_9ufjPCPWIR-fFRLw",
  authDomain: "movieapp-1eec8.firebaseapp.com",
  projectId: "movieapp-1eec8",
  storageBucket: "movieapp-1eec8.firebasestorage.app",
  messagingSenderId: "311331855042",
  appId: "1:311331855042:web:bfe51b45eaf232fa93b95b",
  measurementId: "G-RLXMGRX7FZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth= getAuth(app);