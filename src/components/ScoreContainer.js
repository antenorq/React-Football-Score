import React, { Component } from 'react';
import Team from './Team';
import Local from './Local';

export default class ScoreContainer extends Component
{

  constructor()
  {
    super();
    this.state = { 
      goals_home: 0,
      goals_visitor: 0,
    }
  }

  addGoalsHome() {
    this.setState({
        goals_home: this.state.goals_home + 1,
    });
  }

  addGoalsVisitor() {
    this.setState({
        goals_visitor: this.state.goals_visitor + 1,
    });
  }

  render()
  {

    const {local,home,visitor,weather} = this.props;

    return(
    	<div className="container area_score">        
            
            <div className="row center">               

                <div className="col-sm-5">
                    <h3 className="text-info">Home</h3>
                    <Team name={home.name} goals={this.state.goals_home} addGoals={this.addGoalsHome.bind(this)} />
                </div>

                <div className="col-sm-2">
                    <Local {...local}  />
                    <div>How is weather? {weather}</div>
                </div>

                <div className="col-sm-5">
                    <h3 className="text-info">Visitor</h3>
                    <Team name={visitor.name} goals={this.state.goals_visitor} addGoals={this.addGoalsVisitor.bind(this)} />
                </div>                

            </div>
           
            <div className="clear"></div>

        </div>
    );
  }
}

/*
ScoreContainer.propTypes = {
    weather: React.PropTypes.string,
};
*/

ScoreContainer.defaultProps = {
    weather: 'sunny default',
};





