import React, { Component, CSSProperties } from "react";

interface Props {}

interface State {
  isSubscribedToNews: boolean;
  willSubscribe: boolean;
  contact: EmailAdress;
}

interface EmailAdress {
  emailAdress: string;
}

export default class Nyhetsbrev extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      willSubscribe: false,
      isSubscribedToNews: false,
      contact: {
        emailAdress: ""
      }
    };
  }

  handleInputChangeEMail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const emailAdress = { ...this.state.contact };
    emailAdress.emailAdress = event.target.value;
    this.setState({ contact: emailAdress });
  };

  subscribeNews = () => {
    this.setState({
      willSubscribe: !this.state.willSubscribe
    });
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.setState({ isSubscribedToNews: true });
  };

  render() {
    if (!this.state.willSubscribe) {
      return (
        <p style={nyhetsbrevTextStyle} onClick={this.subscribeNews}>
          Ta del av vårt nyhetsbrev genom att klicka här
        </p>
      );
    } else if (this.state.willSubscribe && !this.state.isSubscribedToNews) {
      return (
        <form onSubmit={this.handleSubmit} style={nyhetsbrevFormStyle}>
          <input
            style={inputStyle}
            type="text"
            value={this.state.contact.emailAdress}
            placeholder="Ange email"
            onChange={this.handleInputChangeEMail}
          />
          <input type="submit" value="submit" />
        </form>
      );
    } else if (this.state.willSubscribe && this.state.isSubscribedToNews) {
      return (
        <div>
          <p style={nyhetsbrevTextStyle}>
            Tack! Du prenumererar nu på vårt nyhetsbrev. Du angav mail:{" "}
            {this.state.contact.emailAdress}
          </p>
        </div>
      );
    }
  }
}
const nyhetsbrevTextStyle: CSSProperties = {
  fontSize: "1rem",
  fontWeight: "bold",
  cursor: "pointer"
};

const nyhetsbrevFormStyle: CSSProperties = {
  marginBottom: "2rem"
};

const inputStyle: CSSProperties = {
  margin: "0.5rem"
};