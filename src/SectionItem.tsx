import React, { CSSProperties } from "react";
import { AppEvent } from "./App";

interface Props {
  event: AppEvent;
}

export default class SectionItem extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <div style={centerImages}>
        <img style={imgStyle} src={this.props.event.mainImg} alt="bild" />
      </div>
    );
  }
}

const imgStyle: CSSProperties = {
  width: "90%",
  objectFit: "cover",
  margin: "0.5rem",
};

const centerImages: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
};
