import React, { useEffect } from "react";
import { Route, Routes, BrowserRouter, useNavigate } from "react-router-dom";
import { CssBaseline } from "@mui/material";
//import jwt from "jsonwebtoken"

import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";
import Dashboard from "./pages/Dashboard";
import Project from "./pages/Project";
import Task from "./pages/Task";
import User from "./pages/User";
import Role from "./pages/Role";
import ProtectedRoute from "./pages/auth/ProtectedRoute";

const isTokenExpired = () => {
  const bearerToken = localStorage.getItem("scrumify-token");
  if (bearerToken) {
    const token = bearerToken.split(" ")[1];
    const decodedToken = JSON.parse(atob(token.split(".")[1]));
    const expirationTime = decodedToken.exp * 1000 - 60000;
    let status = false;
    if (Date.now() >= expirationTime) {
      status = true;
    }
    return status;
  }
};

function App() {
  const navigate = useNavigate();

  //auto logout feature
  useEffect(() => {
    if (!isTokenExpired()) {
      localStorage.clear();
      navigate("/");
    }
  }, []);

  return (
    <div>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="project" element={<Project />} />
          <Route path="task" element={<Task />} />
          <Route path="role" element={<Role />} />
          <Route path="user" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
