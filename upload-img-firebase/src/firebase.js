// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Config cá nhân được khởi tạo dựa trên firebase
const firebaseConfig = {
  apiKey: "AIzaSyCOo879kA86Y6_XtP9we3Cc4Ol90oz_eYo",
  authDomain: "uploadimgpt01.firebaseapp.com",
  projectId: "uploadimgpt01",
  storageBucket: "uploadimgpt01.appspot.com",
  messagingSenderId: "328412284045",
  appId: "1:328412284045:web:a414b679e5a56706430ec4",
  measurementId: "G-8QP2X7HKXH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);
