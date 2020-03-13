import React, { Component, CSSProperties } from "react";
import { BookingRequest } from "./Kontakt";

interface Props {
  svar: BookingRequest;
}

export default class Formsvar extends Component<Props> {

  render() {
    return (
      <div style={formSvarStyle}>
        <p style={{ fontWeight: "bold" }}>
          Tack för ditt meddelande! Om någon av uppgifterna inte stämmer, <br />
          vänlig skicka ett till meddelande till oss med ändringarna.
        </p>
        <div style={{ ...formSvarStyle, ...formSvarBox }}>
          <p>{this.props.svar.name}</p>
          <p>{this.props.svar.telephone}</p>
          <p>{this.props.svar.message}</p>
        </div>
      </div>
    );
  }
}

const formSvarStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  alignItems: "center"
};

const formSvarBox: CSSProperties = {
  border: "2px solid grey",
  width: "50%",
  height: "50%"
};
