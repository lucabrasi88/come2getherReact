import React from "react";
import moment from "moment";
import "./event.css";

const EventLine = props => (
    <div className="eventLine">
        <strong>{props.date}</strong> - {props.name}
    </div>
);

export default EventLine