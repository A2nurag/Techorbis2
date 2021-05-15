import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBUwGa2WedIRMkXPDqOfmA3CSjKax-Ypr4",
    authDomain: "techorbis2.firebaseapp.com",
    projectId: "techorbis2",
    storageBucket: "techorbis2.appspot.com",
    messagingSenderId: "52334027073",
    appId: "1:52334027073:web:e97aba56d41c5e256b81c0",
    measurementId: "G-3YVF1SMM1M"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;