import React, { useContext, useEffect, useState } from "react";
import "./profil.scss";
import { useApi } from "../../useApi";
import { useForm } from "react-hook-form";
import AccountItem from "../../modules/Account";
import { UserContext } from "../../context/UserContext";

export default function Profil() {
  const [profilData, setProfilData] = useState(null);
  const [displayInput, setDisplayInput] = useState(false);

  const { user, updateUser } = useContext(UserContext);

  const { putUserProfil } = useApi();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const onSubmit = async (data) => {
    const response = await putUserProfil(data);
    if (response.status === 200) {
      updateUser();
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
        <h1>
          Welcome back
          <br />
          {user?.firstName} {user?.lastName}!
        </h1>
        <button className="edit-button" onClick={() => setDisplayInput(true)}>
          Edit Name
        </button>
        {displayInput && (
          <form className="change-name" onSubmit={handleSubmit(onSubmit)}>
            <div className="input-change-name">
              <input
                type="text"
                placeholder={"Prénom"}
                {...register("firstName", { required: true })}
              />
              <input
                type="text"
                placeholder={"Nom"}
                {...register("lastName", { required: true })}
              />
            </div>
            <button type="submit" className="send-button">
              Envoyer!
            </button>
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
