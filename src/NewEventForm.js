import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class NewEvent extends React.Component {

    render(){
        <Form>
            <Form.Group controlId="formBasicEvent">
                <Form.Label>Event name</Form.Label>
                <Form.Control type="eventName" placeholder="Event name" />
                <Form.Text className="text-muted">
                Type an event name
                </Form.Text>

                <Form.Label>Event place</Form.Label>
                <Form.Control type="eventPlace" placeholder="Event place" />
                <Form.Text className="text-muted">
                Type an event place
                </Form.Text>

                <Form.Label>Event date</Form.Label>
                <Form.Control type="eventDate" placeholder="Event date" />
                <Form.Text className="text-muted">
                Choose an event date
                </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
            Submit
            </Button>
        </Form>
    }
}

