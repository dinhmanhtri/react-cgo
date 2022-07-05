import Home from "./components/Home.js";
import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  handlerLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  handlerLogout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    const { isLoggedIn } = this.state;
    if (isLoggedIn) {
      return <Home onLogOut={this.handlerLogout} />;
    }
    return(
      <div style={{ textAlign: "center" }}>
        <div>
          <h1>Please log</h1>
          <button onClick={this.handlerLogin}>Log in</button>
        </div>
      </div>
    )
  }
}

export default App;
