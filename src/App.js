import React, { Component } from 'react';
import TeamAdd from './components/TeamAdd';
import TeamStats from './components/TeamStats';

import './App.css';

class App extends Component {
  state = {
    teams: [],
    pokemon: [],
    flag: false
  };

  addTeamName = teamName => {
    const teams = [...this.state.teams];
    const newTeam = {
      name: teamName,
      size: 6
    };
    teams.push(newTeam);
    this.setState({ teams });
  };

  addPokemon = (index, pokemon) => {
    const pokemonList = [...this.state.pokemon];
    console.log('ALL list', pokemonList);
    console.log('ALL old pokemon', pokemonList[index] === undefined);

    let teamPokemonList = [];
    if (pokemonList[index] === undefined) {
      teamPokemonList = [pokemon];
    } else {
      teamPokemonList = [...pokemonList[index], pokemon];
    }

    console.log('my list', teamPokemonList);
    pokemonList[index] = teamPokemonList;
    this.setState({ pokemon: pokemonList });
  };

  render() {
    return (
      <div className="App">
        <TeamAdd addTeamName={this.addTeamName} />
        <TeamStats
          teams={this.state.teams}
          addPokemon={this.addPokemon}
          pokemon={this.state.pokemon}
        />
      </div>
    );
  }
}

export default App;
