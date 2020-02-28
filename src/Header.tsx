import React, { CSSProperties } from "react";
import Logo from "./assets/logolunden.png";

export default class Header extends React.Component {
  render() {
    return (
      <header style={appHeader}>
        <div>
          <img src={Logo} style={logoStyle}></img>
        </div>
        <div style={contactDiv}>
          <p style={contactP}>HOME</p>
          <p style={contactP}>KONTAKT</p>
          <p style={contactP}>OM OSS</p>
          <p style={contactP}>STUDIO</p>
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
  alignItems: "center",
  }

  const logoStyle: CSSProperties = {
    height: "25vh",

  }

  const contactDiv: CSSProperties = {
    display: "flex",
  }

  const contactP: CSSProperties = {
    margin: "1rem",
  }