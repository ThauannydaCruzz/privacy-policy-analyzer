import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PoliciesList from './pages/PoliciesList';
import CreatePolicy from './pages/CreatePolicy';
import AnalyzePolicy from './pages/AnalyzePolicy';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/policies" element={<PoliciesList />} />
        <Route path="/create" element={<CreatePolicy />} />
        <Route path="/analyze" element={<AnalyzePolicy />} />
      </Routes>
    </Router>
  );
}

export default App;