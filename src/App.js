import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import store from "./store";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to sadasReact</h2>
        </div>
        <ul>
          {store
            .getState()
            .competitions.map(competition => <li>{competition.name}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
