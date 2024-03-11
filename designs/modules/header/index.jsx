import "./header.scss";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import { NavLink } from "react-router-dom";
import BankLogo from "../../img/argentBankLogo.png";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../redux/index.jsx";
import { useApi } from "../../useApi.jsx";

export default function Header() {
  const user = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.user.token);

  const dispatch = useDispatch();
  const { postUserProfil } = useApi();

  const updateUser = () => dispatch(getProfileData(postUserProfil));

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
              dispatch(logoutUser());
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
