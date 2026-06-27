import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { ThemeProvider } from "../context/ThemeContext";

function AppLayout() {
  return (
    <ThemeProvider>
      <div style={{ minHeight: "100vh", background: "var(--bg)", transition: "background .3s" }}>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default AppLayout;
