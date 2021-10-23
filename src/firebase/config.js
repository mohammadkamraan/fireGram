import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyCfgzpR4EgE0-83MCzMinjuZ6ff4yw-hD8",

    authDomain: "firegram-fad51.firebaseapp.com",

    projectId: "firegram-fad51",

    storageBucket: "firegram-fad51.appspot.com",

    messagingSenderId: "812086961875",

    appId: "1:812086961875:web:04a157f9cf5bcbb3799626"

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };