import "./App.css";
import HomePage from "./pages/Homepage/Homepage";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <div className="app-container">
        <HomePage />
      </div>
      <Analytics />
    </>
  );
}

export default App;
