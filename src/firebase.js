// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { connectAuthEmulator, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpy9ZIkFALuScOIKA7vbOASAbgWcqba6Y",
  authDomain: "bics-2043a.firebaseapp.com",
  projectId: "bics-2043a",
  storageBucket: "bics-2043a.appspot.com",
  messagingSenderId: "273640889071",
  appId: "1:273640889071:web:d119d76aa4417989d5991a"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export default app
const auth = getAuth(app);

