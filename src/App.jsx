import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState(true);
  const validateEmail = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      setMessage(`✅ ${email}`);
      setIsError(false);
    } else {
      setMessage("❌ Email not valid");
      setIsError(true);
    }
  };

  return (
    <div className="App">
      <h1>Email Validation App</h1>
      <form className="email-container">
        <h2 style={{ color: isError ? "red" : "green" }}>{message}</h2>
        <input type="text" placeholder="Enter your email" className="email-input" value={email} onChange={(e) => setEmail(e.target.value)} />
        <div className="buttons">
          <button type="submit" onClick={validateEmail}>Validate</button>
        </div>
      </form>
    </div>
  );
}

export default App;
