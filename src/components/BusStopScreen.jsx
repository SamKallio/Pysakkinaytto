import "../App.css";
import BusStop from "./BusStop";
import SearchStopData from "./SearchStopData";
import { useState } from "react";

function BusStopScreen() {
  const [currentStop, setCurrentStop] = useState(false);

  return (
    <div className="container">
      <h2 id="stopHeader">Pysäkkinäyttö</h2>
      <div id="stopScreen">{currentStop && <BusStop stop={currentStop} />}</div>
      <SearchStopData setCurrentStop={setCurrentStop} />
    </div>
  );
}

export default BusStopScreen;
