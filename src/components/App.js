import React, { Component } from "react";
import HeaderComponent from "./Header/header";
import "./App.css";
import Counter from "./Counters/counter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent />
        <Counter />
      </div>
    );
  }
}

export default App;
