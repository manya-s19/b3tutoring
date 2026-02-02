
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import MathPage from './pages/MathPage';
import EnglishPage from './pages/EnglishPage';
import FrenchPage from './pages/FrenchPage';
import SciencePage from './pages/SciencePage';

function App() {
  return (
    <Router basename="/b3tutoring">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/math" element={<MathPage />} />
        <Route path="/english" element={<EnglishPage />} />
        <Route path="/french" element={<FrenchPage />} />
        <Route path="/science" element={<SciencePage />} />
      </Routes>
    </Router>
  );
}

export default App;
