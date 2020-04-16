import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';

import MainPage from './pages/main';
import ShowEventPage from './pages/show';
import Navbar from './components/navbar/navbar';
import NewEvent from './components/newevent/NewEvent';
import Calendar from "./components/calendar/Calendar";

import DB from "./Db";

class App extends Component {
  
  state = {
    db: new DB('http://localhost:5984/come2getherdb'),
    eventsData: { },
    loading: true
  }

  async componentDidMount(){
    const eventsData = await this.state.db.getAllEvents()

    this.setState({
      eventsData,
      loading: false
    });
  }

  handleSave = async (eventData) =>{
    let { nextId } = await this.state.db.createEvent(eventData);

    const { eventsData } = this.state;
    this.setState({
      eventsData: {
        ...eventsData,
        [nextId]: eventData
      }
    });

    return nextId;
  }

  renderContent(){
  if(this.state.loading){
    return <h2>Loading...</h2>
  }

    return(
      <div className="app-content">
      <Calendar />
          <Route exact path ="/" component={(props) => <MainPage {...props} eventsData={this.state.eventsData} />}/>
          <Route exact path ="/events/:id" component={(props) => <ShowEventPage {...props} eventData={this.state.eventsData[props.match.params.id]} />}/>
          <Route exact path ="/new" component={(props) => <NewEvent {...props} onSave={this.handleSave} />}/>
      </div>
    )
  }

  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />          
          {this.renderContent()}
        </div>
      </BrowserRouter>
    )
  }      
}

export default App;
