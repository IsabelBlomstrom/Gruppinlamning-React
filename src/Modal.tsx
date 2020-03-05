import React from "react";
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
      <div>{this.props.children}</div>,
      this.modalElement
    );
  }
}
