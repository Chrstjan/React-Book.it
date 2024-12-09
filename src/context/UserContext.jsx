import { createContext } from "react";
import { useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState();

  const loginUser = (userData) => {
    setUser(userData);
  };

  const logoutUser = () => {
    setUser({});
  };

  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};
