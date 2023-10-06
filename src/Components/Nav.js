import React from 'react'
import logo from "../images/shuttersLogo.png"; // Import the image
import './Nav.css'; // Assuming you have a CSS file for styling

const Nav = () => {
    const styles = {
      image: {
        width: "130px",
        height: "120px",
        objectFit: "cover",
        marginLeft: "10px",
      }
    };
  return (
    <div className="nav">
      <div className="logo-container">
        <img
          src={logo} // Use the imported image
          alt="Shutters Logo" // Add an alt attribute for accessibility
          style={styles.image}
          width="130"
          height="120"
          loading="lazy"
        />
      </div>
      <ul className="nav-list">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Nav
