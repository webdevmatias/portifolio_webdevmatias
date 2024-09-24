import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './src/pages/Layout';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />       
      </Routes>
    </Router>
  );
}

export default AppRoutes;