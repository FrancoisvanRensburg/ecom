import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAmi_ncf6_eWkOBGzF-n8nbo7LW6afYffE',
  authDomain: 'crown-db-659d1.firebaseapp.com',
  databaseURL: 'https://crown-db-659d1.firebaseio.com',
  projectId: 'crown-db-659d1',
  storageBucket: 'crown-db-659d1.appspot.com',
  messagingSenderId: '310055172516',
  appId: '1:310055172516:web:bea3c7d0f8214877182931',
  measurementId: 'G-NXKYZ1Z6RW',
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google authentication utility
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
