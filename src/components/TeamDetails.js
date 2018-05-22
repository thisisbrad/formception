import React, { Component } from 'react';

class TeamDetails extends Component {
  pokemonNameInput = React.createRef();

  state = {
    show: false,
    error: false
  };

  showPokemonForm = () => {
    const show = !this.state.show;
    this.setState({ show });
  };

  createPokemon = e => {
    e.preventDefault();
    // Grab name from form
    // hit API with pokemon name
    // if name is true run function that adds to state
    // else display error
    // this.setState({ error: true });

    const pokemon = {
      name: this.pokemonNameInput.current.value,
      skill: 'magic'
    };
    this.props.addPokemon(this.props.index, pokemon);
    e.currentTarget.reset();
  };

  renderPokemonForm = () => {
    if (this.state.show) {
      return (
        <form className="addPokemonForm" onSubmit={this.createPokemon}>
          <input
            type="text"
            name="pokemon"
            ref={this.pokemonNameInput}
            placeholder="Pokemon Name"
          />
          <button type="submit">Add Pokemon</button>
          {this.state.error ? <p>No pokemon found</p> : <p>&nbsp;</p>}
        </form>
      );
    } else {
      return <p> No Pokemon </p>;
    }
  };

  renderPokedex = () => {
    console.log('pokedex', this.props.pokedex);

    if (this.props.pokedex === undefined) {
      return <p>...</p>;
    } else {
      return this.props.pokedex.map(pokemon => {
        return (
          <li key={pokemon.name}>
            <strong>{pokemon.name}</strong> {pokemon.skill}
          </li>
        );
      });
    }
  };

  render() {
    return (
      <div className="team">
        <h1> {this.props.name} </h1>
        <p> Team ID: {this.props.index} </p>
        <button onClick={this.showPokemonForm}>+</button>
        {this.renderPokemonForm()}
        <ul>{this.renderPokedex()}</ul>
      </div>
    );
  }
}

export default TeamDetails;
