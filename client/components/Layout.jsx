// Layout.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/images/Logo.jpg';
import '../src/index.css';

export default function Layout() {
  return (
    <>
      <div className="header-container">
        <img src={Logo} alt="Logo" className="logo" />
        <h1>Golden Bean Cafe</h1>
      </div>

      {/* Main navigation bar */}
      <nav className="main-nav">
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : undefined}>Home</NavLink> | 
        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : undefined}>About</NavLink> | 
        <NavLink to="/menu" className={({ isActive }) => isActive ? "active" : undefined}>Menu</NavLink> | 
        <NavLink to="/order" className={({ isActive }) => isActive ? "active" : undefined}>Order</NavLink> | 
        <NavLink to="/OrderList" className={({ isActive }) => isActive ? "active" : undefined}>OrderList</NavLink>
      </nav>

      {/* Secondary nav */}
      <div className="auth-nav"> 
        <NavLink to="/signup" className={({ isActive }) => isActive ? "active" : undefined}>Sign Up</NavLink> |
        <NavLink to="/signin" className={({ isActive }) => isActive ? "active" : undefined}>Sign In</NavLink> | 
        <NavLink to="/signout" className={({ isActive }) => isActive ? "active" : undefined}>Sign Out</NavLink>
      </div>

      <br />
      <hr />
    </>
  );
}