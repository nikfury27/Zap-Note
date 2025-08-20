import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-RC9mRoydmb-JlOqr9Fr-YjdD6ySaghE",
  authDomain: "zapnote-b3bab.firebaseapp.com",
  projectId: "zapnote-b3bab",
  storageBucket: "zapnote-b3bab.firebasestorage.app",
  messagingSenderId: "1001319117508",
  appId: "1:1001319117508:web:4df57bc07b09a9f17d8f91"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };