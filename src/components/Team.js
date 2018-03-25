import React, { Component } from 'react';
import AddGoal from './AddGoal';

class Team extends Component
{
  render()
  {
    return(
    	<div className="alert alert-success">
            <h1 className="text-info">{this.props.nome}</h1>
            <h2 className="text-success"><b>{this.props.goals}</b></h2>
            <AddGoal addGoals={this.props.addGoals}/>
        </div>
    );
  }
}

export default Team;