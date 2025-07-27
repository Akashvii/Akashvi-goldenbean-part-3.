import React, { useContext, useEffect } from "react";
import { AuthContext } from "./AuthContext.jsx";

export default function Signout() {
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    logout(); // instantly clears navbar + user
  }, []);

  return <p>You have been signed out successfully.</p>;
}
