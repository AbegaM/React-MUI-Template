import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("scrumify-token");

  if (!token) {
    return <Navigate to="/" />;
  }

  return children ? children : <Outlet />;
}
