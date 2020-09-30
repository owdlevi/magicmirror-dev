import React, { useState, useEffect } from "react";
import BusDetail from "./BusDetail";
import config from "../../config/config";
import "./Bus.css";
const Bus = () => {
  const [buses, setBuses] = useState([]);

  useEffect(() => {
    const updateBus = () => {
      fetch(config.tflAPI)
        .then(res => res.json())
        .then(json => {
          let buses = json.filter(bus => bus.lineName !== config.removeBus);

          buses.sort((a, b) => {
            if (a.expectedArrival < b.expectedArrival) return -1;
            if (a.expectedArrival > b.expectedArrival) return 1;
            return 0;
          });

          setBuses(buses);
        })
        .catch();
    };

    const interval = setInterval(updateBus(), 1000 * 30);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const busList = buses.map(bus => <BusDetail key={bus.id} bus={bus} />);

  return <div className="BusList">{busList}</div>;
};

export default Bus;
