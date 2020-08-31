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

  export const createUserProfileDocument = async(userAuth,additionalData) => {
      if(!userAuth) return ;

      const userRef = firestore.doc(`users/${userAuth.uid}`);
      
      const snapShot = await userRef.get();
      
      if(!snapShot.exists){
        const {displayName , email} = userAuth;
        const createdAt = new Date();

        try{
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          })}
        catch(error){
          console.log('error creating user', error.message);
        }}
      return userRef;
  }

  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc(obj.title);
      batch.set(newDocRef, obj);
    });

    return await batch.commit();
  };

  export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
      const {title,items} = doc.data();

      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      }
    });

    return transformedCollection.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    }, {});
  };

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;