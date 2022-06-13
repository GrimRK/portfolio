import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAZhns9oQZ0rVWxM5rAJC5pIe6gdPXZMk0",
  authDomain: "portfolio-1b998.firebaseapp.com",
  projectId: "portfolio-1b998",
  storageBucket: "portfolio-1b998.appspot.com",
  messagingSenderId: "602282186816",
  appId: "1:602282186816:web:a7740694c7e682853be7a5",
  measurementId: "G-VCWTMNTZF9",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
