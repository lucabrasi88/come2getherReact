import React, { Component } from 'react';
import './App.css';
import MainPage from './pages/main';

class App extends Component {
  
  state = {
    eventsData:{
      1:{
        _id: 1,
        name: 'Halfmarathon Lisboa 2020',
        description: 'The biggest halfmarathon in Portugal',
        createdAt: new Date()
      },
      2:{
        _id: 2,
        name: 'ChampionMan 2020',
        description: 'Mistrzostwa Polski w duathlonie w Czempiniu',
        createdAt: new Date()
      }
    }
  }

  render(){
    return (
      <div className="App">
        <MainPage eventsData={this.state.eventsData} />
      </div>
    )
  }      
}

export default App;
