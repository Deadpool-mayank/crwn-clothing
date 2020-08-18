import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyD0EM7GVnZxUivWqKJomqntHB1FbIAV3s4",
    authDomain: "crwn-db-4f051.firebaseapp.com",
    databaseURL: "https://crwn-db-4f051.firebaseio.com",
    projectId: "crwn-db-4f051",
    storageBucket: "crwn-db-4f051.appspot.com",
    messagingSenderId: "251699038063",
    appId: "1:251699038063:web:33e059aae3e2b6a1890a9a",
    measurementId: "G-EP13KCSLGM"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;