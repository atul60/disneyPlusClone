import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAic76KsG3oe_Z4CN7XAt2vjwzxW8OoFL0",
    authDomain: "disneyplusclone-5115d.firebaseapp.com",
    projectId: "disneyplusclone-5115d",
    storageBucket: "disneyplusclone-5115d.appspot.com",
    messagingSenderId: "366631815137",
    appId: "1:366631815137:web:963ec6516be50ae98874a0",
    measurementId: "G-HR1JHD6NHK"
  };

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export {auth, provider, storage};
export default db;