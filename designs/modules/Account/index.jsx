import React from "react";
import "./account.scss";

export default function AccountItem({
  accountTitle,
  accountAmount,
  accountDescription,
}) {
  return (
    <div>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">{accountTitle}</h3>
          <p className="account-amount">${accountAmount}</p>
          <p className="account-amount-description">{accountDescription}</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </div>
  );
}
