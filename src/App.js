import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
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

  handleChange = (e) => {
    this.setState({searchfield: e.target.value});
  }

  render() {
    {console.log("this is the render method")}
    const {monsters, searchfield} = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchfield.toLowerCase())  
    );
    return (
      <div className="App">
        <h1>Monsters Rolodox jadu</h1>
        <SearchBox 
          placeholder="search monster"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;