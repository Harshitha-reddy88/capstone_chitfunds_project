import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDG2twBPQ9nWsugdZheUAET72Z-AfuRsus",
    authDomain: "chitfunds-774ae.firebaseapp.com",
    projectId: "chitfunds-774ae",
    storageBucket: "chitfunds-774ae.appspot.com",
    messagingSenderId: "834826865786",
    appId: "1:834826865786:web:249f84f4879bb287353fc3",
    measurementId: "G-YN1N3MENXK"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)