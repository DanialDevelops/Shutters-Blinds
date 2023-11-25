import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink
import logo from "../images/shuttersLogo.png";
import "./assets/Nav.css";
import './assets/Header.css';

const Nav = () => {
  const styles = {
    image: {
      display: "inline-block",
      width: "200px",
      height: "200px",
      objectFit: "cover",
      marginLeft: "10px",
    },
  };

  return (
    <header>
      <div className="logo">
        <img
          src={logo}
          alt="Shutters Logo"
          style={styles.image}
          width="250"
          height="250"
          loading="lazy"
        />
      </div>
      <nav>
        <h1 className="Title">MARQUEE SHUTTERS AND BLINDS</h1>
        <ul>
          <li>
            <NavLink to="/" className="nav-link" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className="nav-link">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;