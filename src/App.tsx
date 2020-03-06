import React, { CSSProperties } from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import "./App.css";
import Image from "./assets/gallery1.jpg";
import Image2 from "./assets/gallery2.jpg";
import Image3 from "./assets/gallery3.jpg";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Kontakt from "./Kontakt";
import Omoss from "./Omoss";
import Studio from './Studio'


export interface AppEvent {
  mainImg: string;
  title: string;
  eventHost: string;
}

const mockedData: AppEvent[] = [{
  mainImg: Image,
  title: "En blandning av sött och salt",
  eventHost: "Elin Alm"
}, {
  mainImg: Image2,
  title: "Doften av kaffe och öl",
  eventHost: "Isabel Blomström"
}, {
  mainImg: Image3,
  title: "Frost på grisknorr",
  eventHost: "Emelie Rosenlöw"
}];

function App() {
  return (
      <BrowserRouter>
      <div style={appStyle}>
        <Header />
        <Switch>
          <Route exact path="/">
            <MainContent events={mockedData} />
          </Route>
          <Route path="/Kontakt">
            <Kontakt />
          </Route> <Route path="/Omoss">
            <Omoss />
          </Route>
          <Route path="/Studio">
            <Studio />
          </Route>
        </Switch>
      </div>
      </BrowserRouter>
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
