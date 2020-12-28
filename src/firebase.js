// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD6HMOkyk6hztK5ItoJNM9P3J1w5vbsdz4",
    authDomain: "linkedln-clone-2679c.firebaseapp.com",
    projectId: "linkedln-clone-2679c",
    storageBucket: "linkedln-clone-2679c.appspot.com",
    messagingSenderId: "211006205391",
    appId: "1:211006205391:web:a1624384c95df4ab0f36ba",
    measurementId: "G-5E01RYWFE5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();

  export {db, auth}