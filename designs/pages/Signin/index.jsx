import React from "react";
import "./signin.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { sendToken } from "../../redux/index";

import { postUserAccount } from "../../useApi";

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(errors);

  const onSubmit = async (data) => {
    console.log(data);

    const response = await postUserAccount(data);
    console.log(response);
    if (response.status === 200) {
      console.log("ok");
      console.log(response);
      dispatch(sendToken(response.data.body.token));

      navigate("/profil");
    } else {
      console.log("not ok");
      console.log(response.message);
      setError("email", {
        type: "manual",
        message: response.message,
      });
    }
  };

  return (
    <>
      <div className="sign-in-content">
        <FontAwesomeIcon icon={faUserCircle} className="sign-in-icon fa" />
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-wrapper">
            <label htmlFor="email">Username</label>
            <input
              type="text"
              id="email"
              name="email"
              {...register("email", { required: true })}
            />
            {errors && errors.email && (
              <span className="error-message">{errors.email.message}</span>
            )}
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              {...register("password", { required: true })}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" name="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
      </div>
    </>
  );
}
