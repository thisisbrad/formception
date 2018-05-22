import React, { Component } from 'react';

class TeamAdd extends Component {
  teamNameInput = React.createRef();

  createTeamName = e => {
    e.preventDefault();
    this.props.addTeamName(this.teamNameInput.current.value);
    e.currentTarget.reset();
  };

  render() {
    return (
      <div>
        <h2>Team Add</h2>
        <form onSubmit={this.createTeamName}>
          <input
            type="text"
            ref={this.teamNameInput}
            required
            placeholder="Create Team Name"
          />
          <button>+</button>
        </form>
      </div>
    );
  }
}

export default TeamAdd;
