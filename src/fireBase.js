// src/firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDbOf-AgSYhaG_XC7VgsMVuMF4hsBlyR-M",
    authDomain: "xtraka-cbd34.firebaseapp.com",
    projectId: "xtraka-cbd34",
    storageBucket: "xtraka-cbd34.appspot.com",
    messagingSenderId: "64190530473",
    appId: "1:64190530473:web:30c593e362ea3d1c763ab8",
    measurementId: "G-B0XJED2596"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Google Auth Provider
const provider = new GoogleAuthProvider();

// Functions for Authentication
const signInWithGoogle = () => signInWithPopup(auth, provider);
const logOut = () => signOut(auth);

export { auth, db, signInWithGoogle, logOut, onAuthStateChanged };
