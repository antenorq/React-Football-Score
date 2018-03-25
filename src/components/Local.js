import React, { Component } from 'react';

class Local extends Component
{
  render()
  {
    return(
    	<div>
            <h2>{this.props.stadium}</h2>
            <div>
                <span>{this.props.date}</span>
                <span> - </span>
                <span>{this.props.time}</span>
            </div>
        </div>
    );
  }
}

export default Local;