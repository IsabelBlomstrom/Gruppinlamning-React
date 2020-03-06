import React, { CSSProperties } from "react";
import { AppEvent } from "./App";
import Modal from "./Modal";

interface Props {
  event: AppEvent;
}

interface State {
  isMouseOver: boolean;
  showModal: boolean;
}

export default class SectionItem extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { isMouseOver: false, showModal: false };

    console.log(props + "proppsen änna");
  }

  handleMouseEnter = () => {
    this.setState({ isMouseOver: true });
  };

  handleMouseLeave = () => {
    this.setState({ isMouseOver: false });
  };

  private toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  };

  private get modal() {
    if (this.state.showModal) {
      return (
        <Modal>
          <img style={centeredModal} src={this.props.event.mainImg} alt="bild"/>
        </Modal>
      );
    }
  }

  render() {
    return (
      <>
        {this.modal}
        <div
          style={imageDiv}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          onClick={this.toggleModal}
        >
          {this.state.isMouseOver ? (
            <>
              {
                <img
                  style={imgStyleHover}
                  src={this.props.event.mainImg}
                  alt="bild"
                />
              }{" "}
              <h1 style={textStyle}>{this.props.event.title}</h1>
            </>
          ) : (
            <img style={imgStyle} src={this.props.event.mainImg} alt="bild" />
          )}
        </div>
      </>
    );
  }
}

const imgStyle: CSSProperties = {
  width: "60rem",
  height: "20rem",
  objectFit: "cover"
};

const imgStyleHover: CSSProperties = {
  width: "60rem",
  height: "20rem",
  objectFit: "cover",
  opacity: "0.6"
};

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

const centeredModal: CSSProperties = {
  position: "fixed",
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  visibility: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};