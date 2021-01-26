import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBe66hsdW1fPZt20NK1NQnaflA-ZnEoGJ8",
  authDomain: "ecommerce-154cf.firebaseapp.com",
  projectId: "ecommerce-154cf",
  storageBucket: "ecommerce-154cf.appspot.com",
  messagingSenderId: "553931661845",
  appId: "1:553931661845:web:50d2c0d8c42daa91f7641c",
  measurementId: "G-VB6H728XJ6"
};

const Firebase = firebase.initializeApp(firebaseConfig);
export const database = firebase.database();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export default Firebase;