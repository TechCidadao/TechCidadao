import { createContext, useState, useContext } from "react";

export const UserInfoContext = createContext();

export const UserInfoProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [token, setToken] = useState("");

  const getUserInfo = (token, name) => {
    localStorage.setItem("@TC:token", token);
    setToken(token);
    localStorage.setItem("@TC:username", name);
    setUserName(name);
  };

  return (
    <UserInfoContext.Provider value={{ userName, token, getUserInfo }}>
      {children}
    </UserInfoContext.Provider>
  );
};

export const useUserInfo = () => useContext(UserInfoContext);
