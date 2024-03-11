import React, { useState } from "react";
import "./profil.scss";
import { useApi } from "../../useApi";
import { useForm } from "react-hook-form";
import AccountItem from "../../modules/Account";
import { useDispatch, useSelector } from "react-redux";
import { getProfileData } from "../../redux";

export default function Profil() {
  const [displayInput, setDisplayInput] = useState(false);

  const user = useSelector((state) => state.user.user);

  const { putUserProfil } = useApi();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const dispatch = useDispatch();
  const { postUserProfil } = useApi();

  const onSubmit = async (data) => {
    const response = await putUserProfil(data);
    if (response.status === 200) {
      dispatch(getProfileData(postUserProfil));
      setDisplayInput(false);
    } else {
      setError("firstName", {
        type: "manual",
        message: response.message,
      });
    }
  };

  return (
    <>
      <div className="header">
        {!displayInput ? (
          <>
            <h1>
              Welcome back
              <br />
              {user?.firstName} {user?.lastName}!
            </h1>
            <button
              className="edit-button"
              onClick={() => setDisplayInput(true)}
            >
              Edit Name
            </button>
          </>
        ) : (
          <h1>Edit user info</h1>
        )}

        {displayInput && (
          <form className="change-name" onSubmit={handleSubmit(onSubmit)}>
            <div className="input-change-name">
              <label htmlFor="firstName">User name:</label>
              <input
                type="text"
                placeholder={"Pseudonyme"}
                {...register("userName", { required: true })}
              />
            </div>
            <br />
            <div className="input-change-name">
              <label htmlFor="firstName">First name:</label>
              <input type="text" placeholder={user?.firstName} disabled />
            </div>
            <br />
            <div className="input-change-name">
              <label htmlFor="firstName">Last name:</label>
              <input type="text" placeholder={user?.lastName} disabled />
            </div>
            <div className="buttons">
              <button type="submit" className="send-button">
                Save
              </button>
              <button
                className="send-button"
                onClick={() => setDisplayInput(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>

      <h2 className="sr-only">Accounts</h2>
      <AccountItem
        accountTitle="Argent Bank Checking (x8349)"
        accountAmount="2,082.79"
        accountDescription="Available Balance"
      />
      <AccountItem
        accountTitle="Argent Bank Savings (x6712)"
        accountAmount="10,928.42"
        accountDescription="Available Balance"
      />
      <AccountItem
        accountTitle="Argent Bank Credit Card (x8349)"
        accountAmount="184.30"
        accountDescription="Current Balance"
      />
    </>
  );
}
