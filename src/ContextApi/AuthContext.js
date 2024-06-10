import React, { createContext, useContext, useState } from "react";
import {
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { auth } from "../Firebase/firebase";

// Create AuthContext
const AuthContext = createContext();

// Create AuthProvider component to wrap your app
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userid, setUserid] = useState(null); // State to store the user's UID

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setIsLoggedIn(true);
      setUserid(userCredential.user.uid); // Set the UID
    } catch (error) {
      console.error("Error signing in:", error.message);
      throw error; // Rethrow error to handle it in the SignIn component
    }
  };

  const googleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setIsLoggedIn(true);
      setUserid(result.user.uid); // Set the UID
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
      throw error; // Rethrow error to handle it in the SignIn component
    }
  };

  const facebookLogin = async () => {
    const provider = new FacebookAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setIsLoggedIn(true);
      setUserid(result.user.uid); // Set the UID
    } catch (error) {
      console.error("Error signing in with Facebook:", error.message);
      throw error; // Rethrow error to handle it in the SignIn component
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setIsLoggedIn(false);
      setUserid(null); // Clear the UID
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, userid, login, googleLogin, facebookLogin, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
