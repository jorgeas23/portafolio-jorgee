
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCoog9P2a1tRek7zwSamEgA_gw31TjL-Oo",
  authDomain: "portafolio-jorge-46dfb.firebaseapp.com",
  projectId: "portafolio-jorge-46dfb",
  storageBucket: "portafolio-jorge-46dfb.appspot.com", // 
  messagingSenderId: "427479818465",
  appId: "1:427479818465:web:e7899911af5086445457a0",
  measurementId: "G-8G1XW514XN"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
