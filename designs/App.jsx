import React, { useEffect } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Acceuil from "./pages/Acceuil";
import SignIn from "./pages/Signin";
import Profil from "./pages/Profil";
import PageLayout from "./modules/pageLayout";
import { useDispatch, useSelector } from "react-redux";
import { getProfileData } from "./redux";
import { useApi } from "./useApi";

export default function App() {
  const token = useSelector((state) => state.user.token);

  const dispatch = useDispatch();

  const { postUserProfil } = useApi();

  useEffect(() => {
    dispatch(getProfileData(postUserProfil));
  }, [dispatch, postUserProfil]);

  const ProtectedRoute = ({ element }) => {
    return token ? element : <Navigate to="/signin" />;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route path="/" element={<Acceuil />} />
          <Route
            path="/profil"
            element={<ProtectedRoute element={<Profil />} />}
          />
          <Route path="/signin" element={<SignIn />} />
        </Route>
      </Routes>
    </Router>
  );
}
