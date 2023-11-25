import React from "react";
import instaLogo from "../images/insta.png";

const style = {
  footer: {
    backgroundColor: "#251F20",
    color: "#E5E5E5",
    padding: "1rem",
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  text: {
    fontSize: "20px",
  },
  socialLinks: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    width: "24px",
    height: "24px",
    color: "#E5E5E5",
    marginLeft: "8px",
    cursor: "pointer",
  },
};

function Footer() {
  return (
    <footer style={style.footer}>
      <div style={style.container}>
        <p style={style.text}>
          MARQUEE SHUTTERS &copy; {new Date().getFullYear()}
        </p>
        <p style={style.text}>
          Tel: (647) 834-6275 | Email: marqueeshutters@gmail.com 
        </p>
        <div style={style.socialLinks}>
          <a
            href="https://www.instagram.com/marqueeshutters/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instaLogo} alt="Instagram" style={style.logo} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
