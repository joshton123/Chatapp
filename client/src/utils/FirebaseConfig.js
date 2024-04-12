import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDGNb4asx0OpEyP_EvzQi_9sECJNml8yi0",
  authDomain: "chat-app-e6de0.firebaseapp.com",
  projectId: "chat-app-e6de0",
  storageBucket: "chat-app-e6de0.appspot.com",
  messagingSenderId: "616285514106",
  appId: "1:616285514106:web:ad58a5df9fc86349f9cec3",
  measurementId: "G-4HD9ZZ0MGK"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);