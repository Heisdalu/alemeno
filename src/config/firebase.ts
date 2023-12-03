// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZrvT7qy8Hv4RMdvTZmT_Mi9Jt4vytQuU",
  authDomain: "alemeno-a525d.firebaseapp.com",
  projectId: "alemeno-a525d",
  storageBucket: "alemeno-a525d.appspot.com",
  messagingSenderId: "846122018655",
  appId: "1:846122018655:web:430cc48f8b3cede86038ea",
  measurementId: "G-1VV4VMYJGJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
// console.log(app);
