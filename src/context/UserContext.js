import React, { createContext, useState } from 'react';

// Crea el contexto
const UserContext = createContext();

// Crea un proveedor de contexto
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider };
export default UserContext;
