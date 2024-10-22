import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './src/pages/Layout';
import SobreMim from "./src/pages/SobreMim";
import Habilidades from "./src/pages/Habilidades";
import Projetos from "./src/pages/Projetos";
import ContateMe from "./src/pages/ContateMe";
import AppHeader from './src/components/layout/AppHeader';
import Footer from './src/components/layout/Footer';

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
              <Footer></Footer>
            </>
          } 
        />
        <Route 
          path="/sobre-mim" 
          element={
            <>
              <AppHeader isVisible={true} />
              <SobreMim />
              <Footer></Footer>
            </>
          } 
        />
        <Route 
          path="/habilidades" 
          element={
            <>
              <AppHeader isVisible={true} />
              <Habilidades />
              <Footer></Footer>
            </>
          } 
        />
        <Route 
          path="/projetos" 
          element={
            <>
              <AppHeader isVisible={true} />
              <Projetos />
              <Footer></Footer>
            </>
          } 
        />
        <Route 
          path="/contate-me" 
          element={
            <>
              <AppHeader isVisible={true} />
              <ContateMe />
              <Footer></Footer>
            </>
          } 
        />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
