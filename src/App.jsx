import "./App.css";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <div className="stopwatch-container">
        <div className="stopwatch-display">
          <span className="stopwatch-time">12:02</span>
          <span className="stopwatch-ampm">AM</span>
        </div>
        <div className="stopwatch-lower">
          <span className="stopwatch-lower-text">00:00:13</span>
        </div>
      </div>
      <Analytics />
    </>
  );
}

export default App;
