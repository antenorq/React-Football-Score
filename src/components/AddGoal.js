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
        <button className="btn btn-danger" onClick={this.handleClick.bind(this)}>Add Goal!</button>
    );
  }
}

export default AddGoal;