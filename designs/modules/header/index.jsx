import "./header.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import BankLogo from "../../img/argentBankLogo.png";

export default function Header() {
  return (
    <nav className="main-nav">
      <NavLink to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={BankLogo}
          alt="Argent Bank Logo"
        />
        <h1 class="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        <NavLink to="/signin" className="main-nav-item">
          <FontAwesomeIcon icon={faUserCircle} />
          Sign In
        </NavLink>
      </div>
    </nav>
  );
}
