import React, { Component } from 'react';
import AddGoal from './AddGoal';

class Team extends Component
{
  render()
  {
    return(
    	<div>
            <h1>{this.props.nome}</h1>
            <h2>{this.props.goals}</h2>
            <AddGoal addGoals={this.props.addGoals}/>
        </div>
    );
  }
}

export default Team;