import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import {} from "history";

import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";
import Dashboard from "./pages/Dashboard";
import Project from "./pages/Project";
import Task from "./pages/Task";
import User from "./pages/User";
import Role from "./pages/Role";
import ProtectedRoute from "./pages/auth/ProtectedRoute";
import AuthVerify from "./components/AuthVerify";

function App() {
  return (
    <div>
      <CssBaseline />
      <BrowserRouter>
        <AuthVerify />
        <Routes>
          <Route exact path="/" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route element={<ProtectedRoute />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="project" element={<Project />} />
            <Route path="task" element={<Task />} />
            <Route path="role" element={<Role />} />
            <Route path="user" element={<User />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
