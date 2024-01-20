// AuthContext.js
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticatedUser, setAuthenticatedUser] = useState(null);

  const login = (user) => {
    console.log("Logging in:", user);
    setAuthenticatedUser(user);
  };

  const logout = () => {
    console.log("Logging out");
    setAuthenticatedUser(null);
  };

  const getAuthToken = () => {
    return authenticatedUser ? authenticatedUser.token : null;
  };

  return (
    <AuthContext.Provider
      value={{ authenticatedUser, login, logout, getAuthToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
