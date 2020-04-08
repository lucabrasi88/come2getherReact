import React, { Component } from "react";
import ReactDOM from "react-dom";

import 'bootstrap/dist/css/bootstrap.css';
import Eventlist from "../components/eventlist/eventlist";

class MainPage extends Component {

    render(){
      return (
        <div>
            <h2>Events</h2>
            <Eventlist eventsData={this.props.eventsData} />
        </div>
      );
    }
  
  }
  
  export default MainPage;