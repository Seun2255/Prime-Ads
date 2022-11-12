import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBcFp0xj7lqtFBol3jntoLr0oVnzf7DUFw",
  authDomain: "prime-adds.firebaseapp.com",
  projectId: "prime-adds",
  storageBucket: "prime-adds.appspot.com",
  messagingSenderId: "381499065946",
  appId: "1:381499065946:web:9002d6acfad38c9683fa63",
};

const app = initializeApp(firebaseConfig);
export default app;
