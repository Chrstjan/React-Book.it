import { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const loginUser = (userData) => {
    setUser(userData);
  };

  const logoutUser = () => {
    console.log(":(");
    setUser({});
  };

  useEffect(() => {
    const userExists = localStorage.getItem("user");

    if (userExists) {
      const userData = JSON.parse(userExists);
      setUser(userData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};
