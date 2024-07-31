// src/context/AuthContext.jsx
import React, { createContext, useState, useContext } from "react";
import PropTypes from "prop-types"; // Import PropTypes

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    console.log(userData);
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Define prop types for AuthProvider
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validate that children is a required prop
};

export const useAuth = () => useContext(AuthContext);
