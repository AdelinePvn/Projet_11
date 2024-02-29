import React, { useContext, useEffect, useState } from "react";
import { useApi } from "../useApi";
import { ConnexionTokenContext } from "./ConnexionTokenContext";

export const UserContext = React.createContext({
  user: null,
  setUser: () => {},
});

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { postUserProfil } = useApi();

  const { token } = useContext(ConnexionTokenContext);

  const getProfileData = async () => {
    if (!token) {
      return;
    }

    const response = await postUserProfil();

    if (response.status === 200) {
      setUser(response.data.body);
    }
  };

  const updateUser = () => {
    getProfileData();
  };

  useEffect(() => {
    getProfileData();
  }, [token]);

  return (
    <UserContext.Provider value={{ user, setUser, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
