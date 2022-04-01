import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";

export default function AuthVerify() {
  const navigate = useNavigate();

  const isTokenExpired = () => {
    const bearerToken = localStorage.getItem("scrumify-token");
    if (bearerToken) {
      const token = bearerToken.split(" ")[1];
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      const expirationTime = decodedToken.exp * 1000 - 60000;
      if (Date.now() >= expirationTime) { 
        localStorage.clear()
        navigate("/");
      }
    }
  };

  useEffect(() => isTokenExpired(), []);
  return <div></div>;
}
