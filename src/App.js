import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';

import MainPage from './pages/main';
import ShowEventPage from './pages/show';
import Navbar from './components/navbar/navbar';
import NewEvent from './components/newevent/NewEvent';
import Calendar from "./components/calendar/Calendar";

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

  handleSave = (eventData) =>{
    const ids = Object.keys(this.state.eventsData);
    const nextId = Math.max(...ids) + 1;

    eventData['_id'] = nextId;

    const { eventsData } = this.state;
    this.setState({
      eventsData: {
        ...eventsData,
        [nextId]: eventData
      }
    });

    return nextId;
  }

  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Calendar />
          <Route exact path ="/" component={(props) => <MainPage {...props} eventsData={this.state.eventsData} />}/>
          <Route exact path ="/events/:id" component={(props) => <ShowEventPage {...props} eventData={this.state.eventsData[props.match.params.id]} />}/>
          <Route exact path ="/new" component={(props) => <NewEvent {...props} onSave={this.handleSave} />}/>
        </div>
      </BrowserRouter>
    )
  }      
}

export default App;
