// auth.js
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

export const signUp = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        throw error;
    }
};

export const signIn = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        throw error;
    }
};
