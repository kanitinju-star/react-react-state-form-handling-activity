import { useState } from "react";
import "./App.css";
const [greeting, setGreeting] = useState("");
function App() {
  return (
    <div className="App">
      <h1>Simple Greeting Message App</h1>
      <div className="greeting-container">
        <h2>{greeting}</h2>
        <div className="buttons">
          <button onClick={() => setGreeting("Hi")}>Hi</button>
          <button onClick={() => setGreeting("Hello")}>สวัสดี</button>
        </div>
      </div>
    </div>
  );
}

export default App;
