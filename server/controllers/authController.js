// const { signUp, signIn } = require('../../client/src/auth/auth.js');


// const sendSuccessResponse = (res, statusCode, message, data) => {
//     res.status(statusCode).json({ statusCode, message, data });
// };

// const sendErrorResponse = (res, statusCode, message) => {
//     res.status(statusCode).json({ statusCode, message });
// };

// const registerUser = async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         // Input validation
//         if (!email || !password) {
//             return sendErrorResponse(res, 400, "Email and password are required.");
//         }

//         const user = await signUp(email, password);
//         return sendSuccessResponse(res, 201, "User created successfully", { user });
//     } catch (error) {
//         console.error("Error registering user:", error);
//         return sendErrorResponse(res, 500, "Internal server error. Please try again later.");
//     }
// };

// const loginUser = async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         // Input validation
//         if (!email || !password) {
//             return sendErrorResponse(res, 400, "Email and password are required.");
//         }

//         const user = await signIn(email, password);
//         return sendSuccessResponse(res, 200, "Successfully logged in", { user });
//     } catch (error) {
//         console.error("Error logging in:", error);
//         if (error.code === "auth/user-not-found" || error.code === "auth/wrong-password") {
//             return sendErrorResponse(res, 401, "Invalid email or password.");
//         } else {
//             return sendErrorResponse(res, 500, "Internal server error. Please try again later.");
//         }
//     }
// };

// module.exports = {
//     registerUser,
//     loginUser
// };


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

