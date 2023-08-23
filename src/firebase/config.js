import { initializeApp } from "firebase/app";

// import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1g6QQK3l--CvZdoC_lEx3aoR63XqO1Vk",
  authDomain: "woo---vuetify.firebaseapp.com",
  projectId: "woo---vuetify",
  storageBucket: "woo---vuetify.appspot.com",
  messagingSenderId: "940911971794",
  appId: "1:940911971794:web:a13b78b4f24e0612ea8c0b",
};

// Initialize Firebase
initializeApp(firebaseConfig);

// const auth = getAuth() ;
// const db = getFirestore();

// export { auth, db };

const db = getFirestore();

export default db;
