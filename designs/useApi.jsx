import axios from "axios";
import { useContext } from "react";
import { ConnexionTokenContext } from "./context/ConnexionTokenContext";
import { UserContext } from "./context/UserContext";
import useAxiosWithInterceptor from "./instanceAxios";

export const useApi = () => {
  const { token, setToken, deleteToken } = useContext(ConnexionTokenContext);
  const axiosInstance = useAxiosWithInterceptor();

  const postUserAccount = async (data) => {
    const { email, password } = data;

    const response = await axiosInstance
      .post("http://localhost:3001/api/v1/user/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        setToken(response.data.body.token);
        return response;
      })
      .catch((error) => {
        return error.response.data;
      });

    return response;
  };

  const postUserProfil = async () => {
    if (!token && token !== "") {
      throw new Error("Pas de token");
    }

    const response = await axiosInstance
      .post(
        "http://localhost:3001/api/v1/user/profile",
        {},
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )
      .catch((error) => {
        return error.response.data;
      });

    return response;
  };

  const putUserProfil = async (data) => {
    if (!token && token !== "") {
      throw new Error("Pas de token");
    }

    const response = await axiosInstance
      .put(
        "http://localhost:3001/api/v1/user/profile",
        {
          ...data,
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )
      .catch((error) => {
        return error.response.data;
      });

    return response;
  };

  return { postUserAccount, postUserProfil, putUserProfil };
};
