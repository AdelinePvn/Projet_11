import React, { useContext } from "react";

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
import { ConnexionTokenContext } from "./context/ConnexionTokenContext";

export default function App() {
  const { token } = useContext(ConnexionTokenContext);

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
