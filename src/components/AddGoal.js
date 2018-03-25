import React, { Component } from 'react';

class AddGoal extends Component
{

  handleClick(event)
  {
    event.preventDefault();
    this.props.addGoals();
  }

  render()
  {
    return(
        <button onClick={this.handleClick.bind(this)}>Add Goal!</button>        
    );
  }
}

export default AddGoal;