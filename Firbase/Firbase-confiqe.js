// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgzIeWT9SKYL7vGf6ijmsBd6TUIAGnDBQ",
  authDomain: "topictrove-20587.firebaseapp.com",
  projectId: "topictrove-20587",
  storageBucket: "topictrove-20587.appspot.com",
  messagingSenderId: "759452965377",
  appId: "1:759452965377:web:690c30aea7398cc7ea3e00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth = getAuth(app)
export default Auth
