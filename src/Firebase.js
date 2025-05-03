import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

let firebaseConfig = {
  apiKey: "AIzaSyCOac21o35Hul6Ubm38Puzn_qkuNJgA-7k",
  authDomain: "projetoead-39737.firebaseapp.com",
  projectId: "projetoead-39737",
  storageBucket: "projetoead-39737.firebasestorage.app",
  messagingSenderId: "927968250538",
  appId: "1:927968250538:web:310fbbba4230cbadd29ed3"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
