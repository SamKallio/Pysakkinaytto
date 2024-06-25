import React from "react";
import { useState } from "react";

function SearchStopData({ setCurrentStop }) {
  const [currentNumber, setCurrentNumber] = useState(0);

  const searchStop = (e) => {
    e.preventDefault();

    if (currentNumber) {
      fetch("http://data.foli.fi/siri/sm/pretty")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          if (data.hasOwnProperty(currentNumber)) {
            const stopData = data[currentNumber];
            setCurrentStop({ id: currentNumber, name: stopData.stop_name });
          } else {
            console.log("Couldn't find data for this stop number");
          }
        })
        .catch((error) => {
          console.error("Error while fetching:", error);
        });
    }
  };

  return (
    <form id="searchBox" onSubmit={searchStop}>
      <label>Pysäkkinumero:</label>
      <input
        id="searchInput"
        type="number"
        min="0"
        onChange={() => setCurrentNumber(event.target.value)}
      ></input>
      <input id="searchBtn" type="submit" value="Etsi"></input>
    </form>
  );
}

export default SearchStopData;
