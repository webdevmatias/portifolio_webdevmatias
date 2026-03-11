import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./src/pages/Layout";
import SobreMim from "./src/pages/SobreMim";
import Habilidades from "./src/pages/Habilidades";
import Projetos from "./src/pages/Projetos";
import ProjetoDetalhe from "./src/pages/ProjetoDetalhe";
import ContateMe from "./src/pages/ContateMe";
import AppHeader from "./src/components/layout/AppHeader";
import Footer from "./src/components/layout/Footer";

const WithLayout = ({ children }) => (
  <>
    <AppHeader isVisible={true} />
    {children}
    <Footer />
  </>
);

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <WithLayout>
              <Layout />
            </WithLayout>
          }
        />
        <Route
          path="/sobre-mim"
          element={
            <WithLayout>
              <SobreMim />
            </WithLayout>
          }
        />
        <Route
          path="/habilidades"
          element={
            <WithLayout>
              <Habilidades />
            </WithLayout>
          }
        />
        <Route
          path="/projetos"
          element={
            <WithLayout>
              <Projetos />
            </WithLayout>
          }
        />
        <Route
          path="/projetos/:slug"
          element={
            <WithLayout>
              <ProjetoDetalhe />
            </WithLayout>
          }
        />
        <Route
          path="/contate-me"
          element={
            <WithLayout>
              <ContateMe />
            </WithLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
