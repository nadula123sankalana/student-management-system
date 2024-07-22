// src/contexts/AuthContext.js

import React, { createContext, useContext, useState } from 'react';

// Create context object
const AuthContext = createContext();

// Custom hook to use AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthProvider component to provide AuthContext values
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({
    // Default user data
    displayName: 'John Doe',
    email: 'john.doe@example.com',
    photoURL: 'https://via.placeholder.com/150',
    dateOfBirth: '1990-01-01',
    phoneNumber: '+1234567890',
    address: '123 Main St, City, Country',
    // Add more fields as needed
  });

  const value = {
    currentUser,
    // Add other authentication-related methods here
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
