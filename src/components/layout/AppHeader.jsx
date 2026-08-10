import { useState } from "react";
import Logo from "../../assets/webdevmatias_logo1.svg";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaGlobe } from "react-icons/fa";
import { HiHome, HiUser, HiCode, HiFolder, HiMail } from "react-icons/hi";
import { useLanguage } from "../../context/LanguageContext";

function AppHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const MENU_ITEMS = [
    { label: t("nav.home"), path: "/", sectionId: "home", Icon: HiHome },
    { label: t("nav.sobre"), path: "/sobre-mim", sectionId: "sobre-mim", Icon: HiUser },
    { label: t("nav.habilidades"), path: "/habilidades", sectionId: "habilidades", Icon: HiCode },
    { label: t("nav.projetos"), path: "/projetos", sectionId: "projetos", Icon: HiFolder },
    { label: t("nav.contato"), path: "/contate-me", sectionId: "contate-me", Icon: HiMail },
  ];

  const handleNav = (e, sectionId, targetPath) => {
    closeMenu();
    if (location.pathname === "/" && sectionId) {
      e.preventDefault();
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else if (location.pathname.startsWith("/projetos/") && targetPath === "/projetos") {
      // Se estiver na página de detalhe de um projeto, navegar para a listagem completa /projetos
      navigate("/projetos");
    } else if (sectionId) {
      e.preventDefault();
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <>
      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={closeMenu}
        />
      )}

      <section className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center">
        <div className="w-full md:w-4/5 h-16 bg-[#01161E] flex flex-row justify-between items-center md:rounded-b-lg px-4 md:px-12">
          <Link
            to="/"
            onClick={(e) => handleNav(e, "home", "/")}
            className="flex items-center h-full"
          >
            <img src={Logo} alt="WebDevMatias — Lucas Matias" height={21} decoding="async" className="h-1/3" />
          </Link>

          {/* Hambúrguer + Lang Selector Mobile */}
          <div className="flex items-center gap-3 md:hidden">
            {/* Lang Switcher Mobile */}
            <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-0.5 text-xs ibm-plex-mono-regular">
              <button
                onClick={() => setLanguage("pt")}
                className={`px-2 py-0.5 rounded-full transition-all ${
                  language === "pt"
                    ? "bg-[#FB8500] text-black font-semibold"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                PT
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-2 py-0.5 rounded-full transition-all ${
                  language === "en"
                    ? "bg-[#FB8500] text-black font-semibold"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
              className="text-[#FB8500] transition-transform duration-200"
            >
              {isMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>

          {/* Nav desktop + Lang Switcher */}
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex gap-6">
              {MENU_ITEMS.map(({ label, path, sectionId, Icon }) => (
                <NavLink
                  key={path}
                  to={path}
                  onClick={(e) => handleNav(e, sectionId, path)}
                  className={({ isActive }) =>
                    `flex items-center gap-1.5 transition-colors ibm-plex-mono-regular text-sm ${
                      isActive ? "text-white font-medium" : "text-[#AEC3B0] hover:text-white"
                    }`
                  }
                >
                  <Icon size={14} className="text-[#FB8500]" />
                  {label}
                </NavLink>
              ))}
            </nav>

            {/* Separador */}
            <div className="h-4 w-px bg-white/10" />

            {/* Language Switcher Desktop */}
            <div className="flex items-center gap-1.5 bg-white/[0.04] border border-white/10 rounded-full p-1 text-xs ibm-plex-mono-regular">
              <FaGlobe size={11} className="text-[#FB8500] ml-1.5" />
              <button
                onClick={() => setLanguage("pt")}
                className={`px-2 py-0.5 rounded-full transition-all ${
                  language === "pt"
                    ? "bg-[#FB8500] text-black font-semibold shadow-sm"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                PT
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-2 py-0.5 rounded-full transition-all ${
                  language === "en"
                    ? "bg-[#FB8500] text-black font-semibold shadow-sm"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>

        {/* Nav mobile */}
        <div
          id="mobile-nav"
          className={`absolute top-16 left-0 right-0 md:hidden flex flex-col bg-[#0a2535] border-t border-[#FB8500]/15 px-6 py-4 gap-1 transition-all duration-300 ease-in-out
            ${isMenuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}
        >
          {MENU_ITEMS.map(({ label, path, sectionId, Icon }) => (
            <NavLink
              key={path}
              to={path}
              onClick={(e) => handleNav(e, sectionId, path)}
              className={({ isActive }) =>
                `flex items-center gap-3 transition-colors ibm-plex-mono-regular text-sm text-left px-3 py-3 rounded-lg ${
                  isActive ? "text-white bg-white/10 font-medium" : "text-[#AEC3B0] hover:text-white hover:bg-white/5"
                }`
              }
            >
              <Icon size={16} className="text-[#FB8500]" />
              {label}
            </NavLink>
          ))}
        </div>
      </section>
    </>
  );
}

export default AppHeader;
