import React from "react";
import ReactDOM from "react-dom";

import Calendar from "./Calendar/Calendar";
import EventLines from "./Events/EventLine";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="row">
      <div className="col-sm-6">
      <Calendar />
      </div>     
      <div className="col-sm-6">
        <EventLines key="0" date="poniedziałek" name="Halfmarathon Poznań"/>
        <EventLines key="1" date="poniedziałek" name="Halfmarathon Poznań"/>
        <EventLines key="2" date="poniedziałek" name="Halfmarathon Poznań"/>
        <EventLines key="3" date="poniedziałek" name="Halfmarathon Poznań"/>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
