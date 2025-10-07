import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import TripVerificationForm from "./components/TripVerificationForm";


function App() {
  const [] = useState([]);

  return (
    <Router>
    

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/TripVerificationForm" element={<TripVerificationForm/>}/>
      
      </Routes>
    </Router>
  );
}

export default App;
