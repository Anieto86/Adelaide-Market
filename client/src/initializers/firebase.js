
// ! Fiberabe API for Autetication
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyDdGuh1BbuBBiscemWLAx9oswDyIiDwu0c",
    authDomain: "adelaide-e-market.firebaseapp.com",
    databaseURL: "https://adelaide-e-market.firebaseio.com",
    projectId: "adelaide-e-market",
    storageBucket: "adelaide-e-market.appspot.com",
    messagingSenderId: "968594630104",
    appId: "1:968594630104:web:6b86fc27583a86d5663ead",
    measurementId: "G-GVBTFGN6D5"  
});


// Initialize Firebase
const db = firebase.firestore();
const fireAuth = firebase.auth();

export {db , fireAuth};

