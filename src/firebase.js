import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAxe6fMklhMxXJJ3uipCkK60fELwIgAlIw",
    authDomain: "clone-snapchat-3bfb5.firebaseapp.com",
    projectId: "clone-snapchat-3bfb5",
    storageBucket: "clone-snapchat-3bfb5.appspot.com",
    messagingSenderId: "793876631161",
    appId: "1:793876631161:web:6c4f6eb2c17be56ae5cea8",
    measurementId: "G-V4N8Y39FBM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, storage, provider };