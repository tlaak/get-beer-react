import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <main className="app">
        <h1 className="app__heading">Welcome to the Get Beer app!</h1>
        <app-get-beer />
      </main>
    );
  }
}

export default App;
