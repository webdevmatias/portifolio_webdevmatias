import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppHeader from "./src/components/layout/AppHeader";
import Footer from "./src/components/layout/Footer";
import NotFound from "./src/pages/NotFound";

// Lazy-loaded pages — cada página vira um chunk separado no build
const Layout       = lazy(() => import("./src/pages/Layout"));
const SobreMim     = lazy(() => import("./src/pages/SobreMim"));
const Habilidades  = lazy(() => import("./src/pages/Habilidades"));
const Projetos     = lazy(() => import("./src/pages/Projetos"));
const ProjetoDetalhe = lazy(() => import("./src/pages/ProjetoDetalhe"));
const ContateMe    = lazy(() => import("./src/pages/ContateMe"));

// Fallback leve enquanto o chunk da página carrega
const PageLoader = () => (
  <div
    aria-label="Carregando página"
    className="flex items-center justify-center min-h-screen bg-[#080808]"
  >
    <span
      className="w-8 h-8 rounded-full border-2 border-[#FB8500]/20 border-t-[#FB8500] animate-spin"
      role="status"
    />
  </div>
);

const WithLayout = ({ children }) => (
  <>
    <AppHeader />
    {children}
    <Footer />
  </>
);

function AppRoutes() {
  return (
    <Router>
      <Suspense fallback={<PageLoader />}>
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default AppRoutes;

