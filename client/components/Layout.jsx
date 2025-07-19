import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo.jpg'; // Adjust the path if needed
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
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/menu">Menu</Link> | 
        <Link to="/order">Order</Link> | 
        <Link to="/OrderList">OrderList</Link>
      </nav>

      {/* Secondary nav: smaller and on next line */}
      <div className="auth-nav"> 
        <Link to="/signup">Sign Up</Link> |
        <Link to="/signin">Sign In</Link> | 
        <Link to="/signout">Sign Out</Link>
      </div>

      <br />
      <hr />
    </>
  );
}