import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBh9Q5jnE0z_5VPvc2qhArW1Q_q3Yeqf_g",
  authDomain: "zillowproject-435f6.firebaseapp.com",
  projectId: "zillowproject-435f6",
  storageBucket: "zillowproject-435f6.appspot.com",
  messagingSenderId: "780604602024",
  appId: "1:780604602024:web:29d8ab3628a5db6e3cf49d",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
