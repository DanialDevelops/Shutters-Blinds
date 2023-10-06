import React from "react";
import './Nav.css';

const Header = () => {
  const styles = {
    div: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      height: "100px",
      width: "100%",
    },
    header: {
        color: "black",
    },
    image: {
      width: "130px",
      height: "120px",
      objectFit: "cover",
      marginLeft: "10px",
    },
  };
  return (
    <div style={styles.div}>
      <h1 style={styles.header}>MARQUEE SHUTTERS AND BLINDS</h1>
    </div>
    
  );
};

export default Header;