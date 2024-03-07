import "./header.scss";
import React, { useContext, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import { NavLink } from "react-router-dom";
import BankLogo from "../../img/argentBankLogo.png";
import { ConnexionTokenContext } from "../../context/ConnexionTokenContext";
import { UserContext } from "../../context/UserContext";

export default function Header() {
  const { token, deleteToken } = useContext(ConnexionTokenContext);
  const { user, setUser } = useContext(UserContext);

  return (
    <nav className="main-nav">
      <NavLink to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={BankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      {token ? (
        <div>
          <NavLink to="/profil" className="main-nav-item">
            <FontAwesomeIcon icon={faUserCircle} />
            {user?.userName}
          </NavLink>

          <NavLink
            to="/"
            className="main-nav-item"
            onClick={() => {
              deleteToken();
              setUser(null);
            }}
          >
            <FontAwesomeIcon icon={faSignOutAlt} />
            Sign Out
          </NavLink>
        </div>
      ) : (
        <NavLink to="/signin" className="main-nav-item">
          <FontAwesomeIcon icon={faUserCircle} />
          Sign In
        </NavLink>
      )}
    </nav>
  );
}
