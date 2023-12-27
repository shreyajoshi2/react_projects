import { useState, useEffect } from "react";
import "./App.css";

const traficlight = [
  {
    id: 1,
    light: "red",
    time: 9,
  },
  {
    id: 2,
    light: "yellow",
    time: 3,
  },
  {
    id: 3,
    light: "green",
    time: 6,
  },
];
function App() {
  const [activelight, setActivelight] = useState(1);
  const [count, setCount] = useState(traficlight[1].time);

  useEffect(() => {
    setTimeout(() => {
      console.log("called");
      setActivelight(activelight === 1 ? activelight + 2 : activelight <= 3 ? activelight - 1 : "");
    }, traficlight[activelight - 1].time * 1000);
    setCount(traficlight[activelight - 1].time);
  }, [activelight]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [count]);
  return (
    <div className="App">
      <h1 className="heading">REACT JS TRAFFIC LIGHT</h1>
      <div className="main-bg-container">
        <div className="traffic-light-container">
          <div className="traffic-light red" style={activelight === 1 ? { opacity: "1" } : { opacity: "0.5" }}></div>
          <div className="traffic-light yellow" style={activelight === 2 ? { opacity: "1" } : { opacity: "0.5" }}></div>
          <div className="traffic-light green" style={activelight === 3 ? { opacity: "1" } : { opacity: "0.5" }}></div>
        </div>
        <div className="counter-container">
          <span className="respective-sign" role="img">
            {activelight === 1 ? "🚶🏻‍♂️" : activelight === 2 ? "✋" : "🚙 "}
          </span>
          <span className="count-element">{count}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
