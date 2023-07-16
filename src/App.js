import { useState } from "react";
import "./App.css";
import { SubmitButton } from "./components/SubmitButton.js";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState({ name: "", email: "" });

  const handleSubmit = () => {
    setData({ name, email });
  };

  return (
    <div className="context">
      <h1>My First React Form</h1>
      <div className="input-area">
        <form>
          <label className="input-label"> Name: </label>
          <input
            className="input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label className="input-label"> Email: </label>
          <input
            className="input"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div>
            <SubmitButton handleSubmit={handleSubmit}  />
          </div>
        </form>
      </div>
      <div className="output-area">
        <p>{data.name}</p>
        <p>{data.email}</p>
      </div>
    </div>
  );
}

export default App;
