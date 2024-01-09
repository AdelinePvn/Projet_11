import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Acceuil from "./pages/Acceuil";
import SignIn from "./pages/Signin";
import Profil from "./pages/Profil";
import PageLayout from "./modules/pageLayout";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route path="/" element={<Acceuil />} />
          <Route path="/index.html" element={<Acceuil />} /> {/* a enlever */}
          <Route path="/profil" element={<Profil />} />
          <Route path="/signin" element={<SignIn />} />
        </Route>
      </Routes>
    </Router>
  );
}
