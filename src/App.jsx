import { useState } from "react";
import "./App.css";
function App() {
  const [inputText, setInputText] = useState(""); 
  const [submittedText, setSubmittedText] = useState("Hello DT"); 

  const handleAddClick = () => {
    setSubmittedText(inputText); 
  }
  return (
    <div className="App">
      <h1>Simple Greeting Message App 2</h1>
      <div className="greeting-container">
        <h2>{submittedText}</h2>
        <input type="text" value={inputText} onChange={(event) => setInputText(event.target.value)} />
        <div className="buttons">
          <button onClick={handleAddClick}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default App;
