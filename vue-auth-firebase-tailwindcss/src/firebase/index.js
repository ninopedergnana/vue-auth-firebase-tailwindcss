import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBWKf9KdSrGSYKxxan0S5f9o3F1HzWsIXg",
    authDomain: "vue-auth-firebase-tailwindcss.firebaseapp.com",
    projectId: "vue-auth-firebase-tailwindcss",
    storageBucket: "vue-auth-firebase-tailwindcss.appspot.com",
    messagingSenderId: "343007954231",
    appId: "1:343007954231:web:09f692964f235525b8c6b2",
    measurementId: "G-PLFY0RPV1W"
  };

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export { auth }