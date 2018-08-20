import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import GetBeer from "./components/GetBeer";

class App extends Component {
  render() {
    return (
      <main className="app">
        <h1 className="app__heading">Welcome to the Get Beer app!</h1>
        <GetBeer
          isLoading={false}
          beers={[]}
          getBeer={() => console.log("Get beer clicked")}
        />
      </main>
    );
  }
}

export default App;
