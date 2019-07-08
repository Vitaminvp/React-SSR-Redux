import React, { Component } from "react";

class HomePage extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Home page!!!</h1>
        </div>
        <button onClick={() => console.log("yes")}>Click</button>
      </div>
    );
  }
}

export default {
  component: HomePage
};
