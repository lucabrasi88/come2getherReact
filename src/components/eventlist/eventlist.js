import React, { Component } from 'react';

export default class Eventlist extends Component{
    renderEvents(){
        const eventsData = Object.values(this.props.eventsData);

        return eventsData.map((e) => <div><h3>{e.name}</h3></div>);
    }
    
    render(){
        return(
            <div>
                { this.renderEvents() }
            </div>
        )
    }
}