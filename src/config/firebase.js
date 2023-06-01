
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAeOYEMBRUfi7Ibs_ZDl7rgMa4vx6zN1ro",
  authDomain: "proyectoreact-43180.firebaseapp.com",
  projectId: "proyectoreact-43180",
  storageBucket: "proyectoreact-43180.appspot.com",
  messagingSenderId: "76747447570",
  appId: "1:76747447570:web:43ff471bbfba378e3027cb",
  measurementId: "G-PVXXCD2ZX6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);
