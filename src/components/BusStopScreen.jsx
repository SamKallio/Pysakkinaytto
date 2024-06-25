import "../App.css";
import SearchStopData from "./SearchStopData";

function BusStopScreen() {
  return (
    <div className="container">
      <h2 id="stopHeader">Pysäkkinäyttö</h2>
      <div id="stopScreen"></div>
      <SearchStopData />
    </div>
  );
}

export default BusStopScreen;
