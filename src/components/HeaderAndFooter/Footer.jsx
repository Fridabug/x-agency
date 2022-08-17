import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Footer() {
  return (
    <div className="footer">
      <ul>
       {/* <li>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </li>
        <li>
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a>
        </li>*/}
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/career">Career</Link>
        </li>
      </ul>
    </div>
  );
}
