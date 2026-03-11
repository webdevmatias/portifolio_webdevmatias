import React, { useState } from "react";
import Logo from "../../assets/webdevmatias_logo1.svg";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { HiHome, HiUser, HiCode, HiFolder, HiMail } from "react-icons/hi";

const MENU_ITEMS = [
  { label: "Home", path: "/", Icon: HiHome },
  { label: "Sobre", path: "/sobre-mim", Icon: HiUser },
  { label: "Habilidades", path: "/habilidades", Icon: HiCode },
  { label: "Projetos", path: "/projetos", Icon: HiFolder },
  { label: "Contato", path: "/contate-me", Icon: HiMail },
];

function AppHeader({ isVisible }) {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <section className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center">
        <div className="w-full md:w-4/5 h-16 bg-[#01161E] flex flex-row justify-between items-center md:rounded-b-lg px-4 md:px-16">
          <img src={Logo} alt="logo" className="h-1/3" />

          {/* Hambúrguer */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#FB8500] transition-transform duration-200"
          >
            {isMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>

          {/* Nav desktop */}
          <nav className="hidden md:flex gap-6">
            {MENU_ITEMS.map(({ label, path, Icon }) => (
              <button
                key={label}
                onClick={() => handleNavigation(path)}
                className="flex items-center gap-1.5 text-[#AEC3B0] hover:text-white transition-colors ibm-plex-mono-regular text-sm"
              >
                <Icon size={14} className="text-[#FB8500]" />
                {label}
              </button>
            ))}
          </nav>
        </div>

        {/* Nav mobile */}
        <div
          className={`absolute top-16 left-0 right-0 md:hidden flex flex-col bg-[#0a2535] border-t border-[#FB8500]/15 px-6 py-4 gap-1 transition-all duration-300 ease-in-out
            ${isMenuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}
        >
          {MENU_ITEMS.map(({ label, path, Icon }) => (
            <button
              key={label}
              onClick={() => handleNavigation(path)}
              className="flex items-center gap-3 text-[#AEC3B0] hover:text-white hover:bg-white/5 transition-colors ibm-plex-mono-regular text-sm text-left px-3 py-3 rounded-lg"
            >
              <Icon size={16} className="text-[#FB8500]" />
              {label}
            </button>
          ))}
        </div>
      </section>
    </>
  );
}

export default AppHeader;
