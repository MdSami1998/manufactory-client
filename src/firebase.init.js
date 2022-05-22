// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID
// };

const firebaseConfig = {
    apiKey: "AIzaSyCzvh--h-RfygdOM-mtyu6OTCz7ColgI_A",
    authDomain: "manu-factory.firebaseapp.com",
    projectId: "manu-factory",
    storageBucket: "manu-factory.appspot.com",
    messagingSenderId: "959236872883",
    appId: "1:959236872883:web:3c627f6330315c8427eec6"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;