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
    casa:
    {
        nome:"Flamengo",
    },
    visitante:
    {
        nome:"Vasco",
    },
}


class App extends Component
{
    render()
    {
        return( 
            <div>
                <Header/>
                <ScoreContainer local={data.local} casa={data.casa} visitante={data.visitante} />
            </div>
        );
    }
}

export default App;
