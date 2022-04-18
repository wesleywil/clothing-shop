import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyBXX8Y7UaZpArkmUNr1wgMNP2nh-WWuTeE",
    authDomain: "clothing-shop-de521.firebaseapp.com",
    projectId: "clothing-shop-de521",
    storageBucket: "clothing-shop-de521.appspot.com",
    messagingSenderId: "830585744406",
    appId: "1:830585744406:web:8c6a855ab6937d800bd937",
    measurementId: "G-8TPS954NS8"
  };

firebase.initializeApp(config);
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;