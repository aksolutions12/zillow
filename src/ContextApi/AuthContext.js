import React, { createContext, useContext, useState } from "react";

// Create AuthContext
const AuthContext = createContext();

// Create AuthProvider component to wrap your app
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    // Perform login logic
    setIsLoggedIn(true);
  };

  const logout = () => {
    // Perform logout logic
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
