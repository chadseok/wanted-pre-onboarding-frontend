import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import STORAGE from "@/constants/storage";

function PrivateRoute() {
  const token = localStorage.getItem(STORAGE.authToken);

  return token ? <Outlet /> : <Navigate replace to="/signin" />;
}

export default PrivateRoute;
