import { useState } from "react";
import Logo from "../../assets/webdevmatias_logo1.svg";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { HiHome, HiUser, HiCode, HiFolder, HiMail } from "react-icons/hi";

const MENU_ITEMS = [
  { label: "Home", path: "/", Icon: HiHome },
  { label: "Sobre", path: "/sobre-mim", Icon: HiUser },
  { label: "Habilidades", path: "/habilidades", Icon: HiCode },
  { label: "Projetos", path: "/projetos", Icon: HiFolder },
  { label: "Contato", path: "/contate-me", Icon: HiMail },
];

function AppHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
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
        <div className="w-full md:w-4/5 h-16 bg-[#01161E] flex flex-row justify-between items-center md:rounded-b-lg px-4 md:px-16">
          <Link to="/" onClick={closeMenu} className="flex items-center h-full">
            <img src={Logo} alt="WebDevMatias — Lucas Matias" height={21} decoding="async" className="h-1/3" />
          </Link>

          {/* Hambúrguer */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            className="md:hidden text-[#FB8500] transition-transform duration-200"
          >
            {isMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>

          {/* Nav desktop */}
          <nav className="hidden md:flex gap-6">
            {MENU_ITEMS.map(({ label, path, Icon }) => (
              <NavLink
                key={label}
                to={path}
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
        </div>

        {/* Nav mobile */}
        <div
          id="mobile-nav"
          className={`absolute top-16 left-0 right-0 md:hidden flex flex-col bg-[#0a2535] border-t border-[#FB8500]/15 px-6 py-4 gap-1 transition-all duration-300 ease-in-out
            ${isMenuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}
        >
          {MENU_ITEMS.map(({ label, path, Icon }) => (
            <NavLink
              key={label}
              to={path}
              onClick={closeMenu}
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

