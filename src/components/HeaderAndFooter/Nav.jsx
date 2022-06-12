import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li className="active">
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/awards">Awards</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/solutions">Solutions</Link>
        </li>
      </ul>
    </nav>
  );
}
