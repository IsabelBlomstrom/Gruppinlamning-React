import React, { CSSProperties } from "react";
import Logo from "./assets/logolunden.png";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <header style={appHeader}>
        <div>
          <Link to="/">
            <img alt="logo" src={Logo} style={logoStyle}></img>
          </Link>
        </div>
        <div style={contactDiv}>
          <Link to="/" style={contactP}>
            <p>HOME</p>
          </Link>
          <Link to="/Kontakt" style={contactP}>
            <p>KONTAKT</p>
          </Link>
          <Link to="/Omoss" style={contactP}>
            <p>OM OSS</p>
          </Link>
          <Link to="/Studio" style={contactP}>
            <p>STUDIO</p>
          </Link>
        </div>
      </header>
    );
  }
}

const appHeader: CSSProperties = {
  color: "black",
  height: "30vh",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center"
};

const logoStyle: CSSProperties = {
  height: "25vh"
};

const contactDiv: CSSProperties = {
  display: "flex"
};

const contactP: CSSProperties = {
  margin: "1rem",
  textDecoration: "none",
  color: "black"
};
