import React, { useState, useEffect } from "react";
import Bus from "./Bus";

//limit shown busses count
const maxShownBusses = 5;

function BusStop({ stop }) {
  const [busData, setBusData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://data.foli.fi/siri/stops/${stop.id}/format`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        if (data) setBusData(data.result);
      } catch (error) {
        console.error("Error while fetching:", error);
      }
    };

    fetchData();
  }, [stop]);

  return (
    <>
      <h3 id="stopTitle">{stop.name}</h3>
      {busData ? (
        busData
          .slice(0, 5)
          .map((value, index) => <Bus bus={value} key={index} />)
      ) : (
        <p>"Loading bus data..."</p>
      )}
    </>
  );
}

export default BusStop;
