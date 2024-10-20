import React from "react";
import { FaLinkedin, FaGithub, FaReact, FaNodeJs, FaJsSquare } from 'react-icons/fa'; // Ícones do React, Node.js, JS
import { SiTailwindcss } from 'react-icons/si'; // Ícone do TailwindCSS
import { MdDesignServices } from 'react-icons/md'; // Ícone para UI/UX Design
import Button from '../components/home/Button.jsx'; // Importa o componente de botão

const Home = () => {
  return (
    <section className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center bg-black w-full md:w-4/5 min-h-screen">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full px-4 md:px-16">
          {/* Seção de texto */}
          <div className="flex flex-col text-white w-full md:w-2/3 text-center md:text-left">
            <h1 className="raleway-800 text-3xl md:text-4xl lg:text-5xl">Olá, eu sou o</h1>
            <h1 className="raleway-800 text-5xl md:text-6xl lg:text-7xl font-bold text-[#FB8500]">MATIAS :D</h1>
            <h2 className="ibm-plex-mono-regular text-sm md:text-base lg:text-lg">
              Desenvolvedor Front-End
            </h2>
            <div className="flex flex-row justify-center md:justify-start mt-4 space-x-4">
              {/* Botão LinkedIn Não Clicável */}
              <Button 
                icon={<FaLinkedin size={18} className="md:text-2xl" />} 
                label="LinkedIn"
              />
              {/* Botão GitHub Não Clicável */}
              <Button 
                icon={<FaGithub size={18} className="md:text-2xl" />} 
                label="GitHub"
              />
            </div>
          </div>
          {/* Seção de imagem */}
          <div className="mt-8 md:mt-0 w-full md:w-1/3 flex justify-center py-2">
            <img 
              src="caminho/para/sua/imagem.jpg" 
              alt="Foto do Matias" 
              className="rounded-full w-40 h-40 md:w-60 md:h-60 object-cover bg-yellow-500"
            />
          </div>
        </div>
        {/* Seção de skills */}
        <div className="flex flex-col items-center text-white mt-8">
          <h2 className="raleway-800 text-2xl md:text-3xl mb-4">Principais Skills:</h2>
          <div className="flex flex-wrap justify-center space-x-4 mb-16">
            {/* Botões de Skills Não Clicáveis */}
            <Button 
              icon={<FaReact size={18} className="md:text-2xl" />} 
              label="React"
            />
            <Button 
              icon={<FaNodeJs size={18} className="md:text-2xl" />} 
              label="Node.js"
            />
            <Button 
              icon={<FaJsSquare size={18} className="md:text-2xl" />} 
              label="JavaScript"
            />
            <Button 
              icon={<SiTailwindcss size={18} className="md:text-2xl" />} 
              label="TailwindCSS"
            />
            <Button 
              icon={<MdDesignServices size={18} className="md:text-2xl" />} 
              label="UI/UX Design"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
