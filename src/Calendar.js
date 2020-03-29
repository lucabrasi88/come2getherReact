import React from "react";
import moment from "moment";

export default class Calendar extends React.Component {

    constructor(){
        super();
        this.weekdayShort = moment.weekdaysShort();

        this.weekDayShortName = this.weekdayShort.map(day => {
            return (
                <th key={day} className="week-day">
                    {day}
                </th>
            );
        });
    }
    

    render() {
    return (
        <div>
        <h2>Calendar</h2>
        <div>
            {this.weekDayShortName}
        </div>
        </div>
    );
    }
}