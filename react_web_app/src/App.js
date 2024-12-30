import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Shop />} />
      </Routes>
    </Router>
  );
}

export default App;
