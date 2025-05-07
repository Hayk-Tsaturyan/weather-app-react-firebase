import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCUA6u-2mHXz-pDE4cDbd37dFjpl0bLKr4",
  authDomain: "wheather-app-a9cd3.firebaseapp.com",
  projectId: "wheather-app-a9cd3",
  storageBucket: "wheather-app-a9cd3.firebasestorage.app",
  messagingSenderId: "822493511921",
  appId: "1:822493511921:web:91dfebdc2e3f4c8191a950",
  measurementId: "G-LM49BCQLFN",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
