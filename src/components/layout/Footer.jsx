import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-center w-full h-auto py-4 bg-[#01161E] text-white">
      {/* Seção Esquerda: Texto ou Copyright */}
      <div className="">
        <p className="text-sm">&copy; 2024 Matias. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
