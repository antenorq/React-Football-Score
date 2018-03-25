import React, { Component } from 'react';
import ScoreContainer from './components/ScoreContainer';

const data = 
{
    local:
    {
        stadium:"Maracanã/RJ",
        date:"25/03/2018",
        time:"10:00",
    },
    casa:
    {
        nome:"Vitória",
    },
    visitante:
    {
        nome:"Bahia",
    },
}


class App extends Component
{


    render()
    {
        return(      
            <ScoreContainer local={data.local} casa={data.casa} visitante={data.visitante} />      
        );
    }
}

export default App;
