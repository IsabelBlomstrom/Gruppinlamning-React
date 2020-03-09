import React, { CSSProperties } from "react";
import SectionItem from "./SectionItem";
import { AppEvent } from "./App";

interface Props {
  events: AppEvent[];
}

interface State {}

export default class MainContens extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div style={mainStyle}>
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

const styleModal: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  color: "red"
};
