import React, { CSSProperties, Suspense } from "react";
import Header from "./Header";
import "./App.css";
import Image from "./assets/gallery1.jpg";
import Image2 from "./assets/gallery2.jpg";
import Image3 from "./assets/gallery3.jpg";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Kontakt from "./Kontakt";
import Omoss from "./Omoss";
import Studio from "./Studio";

const MainContent = React.lazy(() => import("./MainContent"));

export interface AppEvent {
  mainImg: string;
  title: string;
  eventHost: string;
  eventInfo: string;
}

const mockedData: AppEvent[] = [
  {
    mainImg: Image,
    title: "En blandning av sött och salt",
    eventHost: "Elin Alm",
    eventInfo:
      "Utställning 200123, konstnären visade upp hur en mix av två världar kan se ut"
  },
  {
    mainImg: Image2,
    title: "Doften av kaffe och öl",
    eventHost: "Isabel Blomström",
    eventInfo:
      "Uställning 191013, kostnären visar abstrakt upp sin förkärlek för olika drycker"
  },
  {
    mainImg: Image3,
    title: "Frost på grisknorr",
    eventHost: "Emelie Rosenlöw",
    eventInfo:
      "Utställning 190925, kostnärens naturnära öga fångar besökaren på djupet"
  }
];

function App() {
  return (
    <BrowserRouter>
      <div style={appStyle}>
        <Header />
        <Switch>
          <Route exact path="/">
            <Suspense fallback={<div>Loading...</div>}>
              <MainContent events={mockedData} />
            </Suspense>
          </Route>
          <Route path="/Kontakt" component={Kontakt} />
          <Route path="/Omoss" component={Omoss} />
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
  fontFamily: "Raleway"
};

export default App;
