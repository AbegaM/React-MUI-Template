import { Route, Routes, BrowserRouter } from "react-router-dom";
import {CssBaseline} from "@mui/material"

import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";

function App() {
  return (
    <div>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="admin" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
