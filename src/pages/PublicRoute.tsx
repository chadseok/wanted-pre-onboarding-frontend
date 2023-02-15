import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import STORAGE from "@/constants/storage";

function PublicRoute(props: { restricted: boolean }) {
  const token = localStorage.getItem(STORAGE.authToken);

  return token && props.restricted ? (
    <Navigate replace to="/todo" />
  ) : (
    <Outlet />
  );
}

export default PublicRoute;
