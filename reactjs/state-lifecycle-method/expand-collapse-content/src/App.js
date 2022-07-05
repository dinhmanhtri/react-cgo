import React, { Component } from "react";
import "./App.css";
import Introduce from "./components/Introduce.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpand: false,
    };
  }

  handlerExpand = () => {
    this.setState({ isExpand: true });
  };

  handlerCollapse = () => {
    this.setState({ isExpand: false });
  };

  render() {
    const { isExpand } = this.state;
    if (isExpand) {
      return <Introduce collapse={this.handlerCollapse} />;
    }
    return (
      <div>
        <div style={{ backgroundColor: "green" }}>
          <h1>Conditional Rendering</h1>
        </div>
        <button onClick={this.handlerExpand}>See intro</button>
      </div>
    );
  }
}

export default App;
