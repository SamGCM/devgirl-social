// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCLhlcA8ZbHFxh5PJYjmpxsFtVoC92sQmg",
  authDomain: "dev-girl.firebaseapp.com",
  databaseURL: "https://dev-girl-default-rtdb.firebaseio.com",
  projectId: "dev-girl",
  storageBucket: "dev-girl.appspot.com",
  messagingSenderId: "145651261099",
  appId: "1:145651261099:web:c522a373b2fdcd259f61ee",
  measurementId: "G-F7X85E623G"
};


export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)