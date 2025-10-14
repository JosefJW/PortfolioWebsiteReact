import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // optional, for styling

export default function Header() {
  return (
    <header className="header">
      <h1 className="site-title">Josef Wolf</h1>
      <nav className="menu">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/education">Education</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}
