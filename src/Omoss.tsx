import React from "react";

interface Props {}

interface State {}
export default class Omoss extends React.Component<Props, State> {
  render() {
    console.log(this.props);
    return <h1>Om oss</h1>;
  }
}
