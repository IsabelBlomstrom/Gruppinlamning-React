import React, { CSSProperties } from "react";
import Logo from "./assets/logolunden.png";

export default class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <div>
          <img src={Logo} className="logoStyle"></img>
        </div>
        <div className="contactDiv">
          <p>hej</p>
          <p>hallå</p>
          <p>tjena</p>
          <p>hoi</p>
        </div>
      </header>
    );
  }
}
