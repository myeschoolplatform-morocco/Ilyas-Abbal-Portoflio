import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import ProjectDetails from './components/ProjectDetails';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/project" element={<ProjectDetails />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
};

export default App;