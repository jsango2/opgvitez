import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzeWc9QzCaXrdlzsNoeB_j0My-bEop8ok",
  authDomain: "charterbooking-10868.firebaseapp.com",
  databaseURL:
    "https://charterbooking-10868-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "charterbooking-10868",
  storageBucket: "charterbooking-10868.appspot.com",
  messagingSenderId: "1079951104744",
  appId: "1:1079951104744:web:b8f9464d1f5a7ac551875d",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
