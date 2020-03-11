import React, { CSSProperties } from "react";
import ReactDOM, { createPortal } from "react-dom";

interface Props {}

export default class Modal extends React.Component<Props> {
  modalDiv = document.getElementById("modal-root");
  modalElement: HTMLElement = document.createElement("div");

  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    this.modalDiv?.appendChild(this.modalElement);
  }

  componentWillUnmount() {
    this.modalDiv?.removeChild(this.modalElement);
  }

  render() {
    return ReactDOM.createPortal(
      <div style={modalStyle}>{this.props.children}</div>,
      this.modalElement
    );
  }
}

const modalStyle: CSSProperties = {
  position: "fixed",
  top: "0",
  left: "0",
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.9)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
};
