import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import './App.css';


class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchfield: ""
    }
  }

componentDidMount(){
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(users => this.setState({monsters: users}));
  console.log("this is inside the componentDidMount");
}

  render() {
    {console.log("this is the render method")}
    const {monsters, searchfield} = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchfield.toLowerCase())  
    );
    return (
      <div className="App">
        <input type="search" placeholder="search monsters" onChange={e => this.setState({searchfield: e.target.value}) } />
        {console.log("this is inside return")}
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;