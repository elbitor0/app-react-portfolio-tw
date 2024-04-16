import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import { Flowbite } from "flowbite-react";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Flowbite>
      <Router>
        <Routes>
          {/* App component wraps around all the 'pages'. */}
          <Route path="*" element={<App />} />
        </Routes>
      </Router>
    </Flowbite>
  </React.StrictMode>,
);
