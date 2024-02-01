import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDZdizFQEStc2R3m8Ja3JVxS97LQyrnMmw",
    authDomain: "resume-builder-532d2.firebaseapp.com",
    projectId: "resume-builder-532d2",
    storageBucket: "resume-builder-532d2.appspot.com",
    messagingSenderId: "495187066211",
    appId: "1:495187066211:web:20342ed8a1face4da3a756",
    measurementId: "G-KH69QJ1YQG"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); 
