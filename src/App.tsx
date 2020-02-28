import React, { CSSProperties } from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import "./App.css";
import Image from "./assets/gallery1.jpg";
import Image2 from "./assets/gallery2.jpg";
import Image3 from "./assets/gallery3.jpg";



export interface AppEvent {
  mainImg: string;
  title: string;
  eventHost: string;
}

const mockedData: AppEvent[] = [{
  mainImg: Image,
  title: "First",
  eventHost: "Elin Alm"
}, {
  mainImg: Image2,
  title: "Second",
  eventHost: "Isabel Blomström"
}, {
  mainImg: Image3,
  title: "Third",
  eventHost: "Emelie Rosenlöw"
}];

function App() {
  return (
    <div style={appStyle}>
      <Header />
      <MainContent events={mockedData} />
    </div>
  );
}

const appStyle: CSSProperties = {
    height: "100%",
    width: "100%",
    color: "black",
    fontSize: "1.2rem",
    fontFamily: 'Raleway',
}

export default App;
