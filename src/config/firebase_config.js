
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyCdyihG3RBFUTzx-Pf9reIPzJvpf1LuQOM",
    authDomain: "login-auth-6087f.firebaseapp.com",
    projectId: "login-auth-6087f",
    storageBucket: "login-auth-6087f.appspot.com",
    messagingSenderId: "37163924265",
    appId: "1:37163924265:web:e03546495f7fae34901538",
    measurementId: "G-KZ1TQ9QFC6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app;