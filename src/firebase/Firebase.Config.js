// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyB0b__TdPj5VNhOViRpy2wI4-Ai800DIM8",
  authDomain: "assignment-09-aa4c9.firebaseapp.com",
  projectId: "assignment-09-aa4c9",
  storageBucket: "assignment-09-aa4c9.appspot.com",
  messagingSenderId: "543809815284",
  appId: "1:543809815284:web:824ee16ae58690e07494a1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;