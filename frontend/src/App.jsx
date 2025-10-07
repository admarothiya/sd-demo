import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import TripVerificationForm from "./components/TripVerificationForm";
import ClosingChat from "./components/ClosingChat";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/trip-verification" element={<TripVerificationForm />} />
        <Route path="/ClosingChat" element={<ClosingChat/>}/>

      </Routes>
    </Router>
  );
}

export default App;
