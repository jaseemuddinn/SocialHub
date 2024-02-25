const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } = require('firebase/auth');
const { initializeApp } = require('firebase/app');
const { error } = require('../utils/responseWrapper');

const firebaseConfig = {
    apiKey: "AIzaSyDq9IUYOrT2RnKo-r4LJWf0waW7S2J6Tjk",
    authDomain: "social-hub-66e6f.firebaseapp.com",
    projectId: "social-hub-66e6f",
    storageBucket: "social-hub-66e6f.appspot.com",
    messagingSenderId: "693987226385",
    appId: "1:693987226385:web:2e7e92ca7478530c5652b0",
    measurementId: "G-0PKLVPPKYS",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();


const signUp = async (email, password) => {
    try {
        console.log("signUp function called");
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("inside signUp function");
        return userCredential.user;
    } catch (e) {
        // return error(400, e.message) // Propagate error for specific handling in authController.js
        console.log(e.message);
    }
};

const signIn = async (email, password) => {
    try {
        console.log("signIn function called");
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("inside signIn function");
        return userCredential.user;
    } catch (e) {
        // return error(400, e.message); // Propagate error for specific handling in authController.js
        console.log(e.message);
    }
};

module.exports = {
    signUp,
    signIn
};

