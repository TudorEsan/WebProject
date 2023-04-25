// src/ProtectedRoute.js
import React from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import { useFireAuth } from "../FireAuthContext";

const PrivateRoute = () => {
  const { user } = useFireAuth();

  return user ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
