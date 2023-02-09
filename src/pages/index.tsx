import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Todo from "./Todo";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function PageRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/todo" />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default PageRouter;
