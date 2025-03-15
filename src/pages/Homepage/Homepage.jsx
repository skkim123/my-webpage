import "./Homepage.style.css";
import StopWatchSection from "./components/StopwatchSection/StopwatchSection";
import TodoListSection from "./components/TodoListSection/TodoListSection";

export default function Homepage() {
  return (
    <div className="homepage-container">
      <StopWatchSection />
      <TodoListSection />
    </div>
  );
}
