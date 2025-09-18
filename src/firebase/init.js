// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDL9ahXqppxbLI_TSy0viG16FWyaXrMN9g",
  authDomain: "week7-yicheng.firebaseapp.com",
  projectId: "week7-yicheng",
  storageBucket: "week7-yicheng.firebasestorage.app",
  messagingSenderId: "388463051321",
  appId: "1:388463051321:web:df95e9054e119a584803e8",
  measurementId: "G-DBGSHBBV4L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);