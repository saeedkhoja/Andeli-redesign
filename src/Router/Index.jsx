import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import CatalogPage from "../../pages/CatalogPage";
import BlogsPage from "../../pages/BlogsPage";
import AboutUsPage from "../../pages/AboutUsPage";
import Contact from "../../pages/Contact";
import AppLayout from "../Components/AppLayout";
import ScrollToTop from "../Components/ScrollToTop";
import BlogDetail from "../Container/Blogs/BlogDetail";

function Index() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blogs/detail" element={<BlogDetail />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Index;
