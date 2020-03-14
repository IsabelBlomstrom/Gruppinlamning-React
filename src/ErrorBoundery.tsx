import React, { Component, CSSProperties } from "react";

interface Props {}
interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  state = {
    hasError: false
  };

  reloadPage = () => {
    window.URL = window.URL;
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={styleErrorMessage}>
          <h2>Something went wrong</h2>
          <b>
            <a href="" onClick={this.reloadPage}>
              Click to reload
            </a>
          </b>
        </div>
      );
    }

    return this.props.children;
  }
}

const styleErrorMessage: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
};
