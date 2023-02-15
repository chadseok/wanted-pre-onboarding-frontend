import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Todo from "./Todo";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const router = createBrowserRouter([
  {
    element: <PrivateRoute />,
    children: [{ element: <Todo />, path: "todo" }],
  },
  {
    element: <PublicRoute restricted />,
    children: [
      { element: <SignIn />, path: "signin" },
      { element: <SignUp />, path: "signup" },
    ],
  },
]);

function PageRouter() {
  return <RouterProvider router={router} />;
}

export default PageRouter;
