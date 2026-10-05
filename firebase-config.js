// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAkzkkPFhLoqkLuptE3p7aPAO9e_QAgHjI",
  authDomain: "university-bus-tracking-ec232.firebaseapp.com",
  databaseURL: "https://university-bus-tracking-ec232-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "university-bus-tracking-ec232",
  storageBucket: "university-bus-tracking-ec232.firebasestorage.app",
  messagingSenderId: "328745281222",
  appId: "1:328745281222:web:5c82152475c7e01df8d9c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Auth aur Database taake baqi files use kar sakein
export const auth = getAuth(app);
export const db = getDatabase(app);