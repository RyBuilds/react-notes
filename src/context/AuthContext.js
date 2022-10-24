import { createContext, useContext } from "react";

const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  return (
    <AuthContext.Provider value={{}}>{props.children}</AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
