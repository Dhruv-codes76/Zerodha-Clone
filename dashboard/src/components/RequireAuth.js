import React from "react";
import Cookies from "js-cookie";

const RequireAuth = ({ children }) => {
  const token = Cookies.get("token");
  if (!token) {
    window.location.href = process.env.REACT_APP_FRONTEND_URL + "/login";
    return null;
  }
  return children;
};

export default RequireAuth;
