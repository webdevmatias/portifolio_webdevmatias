import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './src/pages/Layout';
import SobreMim from "./src/pages/SobreMim";
import Habilidades from "./src/pages/Habilidades";
import Projetos from "./src/pages/Projetos";
import ContateMe from "./src/pages/ContateMe";
import AppHeader from './src/components/layout/AppHeader';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <AppHeader isVisible={true} />
              <Layout />
            </>
          } 
        />
        <Route 
          path="/sobre-mim" 
          element={
            <>
              <AppHeader isVisible={true} />
              <SobreMim />
            </>
          } 
        />
        <Route 
          path="/habilidades" 
          element={
            <>
              <AppHeader isVisible={true} />
              <Habilidades />
            </>
          } 
        />
        <Route 
          path="/projetos" 
          element={
            <>
              <AppHeader isVisible={true} />
              <Projetos />
            </>
          } 
        />
        <Route 
          path="/contate-me" 
          element={
            <>
              <AppHeader isVisible={true} />
              <ContateMe />
            </>
          } 
        />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
