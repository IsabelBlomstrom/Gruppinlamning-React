import React, { CSSProperties } from "react";

interface Props {}

interface State {
  bookingRequest: BookingRequest;
  isSubmitted: boolean;
}

interface BookingRequest {
  name: string;
  telephone: string;
  message: string;
}

export default class Kontakt extends React.Component<Props, State> {
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
    event.preventDefault()
    this.setState({isSubmitted: true})
  }

  render() {
    if (this.state.isSubmitted) {
      return <div style={thanksDiv}>tack!</div>;
    }

    return (
      <div style={FormStyle}>
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
            cols={30} rows={10}
            style={areaStyle}
              value={this.state.bookingRequest.message}
              onChange={this.handleInputChangeMessage}
            ></textarea> <br />
          <input type="submit" value="submit" />
          </fieldset>
        </form>
      </div>
    );
  }
}

const FormStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

};

const inputStyle: CSSProperties = {
  color: "black", 
  margin: "0.5rem",
  marginLeft: "0",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#f1f1f1"
}

const labelStyle: CSSProperties = {
  fontSize: "1rem"
}


const areaStyle: CSSProperties = {
  marginTop: "0.5rem",
  marginBottom: "0.5rem",
  backgroundColor: "#f1f1f1"
}

const thanksDiv: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}

