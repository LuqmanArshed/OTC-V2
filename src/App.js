import "./App.css";

import { BaseRouter } from "./routes";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <BaseRouter />
      </Router>
    </div>
  );
}

export default App;
