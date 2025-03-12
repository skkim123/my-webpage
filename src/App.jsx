import "./App.css";
import { Analytics } from "@vercel/analytics/react";
import StopWatchSection from "./components/stopwatch-section/stopwatch-section";

function App() {
  return (
    <>
      <div className="app-container">
        <h1>Simple Stopwatch</h1>
        <StopWatchSection />
      </div>
      <Analytics />
    </>
  );
}

export default App;
