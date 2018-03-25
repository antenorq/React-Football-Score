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
    	<div className="container area_score">        
            
            <div className="row center">               

                <div className="col-sm-5">
                    <h3 className="text-info">Casa</h3>
                    <Team nome={this.props.casa.nome} goals={this.state.goals_casa} addGoals={this.addGoalsCasa.bind(this)} />
                </div>

                <div className="col-sm-2">
                    <Local stadium={this.props.local.stadium} date={this.props.local.date} time={this.props.local.time}  />
                </div>

                <div className="col-sm-5">
                    <h3 className="text-info">Visitante</h3>
                    <Team nome={this.props.visitante.nome} goals={this.state.goals_visitante} addGoals={this.addGoalsVisitante.bind(this)} />
                </div>

            </div>
           
            <div className="clear"></div>

        </div>
    );
  }
}

export default ScoreContainer;