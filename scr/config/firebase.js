import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "@firebase/firestore";
import "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDN2rickzMcu67sipV-aLxv7Z3i-QosbwI",
  authDomain: "fir-test-863b5.firebaseapp.com",
  projectId: "fir-test-863b5",
  storageBucket: "fir-test-863b5.appspot.com",
  messagingSenderId: "861426425749",
  appId: "1:861426425749:web:7aca41d65021f0fd38e09c",
  databaseURL: "https://fir-test-863b5-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);