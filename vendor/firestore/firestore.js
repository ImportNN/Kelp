// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOFVtV_pRtgLO4vHkqSY-0CeYcHUcM2i8",
	authDomain: "kelp-database.firebaseapp.com",
	projectId: "kelp-database",
	storageBucket: "kelp-database.appspot.com",
	messagingSenderId: "845732617381",
	appId: "1:845732617381:web:c242cbe870c8869a9c814c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();

/**
 * Save a New Task in Firestore
 * @param {string} title the title of the Task
 * @param {string} description the description of the Task
 */
export const saveTask = (email) =>
  addDoc(collection(db, "users"), { email });