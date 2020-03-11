import React, { CSSProperties } from "react";
import Image from "./assets/omOss.jpg";
import { divStyleOnPages, picturesOnPages, textStylePages } from "../src/css";
import Nyhetsbrev from "./Nyhetsbrev";

interface Props {}

export default class Omoss extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div style={divStyleOnPages}>
        <img src={Image} alt="Picture of hall" style={picturesOnPages} />
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
        <Nyhetsbrev />
      </div>
    );
  }
}
