import React, { createContext, useContext, useState } from 'react';

// Create the UserContext
const UserContext = createContext();

// Define the UserProvider
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};


export const useUser = () => useContext(UserContext)