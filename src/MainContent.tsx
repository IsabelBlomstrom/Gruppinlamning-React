import React, { CSSProperties } from "react";
import SectionItem from "./SectionItem";
import { AppEvent } from "./App";
import { divStyleOnPages } from "./css";

interface Props {
  events: AppEvent[];
}

interface State {}

export default class MainContens extends React.Component<Props, State> {

  render() {
    return (
      <div style={mainStyle} className="mainContent">
        {this.props.events.map(event => (
          <SectionItem key={event.title} event={event} />
        ))}
      </div>
    );
  }
}

const mainStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
};
