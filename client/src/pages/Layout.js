import React from "react";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const drawerWidth = 240;

export default function Landing({ children }) {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header />
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
