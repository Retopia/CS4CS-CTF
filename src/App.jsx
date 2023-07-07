import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from './MainPage';
import Challenge1 from './Challenge1';
import Challenge2 from './Challenge2';
// import other challenge components

function App() {
  return (
    <Router>
      <Routes>  
        <Route path="/" element={<MainPage />} />
        <Route path="/challenge1" element={<Challenge1 />} />
        <Route path="/challenge2" element={<Challenge2 />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
