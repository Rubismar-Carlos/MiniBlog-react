import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBGWukZjAPz7uXsjyRBxWuiSe4tojR_798",
  authDomain: "miniblog-1cb80.firebaseapp.com",
  projectId: "miniblog-1cb80",
  storageBucket: "miniblog-1cb80.appspot.com",
  messagingSenderId: "568772942049",
  appId: "1:568772942049:web:c5fcac2c73b81051b97fa0"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};