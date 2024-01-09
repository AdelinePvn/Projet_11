import React, { useEffect, useState } from "react";
import "./profil.scss";
import { postUserProfil } from "../../useApi";
import AccountItem from "../../modules/Account";

export default function Profil() {
  const [profilData, setProfilData] = useState(null);

  const getProfileData = async () => {
    const response = await postUserProfil();

    console.log(response);

    if (response.status === 200) {
      setProfilData(response.data.body);
    }
  };

  useEffect(() => {
    getProfileData();
  }, []);

  console.log(profilData);

  return (
    <>
      <div className="header">
        <h1>
          Welcome back
          <br />
          {profilData?.firstName} {profilData?.lastName}!
        </h1>
        <button className="edit-button">Edit Name</button>
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
