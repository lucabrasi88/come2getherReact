import React from "./node_modules/react";
import { Link } from "./node_modules/react-router-dom";

export default class NewEvent extends React.Component{
    state = {
        eventData:{
            name: '',
            description: '',
            createdAt: undefined,
            updatedAt: undefined
        }
    }
    
    render(){
        const { eventData } = this.state;
        return(
            <div className="event-form">
                <h2>New event</h2>
                <form>
                    <div className="event-form-field">
                        <label>Name</label>
                        <input type="text" value={eventData.name}/>
                    </div>
                    <div className="event-form-field event-form-field-field-text">
                        <label>Description</label>
                        <textarea name="description" value={eventData.description}/> 
                    </div>
                    <div class="event-form-buttons">
                        <button className="btn">Save</button>
                        <Link to="/">Cancel</Link>
                    </div>
                </form>
            </div>
        )
    }
}