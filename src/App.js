import React, { Component } from "react";
import './App.css';

const string2 = "this is the message inside the string2";

class App extends Component {
  constructor(){
    super();

    this.state = {
      string: "this is inside the state state"
    }
  }

  render() {
    return (
      <div>
        <p>{this.state.string}</p>
        <button onClick={() => this.setState({ string: "message = "+string2 })}>change text</button>
      </div>
    );
  }
}

export default App;
