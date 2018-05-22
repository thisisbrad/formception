import React, { Component } from 'react';
import TeamDetails from './TeamDetails';

class TeamStats extends Component {
  renderTeams = () => {
    return this.props.teams.map((team, index) => {
      const pokedex = this.props.pokemon[index];
      return (
        <TeamDetails
          {...team}
          index={index}
          key={index}
          pokedex={pokedex}
          addPokemon={this.props.addPokemon}
        />
      );
    });
  };

  render() {
    return (
      <div>
        <h2>TeamStats</h2>
        {this.renderTeams()}
      </div>
    );
  }
}

export default TeamStats;
