import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCn5xBGSOpNCLykJhdlbBJAR0b007fZpk4",
  authDomain: "bepleasuredbypinky.firebaseapp.com",
  projectId: "bepleasuredbypinky",
  storageBucket: "bepleasuredbypinky.appspot.com",
  messagingSenderId: "21402435076",
  appId: "1:21402435076:web:a3da593fdb36b822837f51"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };