import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "opgvitez-32c61.firebaseapp.com",
  projectId: "opgvitez-32c61",
  storageBucket: "opgvitez-32c61.appspot.com",
  messagingSenderId: "1027964162100",
  appId: "1:1027964162100:web:2e6b3c361f40a4707dba61",
  measurementId: "G-T3NF4BF59X",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
