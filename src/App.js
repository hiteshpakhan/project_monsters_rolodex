import React, { Component } from "react";
import './App.css';


class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [
        {
          name: "name 1",
          id: "as21"
        },
        {
          name: "name 2",
          id: "as22"
        },
        {
          name: "name 3",
          id: "as23"
        }
      ]
    }
  }

componentDidMount(){
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(users => this.setState({monsters: users}));
}

  render() {
    return (
      <div className="app">
        {
          this.state.monsters.map(monster => (
          <h1 key={monster.id}> {monster.name} </h1>
          ))}
      </div>
    );
  }
}

export default App;