import React, { CSSProperties } from "react";
import Logo from "./assets/logolunden.png";
import {Link} from 'react-router-dom'

export default class Header extends React.Component {
  render() {
    return (
            <header style={appHeader}>
                <div>
                    <Link to="/"><img src={Logo} style={logoStyle}></img></Link>
                </div>
                <div style={contactDiv}>
                    <Link to="/" style={contactP}><p style={contactP}>HOME</p></Link>
                    <Link to="/Kontakt" style={contactP}><p style={contactP}>KONTAKT</p></Link>
                    <Link to="/Omoss" style={contactP}><p style={contactP}>OM OSS</p></Link>
                    <Link to="/Studio" style={contactP}><p style={contactP}>STUDIO</p></Link>
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
    textDecoration: "none",
    color: "black",
  }