import React, { Component } from "react";

class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="center-align" style={{marginTop: 200}}>
          <h1>React redux SSR.</h1>
            <p>Build React, Redux, and React Router apps using Server Side Rendering (SSR), Isomorphic, and Universal JS techniques</p>
            <button onClick={() => console.log("yes")} className="waves-effect waves-light btn red darken-1"><i className="material-icons left">cloud</i>Click</button>
        </div>
      </div>
    );
  }
}

export default {
  component: HomePage
};
