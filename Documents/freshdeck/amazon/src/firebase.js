import "firebase/compat/database"; 
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA-4BHOfdSAqoNUf0tyR_iBoqpIUT7cm_Q",
    authDomain: "clone-b8c91.firebaseapp.com",
    projectId: "clone-b8c91",
    storageBucket: "clone-b8c91.appspot.com",
    messagingSenderId: "759164766797",
    appId: "1:759164766797:web:133017d1a6c42ba0adaa04",
    measurementId: "G-CCMX71SKPT"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = getAuth(firebaseApp);


  export { 
    db,
    auth
  };
  