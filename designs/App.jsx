import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Acceuil from "./pages/Acceuil";
import SignIn from "./pages/SignIn";
import PageLayout from "./modules/pageLayout";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route path="/" element={<Acceuil />} />
          <Route path="/signin" element={<SignIn />} />
        </Route>
      </Routes>
    </Router>
  );
}
