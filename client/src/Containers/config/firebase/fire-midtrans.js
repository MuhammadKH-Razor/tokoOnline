import Firebase2 from 'firebase';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCEPKcofPm-Ig6UkkFClff1vZ3--KDg-_s",
  authDomain: "midtrans-olshop-d1100.firebaseapp.com",
  databaseURL: "https://midtrans-olshop-d1100.firebaseio.com",
  projectId: "midtrans-olshop-d1100",
  storageBucket: "midtrans-olshop-d1100.appspot.com",
  messagingSenderId: "626539928496",
  appId: "1:626539928496:web:30fb0445e3331fd4939475",
  measurementId: "G-PZB04HMC9E"
};


const fireMidtrans = Firebase2.initializeApp(firebaseConfig);
export const databaseMidtrans = Firebase2.database();
export const firestoreMidtrans = Firebase2.firestore();
export const storageMidtrans = Firebase2.storage();

export default fireMidtrans;