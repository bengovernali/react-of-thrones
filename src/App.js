import React, { Component } from "react";
import CharacterList from "./characterList.js";
import characters from "./characters";
import CharacterDetails from "./characterDetail.js";

import "./App.css";

class App extends Component {
  state = {
    characters: characters,
    name: "",
    aliases: [],
    born: "",
    titles: []
  };

  handleClick = character => {
    this.setState(() => {
      return {
        name: character.name,
        aliases: character.name,
        born: character.born,
        titles: character.titles
      };
    });
  };

  render() {
    return (
      <div className="App">
        <div className="body">
          <div className="left">
            <h1>GOT Characters</h1>
            <CharacterList
              characters={this.state.characters}
              handleClick={this.handleClick}
            />
          </div>
          <div className="right">
            <CharacterDetails
              name={this.state.name}
              aliases={this.state.aliases}
              birth={this.state.born}
              titles={this.state.titles}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
