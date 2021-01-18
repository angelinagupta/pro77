import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig= {
    apiKey: "AIzaSyBnpNsmLzysYzHHdKA_jzzWJqw0h-rXJu4",
    authDomain: "booksanta-c5082.firebaseapp.com",
    projectId: "booksanta-c5082",
    storageBucket: "booksanta-c5082.appspot.com",
    messagingSenderId: "373845382696",
    appId: "1:373845382696:web:3cf4b0b9ae6340e517071d"
}

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();