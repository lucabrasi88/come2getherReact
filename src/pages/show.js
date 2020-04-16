import React from 'react';

export default class ShowEventPage extends React.Component{
    render(){
        const { eventData } = this.props;

        if(!eventData){
            return null;
        }

        return (
            <div>
                <h2>{eventData.name}</h2>
                <div>{eventData.description}</div>
            </div>
        )
    }
    
}