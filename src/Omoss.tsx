import React, { Component } from "react";
import { divStyleOnPages, textStylePages } from "../src/css";
import Nyhetsbrev from "./Nyhetsbrev";
import Axios from "axios";
import ErrorBoundary from "./ErrorBoundery";
import { picturesOnPages } from "./css";

interface Props {}

interface State {
  images: string[];
}

export default class Omoss extends Component<Props, State> {
  state = {
    images: []
  };

  async componentDidMount() {
    const response = await Axios.get(
      "https://api.unsplash.com/search/photos?query=gallery&per_page=3&client_id=7bKy_B0c-gHiqPQ51MWwAEwIPpy6ouXhsnCnjl4nPoM"
    );

    const images = response.data.results.map(
      (image: any) => image.urls.regular
    );
    this.setState({ images });
  }

  render() {
    return (
      <div style={divStyleOnPages} className="omOss">
        <p style={textStylePages}>
          Galleri Lunden öppnade sina dörrar hösten 2018. Det startades av tre
          konstnärer som en tanke att underlätta för andra kollegor inom
          konstvärlden att ställa ut sina verk. Sedan dess har Lunden haft
          utställningar med allt ifrån foto och målningar till keramik.
          <br />
          <br />
          Vill du veta mer om oss? Gå in under kontakter och lämna ett
          meddelande.
        </p>
        <ErrorBoundary>
          <Nyhetsbrev />
        </ErrorBoundary>
        {this.state.images.map(image => (
          <img alt="gallery" style={picturesOnPages} src={image}></img>
        ))}
      </div>
    );
  }
}
