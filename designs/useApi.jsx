import axios from "axios";
import { useSelector } from "react-redux";

export const postUserAccount = async (data) => {
  const { email, password } = data;

  const response = await axios
    .post("http://localhost:3001/api/v1/user/login", {
      email: email,
      password: password,
    })
    .catch((error) => {
      return error.response.data;
    });

  return response;
};

export const postUserProfil = async () => {
  // const token = useSelector((state) => state.login.token);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ODJjZWNjNWM3ZTM2MTkxOGRjNTc1MCIsImlhdCI6MTcwNDI4MTg5OCwiZXhwIjoxNzA0MzY4Mjk4fQ.A8dEaF0_f_DRdkSBFGhC5k91QihADgvPk_cEhivH_6k";

  if (!token) {
    throw new Error("Pas de token");
  }

  const response = await axios
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
