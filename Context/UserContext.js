// UserContext.js

import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    // Your initial state goes here
    name: '',
    // other state properties...
  });

  const login = (name: string) => {
    setUser((prevState) => ({
      ...prevState,
      name: name,
    }));
  };

  const logout = () => {
    setUser(() => ({
      name: '',
    }));
  };

  // Add other state manipulation functions as needed

  return (
    <UserContext.Provider
      value={{
        user,
        actions: {
          login,
          logout,
        },
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
