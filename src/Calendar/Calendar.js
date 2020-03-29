import React from "react";
import moment from "moment";
import "./calendar.css";

export default class Calendar extends React.Component {

    weekdayShort = moment.weekdaysShort();
    state = {
        dateObject: moment()
    }
    
    render() {
        let weekDayShortName = this.weekdayShort.map(day => {
            return (
                <th key={day} className="week-day">
                    {day}
                </th>
            );
        });


    return (
        <div className="calendar-date">
            <table className="calendar-day">
                {weekDayShortName}
            </table>  
        </div>
    );
    }
}