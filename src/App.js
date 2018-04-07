import React, { Component } from 'react';
import ScoreContainer from './components/ScoreContainer';
import Header from './components/Header';


const data = 
{
    local:
    {
        stadium:"Maracanã",
        date:"25/03/2018",
        time:"10:00",
    },
    home:
    {
        name:"Flamengo",
    },
    visitor:
    {
        name:"Vasco",
    },
    weather: 'sunny',

}


class App extends Component
{
    render()
    {
        return( 
            <div>
                <Header/>
                <ScoreContainer {...data} />
            </div>
        );
    }
}

export default App;
