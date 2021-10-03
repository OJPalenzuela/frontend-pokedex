import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDhfOBx5pSaAyj4_pnzZOWEkEyZJQ5ri-A",
    authDomain: "frontend-pokedex.firebaseapp.com",
    projectId: "frontend-pokedex",
    storageBucket: "frontend-pokedex.appspot.com",
    messagingSenderId: "214158070791",
    appId: "1:214158070791:web:f5f1db07a28b1672fe46a2"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const google = new firebase.auth.GoogleAuthProvider();
const facebook = new firebase.auth.FacebookAuthProvider();

export{
    db,
    google,
    facebook,
    firebase
}