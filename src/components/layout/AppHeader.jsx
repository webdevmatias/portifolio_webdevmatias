import React, { useState } from "react";
import Logo from "../../assets/webdevmatias_logo1.svg";
import { useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Ícones de hambúrguer e fechar

function AppHeader() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar o menu

  // Lista de rotas e seus respectivos textos
  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Sobre_Mim', path: '/sobre' },
    { label: 'Habilidades', path: '/habilidades' },
    { label: 'Projetos', path: '/projetos' },
    { label: 'Contate-me', path: '/contato' }
  ];

  // Função de navegação reutilizável
  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false); // Fecha o menu após clicar no item
  };

  // Função para alternar o menu de hambúrguer
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center">
      <div className="w-full md:w-4/5 h-16 bg-[#01161E] flex flex-row justify-between items-center md:rounded-b-lg rounded-none px-4 md:px-16">
        
        {/* Logo */}
        <img src={Logo} alt="logo" className="h-1/3 md:h-1/3" />

        {/* Ícone de hambúrguer (somente em telas pequenas) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} className="text-[#FB8500]" />}
          </button>
        </div>

        {/* Menu de navegação */}
        <div className={`flex-col md:flex md:flex-row gap-8 absolute md:static bg-[#01161E] w-full md:w-auto left-0 md:left-auto p-4 md:p-0 top-16 md:top-0 ${isMenuOpen ? 'flex' : 'hidden'} md:flex`}>
          {menuItems.map((item) => (
            <button 
              key={item.label} 
              onClick={() => handleNavigation(item.path)} 
              className="text-[#AEC3B0] hover:text-gray-400 transition-colors ibm-plex-mono-regular"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AppHeader;
