import React, { useState, useEffect } from "react";
import moment from "moment";
import "./Today.css";

const Today = () => {
  const [todayState, setTodayState] = useState({
    day: moment().format("dddd"),
    today: moment().format("D MMMM")
  });

  useEffect(() => {
    const interval = setInterval(checkDate, 1000 * 60 * 5);
    return () => {
      clearInterval(interval);
    };
  });

  const checkDate = () => {
    setTodayState({
      day: moment().format("dddd"),
      today: moment().format("D MMMM")
    });
  };

  const { day, today } = todayState;

  return (
    <div className="Today">
      {day}, {today}
    </div>
  );
};

export default Today;
