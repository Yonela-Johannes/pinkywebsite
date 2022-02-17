import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAFH9zCY240OZH51y7-Rhu5DAlCY1kbQeI",
    authDomain: "facebook-clone-3d18e.firebaseapp.com",
    projectId: "facebook-clone-3d18e",
    storageBucket: "facebook-clone-3d18e.appspot.com",
    messagingSenderId: "1024987377305",
    appId: "1:1024987377305:web:a76e9c6d98f14234401208",
    measurementId: "G-TPFVM8F8K1"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;