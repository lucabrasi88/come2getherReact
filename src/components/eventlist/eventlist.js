import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Eventlist extends Component{
    renderEvents(){
        const eventsData = Object.values(this.props.eventsData);

        return eventsData.map((e) => <div><h3><Link to={`/events/${e._id}`}>{e.name}</Link></h3></div>);
    }
    
    render(){
        return(
            <div>
                { this.renderEvents() }
            </div>
        )
    }
}