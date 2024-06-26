import React from "react";
import { getTimeDifferenceInMinutes } from "../assets/helperFunc";

function Bus({ bus }) {
  const arrivedTime = bus.aimedarrivaltime.slice(10);
  const expectedArrivalTime = bus.expectedarrivaltime.slice(10);

  const minutesRemaining = getTimeDifferenceInMinutes(
    arrivedTime,
    expectedArrivalTime
  );

  //At the moment 0 is shown as estimated time in minutes for arrival if bus has not started moving yet, it is because expectedarrivaltime defaults to aimedarrivaltime. Could filter out those busses if wanted.
  return (
    <div id="busContainer">
      <p className="busText">{bus.destinationdisplay}</p>
      <p className="busText">{arrivedTime}</p>
      {Math.sign(minutesRemaining) === -1 ? (
        <p className="busText negative">+{Math.abs(minutesRemaining)}</p>
      ) : (
        <p className="busText positive">{minutesRemaining}</p>
      )}
    </div>
  );
}

export default Bus;
