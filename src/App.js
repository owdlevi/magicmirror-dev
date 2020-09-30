import React from "react";
import Clock from "./components/clock/Clock";
import Today from "./components/today/Today";
import Weather from "./components/weather/Weather";
import Bus from "./components/bus/Bus";
import Message from "./components/message/Message";
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <div className="TopLeft">
        <Today />
        <Clock />
        <Weather />
      </div>
      <div className="TopRight">
        <Bus />
      </div>
      <div className="Message">
        <Message />
      </div>
    </div>
  );
};

export default App;
