import React, { Component } from "react";

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
        <div>
          <h2>¡Could not load component!</h2>
          <b>
            <a href="" onClick={this.reloadPage}>
              Reload
            </a>
          </b>
        </div>
      );
    }

    return this.props.children;
  }
}
