import { Route, Routes, BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";

import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";
import Dashboard from "./pages/Dashboard";
import Project from "./pages/Project";
import Task from "./pages/Task"
import ProtectedRoute from "./pages/auth/ProtectedRoute";

function App() {
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
