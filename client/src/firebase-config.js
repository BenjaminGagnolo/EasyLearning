import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

export const provider = new GoogleAuthProvider();

provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
provider.setCustomParameters({
  login_hint: "user@example.com",
});

export const firebaseConfig = {
  apiKey: "AIzaSyAnVdxVry1GYu2JKfbsvO8j-XjcnnQHB4Y",
  authDomain: "easylearningel23.firebaseapp.com",
  projectId: "easylearningel23",
  storageBucket: "easylearningel23.appspot.com",
  messagingSenderId: "230744562232",
  appId: "1:230744562232:web:e04dbeab725457527424cd",
  measurementId: "G-BHBRRQ9QHT",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

