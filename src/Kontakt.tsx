import React, { CSSProperties } from "react";

interface Props {}

interface State {
  bookingRequest: BookingRequest;
  isSubmitted: boolean;
}

interface BookingRequest {
    name: string,
    telephone: string,
    message: string,
}

export default class Kontakt extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { 
        isSubmitted: false,
        bookingRequest: {
            name: '',
            telephone: '',
            message: ''
        } };
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const bookingRequest = {...this.state.bookingRequest}
    bookingRequest.name = event.target.value
    this.setState({ bookingRequest });
  };

  render() {
    if (this.state.isSubmitted) {
        return (
            <div>tack!</div>
        )
    }

    return (
      <div style={FormStyle}>
        <form>
          <label>
            Name:
            <input
              type="text"
              value={this.state.bookingRequest.name}
              onChange={this.handleInputChange}
            >
            </input>
            </label>
            <label>
            <input
              type="text"
              value={this.state.bookingRequest.message}
              onChange={this.handleInputChange}
            >
            </input>
            </label>
          
          <input type="submit" value="submit"></input>
        </form>
      </div>
    );
  }

  
}

const FormStyle: CSSProperties = {
    display: "flex", 
    justifyContent: "center",
}
