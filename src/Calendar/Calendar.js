import React from "react";
import moment from "moment";
import "./calendar.css";

export default class Calendar extends React.Component {

    weekdayShort = moment.weekdaysShort();
    state = {
        dateObject: moment()
    }

    daysInMonth = () => {
        return this.state.dateObject.daysInMonth();
      };

    // gets first day of the month
    firstDayOfMonth = () => {
        let dateObject = this.state.dateObject;
        let firstDay = moment(dateObject)
                     .startOf("month")
                     .format("d"); 
       return firstDay;
    };
    
    render() {
        let weekDayShortName = this.weekdayShort.map(day => {
            return (
                <th key={day} className="week-day">
                    {day}
                </th>
            );
        });

        // creates blank spaces if a counter is less than firstDayOfMonth
        let blanks = [];
        for (let i = 0; i < this.firstDayOfMonth(); i++) {
            blanks.push(<td className="calendar-day empty">{""}</td>);
        }
        // creates tds of dates in a month
        let daysInMonth = [];
        for (let d = 1; d <= this.daysInMonth(); d++) {
            daysInMonth.push(
                <td key={d} className="calendar-day">
                    {d}
                </td>
        );
        }
        // contains blanks and daysInMonth - dynamic values
        var totalSlots = [...blanks, ...daysInMonth];
        let rows = [];
        let cells = [];
        // fills all the slots
        totalSlots.forEach((row, i) => {
            if (i % 7 !== 0) {
              cells.push(row); // if index not equal 7 that means not go to next week
            } else {
              rows.push(cells); // when reach next week we contain all td in last week to rows 
              cells = []; // empty container 
              cells.push(row); // in current loop we still push current row to new container
            }
            if (i === totalSlots.length - 1) { // when end loop we add remain date
              rows.push(cells);
            }
          });

          let daysinmonth = rows.map((d, i) => {
            return <tr>{d}</tr>;
          });


        return (
            <div className="calendar-date">
                <table className="calendar-day">
                    <thead>
                        <tr>{weekDayShortName}</tr>
                    </thead>
                    <tbody>{daysinmonth}</tbody>
                </table> 
            </div>
        );
    }
}