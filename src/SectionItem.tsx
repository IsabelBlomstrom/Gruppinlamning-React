import React, { CSSProperties } from "react";
import { AppEvent } from "./App";

interface Props {
  event: AppEvent;
}

interface State {
  isMouseOver: boolean;
}

export default class SectionItem extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { isMouseOver: false };
    console.log(props + 'proppsen änna');

  }

  handleMouseEnter = () => {
    this.setState({ isMouseOver: true });
  };

  handleMouseLeave = () => {
    this.setState({ isMouseOver: false });
  };

  render() {
    return (
      <div
        style={imageDiv}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {this.state.isMouseOver ? (
          <>
{            <img style={imgStyleHover} src={this.props.event.mainImg} alt="bild" />
}            <h1 style={textStyle}>{this.props.event.title}</h1>            
          </>
        ) : (
          <img style={imgStyle} src={this.props.event.mainImg} alt="bild" />
        )}
      </div>
    );
  } 
}

const imgStyle: CSSProperties = {
  width: "60rem",
  height: "20rem",
  objectFit: "cover",
};

const imgStyleHover: CSSProperties = {
  width: "60rem",
  height: "20rem",
  objectFit: "cover",
  opacity: "0.6"
}

const textStyle: CSSProperties = {
  position: "absolute",
  color: "white"
};

const imageDiv: CSSProperties = {
  width: "60rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "0.5rem"
};
