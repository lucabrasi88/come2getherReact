import React from 'react';

export default class ShowEventPage extends Component{
    render(){
        const { eventData } = this.props;

        return (
            <div>
                <h2>{eventData.name}</h2>
                <div>{eventData.description}</div>
            </div>
        )
    }
    
}