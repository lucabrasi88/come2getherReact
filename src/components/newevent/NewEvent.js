import React from "react";
import { Link } from "react-router-dom";

export default class NewEvent extends React.Component{
    state = {
        eventData:{
            name: '',
            description: '',
            createdAt: undefined,
            updatedAt: undefined
        }
    }

    updateEvent = (e) => {
        const { eventData } = this.state;

        this.setState({
            eventData: { ...eventData, [e.target.name]: e.target.value}
        })
    }

    handleSave = async (e) => {
        e.preventDefault();

        const id =  await this.props.onSave(this.state.eventData);
        this.props.history.replace(`/events/${id}`);
    }
    
    render(){
        const { eventData } = this.state;
        return(
            <div className="event-form">
                <h2>New event</h2>
                <form onSubmit={this.handleSave}>
                    <div className="event-form-field">
                        <label>Name</label>
                        <input type="text" name="name" value={eventData.name} onChange={this.updateEvent}/>
                    </div>
                    <div className="event-form-field event-form-field-field-text">
                        <label>Description</label>
                        <textarea name="description" value={eventData.description} onChange={this.updateEvent}/> 
                    </div>
                    <div className="event-form-buttons">
                        <button className="btn">Save</button>
                        <Link to="/">Cancel</Link>
                    </div>
                </form>
            </div>
        )
    }
}