import React, { useState } from 'react';
import logo from "../images/shuttersLogo.png";
import './Nav.css';

const Nav = () => {
  const [activeItem, setActiveItem] = useState('Home');

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const styles = {
    image: {
      width: "130px",
      height: "120px",
      objectFit: "cover",
      marginLeft: "10px",
    }
  };

  return (
    <header>
      <div className="logo">
        <img
          src={logo} 
          alt="Shutters Logo" 
          style={styles.image}
          width="130"
          height="120"
          loading="lazy"
        />
      </div>
      <nav>
        <ul>
          <li className={activeItem === 'Home' ? 'active' : ''} onClick={() => handleItemClick('Home')}>Home</li>
          <li className={activeItem === 'About' ? 'active' : ''} onClick={() => handleItemClick('About')}>About</li>
          <li className={activeItem === 'Services' ? 'active' : ''} onClick={() => handleItemClick('Services')}>Services</li>
          <li className={activeItem === 'Contact' ? 'active' : ''} onClick={() => handleItemClick('Contact')}>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
