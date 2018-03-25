import React, { Component } from 'react';
import Team from './Team';
import Local from './Local';

class ScoreContainer extends Component
{

  constructor()
  {
    super();
    this.state = { 
      goals_casa: 0,
      goals_visitante: 0,
    }
  }

  addGoalsCasa() {
    this.setState({
        goals_casa: this.state.goals_casa + 1,
    });
  }

  addGoalsVisitante() {
    this.setState({
        goals_visitante: this.state.goals_visitante + 1,
    });
  }

  render()
  {
    return(
    	<div className="area_score">
        
            <div className="float_margin_border">
                <h3>Casa</h3>
                <Team nome={this.props.casa.nome} goals={this.state.goals_casa} addGoals={this.addGoalsCasa.bind(this)} />
            </div>

            <div className="float_margin_border">
                <Local stadium={this.props.local.stadium} date={this.props.local.date} time={this.props.local.time}  />
            </div>

            <div className="float_margin_border">
                <h3>Visitante</h3>
                <Team nome={this.props.visitante.nome} goals={this.state.goals_visitante} addGoals={this.addGoalsVisitante.bind(this)} />
            </div>

            <div className="clear"></div>

        </div>
    );
  }
}

export default ScoreContainer;