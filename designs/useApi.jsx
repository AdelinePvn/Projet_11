import useAxiosWithInterceptor from "./instanceAxios";
import { successfulLogin } from "./redux";
import { useDispatch, useSelector } from "react-redux";

export const useApi = () => {
  const axiosInstance = useAxiosWithInterceptor();
  const token = useSelector((state) => state.user.token);

  const dispatch = useDispatch();

  const postUserAccount = async (data) => {
    const { email, password } = data;

    const response = await axiosInstance
      .post("http://localhost:3001/api/v1/user/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        dispatch(successfulLogin({ token: response.data.body.token }));
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
