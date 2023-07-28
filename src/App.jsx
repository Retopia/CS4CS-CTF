import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from './MainPage';
import Challenge1 from './Challenge1';
import Challenge2 from './Challenge2';
import Challenge3 from './Challenge3';
import Challenge4 from './Challenge4';
import CompatibilityTest from './CompatibilityTest';
import CompatibilityScore from './CompatibilityScore';
import Scavenger from './Scavenger'
import Chat from './Chat'
import Flag from './Flag'
import HomePage from './HomePage'
import Week2 from './Week2'
import Week3 from './Week3'
import Dir from './Dir';
// import other challenge components

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* <Route path="/challenge1" element={<Challenge1 />} /> */}
        {/* <Route path="/challenge2" element={<Challenge2 />} />
        <Route path="/comptest" element={<CompatibilityTest />} />
        <Route path="/compscore" element={<CompatibilityScore />} /> */}
        {/* <Route path="/scav" element={<Scavenger />} /> */}
        {/* <Route path="/chat" element={<Chat />} /> */}
        {/* <Route path="/chat/h3110" element={<Flag />} /> */}
        {/* <Route path="/home" element={<HomePage />} /> */}
        {/* <Route path="/week2" element={<Week2 />} /> */}
        {/* Add more routes as needed */}
        <Route path="/final" element={<Week3 />} />
        <Route path="/final/directory" element={<Dir />} />
      </Routes>
    </Router>
  );
}

export default App;
