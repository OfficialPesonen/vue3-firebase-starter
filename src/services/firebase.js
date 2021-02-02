import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "API_KEY",
    authDomain: "AUTH_DOMAIN",
    databaseURL: "DATABASE_URL",
    projectId: "PROJECT_ID",
    storageBucket: "STORAGE_BUCKET",
    messagingSenderId: "MESSAGING_SENDER_ID",
    appId: "APP_ID",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const authUtils = firebase.auth;
export const firestore = firebase.firestore();
export const firestoreUtils = firebase.firestore;
export const storage = firebase.storage().ref();
