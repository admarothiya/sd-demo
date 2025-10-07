import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";


function App() {
  const [] = useState([]);

  return (
    <Router>
    

      <Routes>
        <Route path="/" element={<HomePage/>} />
      
      </Routes>
    </Router>
  );
}

export default App;
