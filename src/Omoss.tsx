import React, { CSSProperties } from "react";
import Image from "./assets/omOss.jpg";

interface Props {}

interface State {}

export default class Omoss extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div style={omOssDivStyle}>
        <img src={Image} alt="Picture of hall" style={omOssPic} />
        <p style={omOssTextStyle}>
          Galleri Lunden öppnade sina dörrar hösten 2018. Det startades av tre
          konstnärer som en tanke att underlätta för andra kollegor inom
          konstvärlden att ställa ut sina verk. Sedan dess har Lunden haft
          utställningar med allt ifrån foto och målningar till keramik.
          <br />
          <br />
          Vill du veta mer om oss? Gå in under kontakter och lämna ett
          meddelande.
        </p>
      </div>
    );
  }
}
const omOssDivStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center"
};

const omOssTextStyle: CSSProperties = {
  marginTop: "5rem",
  width: "50%",
  fontSize: "1rem"
};

const omOssPic: CSSProperties = {
  width: "60rem",
  height: "30rem",
  objectFit: "cover",
  marginTop: "2rem"
};
