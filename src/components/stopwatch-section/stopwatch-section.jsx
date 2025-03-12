import "./stopwatch-section.css";
import { useState } from "react";
import { useRef } from "react";

const START = "Start";
const PAUSE = "Pause";
const RESUME = "Resume";

const formatTime = (ms) => {
  const totalSeconds = Math.floor(ms / 1000);

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const hoursStr = String(hours).padStart(2, "0");
  const minutesStr = String(minutes).padStart(2, "0");
  const secondsStr = String(seconds).padStart(2, "0");

  return `${hoursStr}:${minutesStr}:${secondsStr}`;
};

const StopWatchSection = () => {
  const [startTime, setStartTime] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);
  const [savedTimeMilliSeconds, setSavedTimeMilliSeconds] = useState(0);
  const [startButtonStatus, setStartButtonStatus] = useState(START);

  const ref = useRef(null);

  const handleStart = () => {
    if (startButtonStatus === START) {
      setStartButtonStatus(PAUSE);
      setStartTime(new Date());
      setCurrentTime(new Date());

      ref.current = setInterval(() => {
        setCurrentTime(new Date());
      }, 10);
    }

    if (startButtonStatus === PAUSE) {
      setStartButtonStatus(RESUME);
      const savedTime =
        currentTime && startTime
          ? currentTime.getTime() - startTime.getTime() + savedTimeMilliSeconds
          : savedTimeMilliSeconds;
      setSavedTimeMilliSeconds(savedTime);

      setStartTime(null);
      setCurrentTime(null);

      clearInterval(ref.current);
      ref.current = null;
    }

    if (startButtonStatus === RESUME) {
      setStartButtonStatus(PAUSE);
      setStartTime(new Date());
      ref.current = setInterval(() => {
        setCurrentTime(new Date());
      }, 10);
    }
  };

  const handleReset = () => {
    setStartButtonStatus(START);
    setStartTime(null);
    setCurrentTime(null);
    setSavedTimeMilliSeconds(0);

    clearInterval(ref.current);
    ref.current = null;
  };

  const stopwatchTime =
    currentTime && startTime
      ? currentTime.getTime() - startTime.getTime() + savedTimeMilliSeconds
      : savedTimeMilliSeconds;

  return (
    <div className="stopwatch-section">
      <div className="stopwatch-container">
        <div className="stopwatch-display">
          <span className="stopwatch-time">{formatTime(stopwatchTime)}</span>
        </div>
        <div className="stopwatch-button-container">
          <button
            className="stopwatch-button stopwatch-button-start"
            onClick={handleStart}
          >
            {startButtonStatus}
          </button>
          <button
            className="stopwatch-button stopwatch-button-reset"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default StopWatchSection;
