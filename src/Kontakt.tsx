import React, { CSSProperties, Component } from "react";
import Formsvar from "./Formsvar";
import { Redirect, Switch, Route, RouteComponentProps } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundery";

interface Props extends RouteComponentProps {}

interface State {
  bookingRequest: BookingRequest;
  isSubmitted: boolean;
}

export interface BookingRequest {
  name: string;
  telephone: string;
  message: string;
}

export default class Kontakt extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isSubmitted: false,
      bookingRequest: {
        name: "",
        telephone: "",
        message: ""
      }
    };
  }

  handleInputChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const bookingRequest = { ...this.state.bookingRequest };
    bookingRequest.name = event.target.value;
    this.setState({ bookingRequest });
  };

  handleInputChangeTelephone = (event: React.ChangeEvent<HTMLInputElement>) => {
    const bookingRequest = { ...this.state.bookingRequest };
    bookingRequest.telephone = event.target.value;
    this.setState({ bookingRequest });
  };

  handleInputChangeMessage = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const bookingRequest = { ...this.state.bookingRequest };
    bookingRequest.message = event.target.value;
    this.setState({ bookingRequest });
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.setState({ isSubmitted: true });
  };

  componentDidUpdate() {
    if (this.state.isSubmitted) {
      this.setState({ isSubmitted: false });
    }
  }

  render() {
    const { url, path } = this.props.match;
    if (this.state.isSubmitted) {
      return <Redirect to={url + "/bekraftelse"} />;
    }

    return (
      <Switch>
        <Route path={path + "/bekraftelse"}>
          <ErrorBoundary>
            <Formsvar svar={this.state.bookingRequest} />
          </ErrorBoundary>
        </Route>
        <Route>
          <div style={FormStyle} className="kontakt">
            <p style={{ margin: "0 0 2rem 0", textAlign: "center" }}>
              Vill ni komma i kontakt med oss? <br />
              Snälla fyll i formuläret nedan så kontaktar vi dig.
            </p>
            <form onSubmit={this.handleSubmit}>
              <fieldset>
                <label style={labelStyle}>
                  Namn:
                  <input
                    style={inputStyle}
                    type="text"
                    value={this.state.bookingRequest.name}
                    onChange={this.handleInputChangeName}
                  ></input>
                </label>
                <label style={labelStyle}>
                  Telefonnummer:
                  <input
                    style={inputStyle}
                    type="text"
                    value={this.state.bookingRequest.telephone}
                    onChange={this.handleInputChangeTelephone}
                  ></input>
                </label>
                <textarea
                  placeholder={"Skriv ditt meddelande här"}
                  cols={100}
                  rows={12}
                  style={areaStyle}
                  value={this.state.bookingRequest.message}
                  onChange={this.handleInputChangeMessage}
                ></textarea>{" "}
                <br />
                <input type="submit" value="submit" />
              </fieldset>
            </form>
          </div>
        </Route>
      </Switch>
    );
  }
}

const FormStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column"
};

const inputStyle: CSSProperties = {
  color: "black",
  margin: "0.5rem",
  marginLeft: "0",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#f1f1f1"
};

const labelStyle: CSSProperties = {
  fontSize: "1rem"
};

const areaStyle: CSSProperties = {
  marginTop: "0.5rem",
  marginBottom: "0.5rem",
  backgroundColor: "#f1f1f1"
};
