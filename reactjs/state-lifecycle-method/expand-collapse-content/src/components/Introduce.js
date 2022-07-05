import React, { Component } from "react";

class Introduce extends Component {
  render() {
    return (
      <div>
        <div style={{ backgroundColor: "green" }}>
          <h1>Conditional Rendering</h1>
        </div>
        <button onClick={this.props.collapse}>Close intro</button>
        <h2>Introduce</h2>
        <p>This is introduce</p>
      </div>
    );
  }
}

export default Introduce;
