import React, { useState, useEffect } from "react";

export const ConnexionTokenContext = React.createContext({
  token: "",
  setToken: () => {},
  deleteToken: () => {},
});

export const TOKEN_LOCAL_STORAGE_KEY = "connexion_token";

export const ConnexionTokenContextProvider = ({ children }) => {
  const [token, setTokenState] = useState(
    localStorage.getItem(TOKEN_LOCAL_STORAGE_KEY) || ""
  );

  const setToken = (newToken) => {
    localStorage.setItem(TOKEN_LOCAL_STORAGE_KEY, newToken);
    setTokenState(newToken);
  };

  const deleteToken = () => {
    localStorage.removeItem(TOKEN_LOCAL_STORAGE_KEY);
    setTokenState("");
  };

  useEffect(() => {
    setTokenState(localStorage.getItem(TOKEN_LOCAL_STORAGE_KEY) || "");
  }, []);

  return (
    <ConnexionTokenContext.Provider value={{ token, setToken, deleteToken }}>
      {children}
    </ConnexionTokenContext.Provider>
  );
};
