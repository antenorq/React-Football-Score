import React, { Component } from 'react';

class Local extends Component
{
  render()
  {
    return(
    	<div className="local alert alert-secondary">
            <h3 className="text-info">{this.props.stadium}</h3>
            <div>
                <span className="text-info">{this.props.date}</span>
                <span> - </span>
                <span className="text-info">{this.props.time}</span>
            </div>
        </div>
    );
  }
}

export default Local;