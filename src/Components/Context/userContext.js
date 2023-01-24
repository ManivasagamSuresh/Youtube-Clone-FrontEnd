import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [User,setUser] = useState('');
  return <UserContext.Provider value={{User,setUser}}>{children}</UserContext.Provider>;
};
