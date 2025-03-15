export default function StopwatchSection() {
  return (
    <div className="stopwatch-section-container">
      <div className="progress-task-container">
        <div className="progress-task-title">
          <h1>Progress Task</h1>
        </div>
        <div className="progress-task-buttons">
          <div>수정</div>
          <div>삭제</div>
          <div>빠꾸</div>
        </div>
      </div>
      <div className="time-container">
        <div className="time-display">
          <h1>00:00:00</h1>
        </div>
        <div className="time-buttons">
          <div>Start</div>
          <div>Finish</div>
        </div>
      </div>
    </div>
  );
}
