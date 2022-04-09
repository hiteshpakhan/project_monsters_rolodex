import React, { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";

import './App.css';


class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: []
    }
  }

componentDidMount(){
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(users => this.setState({monsters: users}));
  console.log("this is inside the componentDidMount");
}

  render() {
    return (
      <div className="app">
        {console.log("this is inside the App")}
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;