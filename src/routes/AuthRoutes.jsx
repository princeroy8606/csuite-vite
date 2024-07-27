import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "../components/auth/Auth";
import ResetPage from "../components/auth/ResetPage";
import Reviews from "../GWA/Reviews/Reviews";
import Blogs from "../GWA/Blogs/Blogs";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Reviews />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/reset-password" element={<ResetPage />} />
    </Routes>
  );
};

export default AuthRoutes;
