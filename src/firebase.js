import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC7B64svbdRfxtJZxsg0RsTRsz16t2xdew",
  authDomain: "challenge-6bbca.firebaseapp.com",
  databaseURL: "https://challenge-6bbca.firebaseio.com",
  projectId: "challenge-6bbca",
  storageBucket: "challenge-6bbca.appspot.com",
  messagingSenderId: "935169989780",
  appId: "1:935169989780:web:12bae8f23b1900e9cb6881",
  measurementId: "G-H4PXER0B3R",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
