import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import auth from './auth-helper.js';
import { signout } from './api-auth.js';

export default function Signout() {
  useEffect(() => {
    signout().then(() => {
      auth.clearJWT(() => {
        console.log("Signed out successfully");
      });
    });
  }, []);

  // Redirect to homepage after signout
  return <Navigate to="/" />;
}