import Header from "../header";
import Footer from "../footer";
import React from "react";

import "./pageLayout.scss";
import { Outlet, useLocation } from "react-router-dom";

export default function PageLayout() {
  const location = useLocation();
  const darkRoutes = ["/signin", "/profil"];
  const isDarkRoute = darkRoutes.includes(location.pathname);

  return (
    <>
      <Header />
      <main className={`main ${isDarkRoute ? "bg-dark" : ""}`}>
        <div className="page-content">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}
