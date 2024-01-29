// AuthContext.js

// Importing necessary functions and components from React
import React, { createContext, useContext, useState } from "react";

// Creating a new context called AuthContext
const AuthContext = createContext();

// Creating a provider component for managing authentication state
export const AuthProvider = ({ children }) => {
  // Initializing state to hold information about the currently authenticated user
  const [authenticatedUser, setAuthenticatedUser] = useState(null);

  // Function to handle user login
  const login = (user) => {
    // Updating the authenticatedUser state with the provided user information
    setAuthenticatedUser(user);
  };

  // Function to handle user logout
  const logout = () => {
    // Clearing the authenticatedUser state (logging out)
    setAuthenticatedUser(null);
  };

  // Function to retrieve the authentication token of the authenticated user
  const getAuthToken = () => {
    // Returning the authentication token if a user is authenticated, otherwise returning null
    return authenticatedUser ? authenticatedUser.token : null;
  };

  // Rendering the AuthContext.Provider with the provided children and passing the authentication context value
  return (
    <AuthContext.Provider
      value={{ authenticatedUser, login, logout, getAuthToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for accessing the authentication context and its values
export const useAuth = () => {
  // Accessing the authentication context using the useContext hook
  const context = useContext(AuthContext);

  // If the context is not found (meaning useAuth is not used within an AuthProvider), throw an error
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  // Returning the authentication context, providing access to authentication state and methods
  return context;
};
