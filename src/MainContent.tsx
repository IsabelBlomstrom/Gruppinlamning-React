import React, { Component } from "react";
import SectionItem from "./SectionItem";
import { AppEvent } from "./App";
import { divStyleOnPages } from "./css";

interface Props {
  events: AppEvent[];
}

interface State {}

export default class MainContens extends Component<Props, State> {
  render() {
    return (
      <div style={divStyleOnPages} className="mainContent">
        {this.props.events.map(event => (
          <SectionItem key={event.title} event={event} />
        ))}
      </div>
    );
  }
}
