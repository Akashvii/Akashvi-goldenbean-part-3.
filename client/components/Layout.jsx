import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../lib/AuthContext.jsx";  
import Logo from "../assets/images/Logo.jpg";
import "../src/index.css";

export default function Layout() {
  const { user, logout } = useContext(AuthContext);

  return (
    <>
      <div className="header-container">
        <img src={Logo} alt="Logo" className="logo" />
        <h1>Golden Bean Cafe</h1>
      </div>

      {/* Main Nav */}
      <nav className="main-nav">
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : undefined)}>Home</NavLink> |
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : undefined)}>About</NavLink> |
        <NavLink to="/menu" className={({ isActive }) => (isActive ? "active" : undefined)}>Menu</NavLink> |
        <NavLink to="/order" className={({ isActive }) => (isActive ? "active" : undefined)}>Order</NavLink> |
        <NavLink to="/OrderList" className={({ isActive }) => (isActive ? "active" : undefined)}>OrderList</NavLink>
      </nav>

      {/* Auth Nav */}
      <div className="auth-nav">
        <NavLink to="/myprofile" className={({ isActive }) => (isActive ? "active" : undefined)}>MyProfile</NavLink> |

        {user ? (
          <>
            <span style={{ margin: "0 10px" }}>Welcome, {user.name}</span>
            <button onClick={logout}>Sign Out</button>
          </>
        ) : (
          <>
            <NavLink to="/signin" className={({ isActive }) => (isActive ? "active" : undefined)}>Sign In</NavLink> |
            <NavLink to="/signup" className={({ isActive }) => (isActive ? "active" : undefined)}>Sign Up</NavLink>
          </>
        )}
      </div>

      <br />
      <hr />
    </>
  );
}
