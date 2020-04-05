import React, { Component } from "react";
import ReactDOM from "react-dom";

import 'bootstrap/dist/css/bootstrap.css';
import Eventlist from "../components/eventlist/eventlist";
import Calendar from "../components/calendar/Calendar";

class MainPage extends Component {

    render(){
      return (
        <div className="row">
          <div className="col-sm-1">
            <Calendar />
          </div>     
          <div className="col-sm-6">
            <h2>Events</h2>
            <Eventlist eventsData={this.props.eventsData} />
          </div>
        </div>
      );
    }
  
  }
  
  export default MainPage;