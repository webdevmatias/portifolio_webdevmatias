import React from "react";
import { FaLinkedin, FaGithub } from 'react-icons/fa'; 
import Button from '../components/home/Button.jsx';                 
import MatiasPic from '../assets/matias_pic.svg'

const Home = () => {
  return (
    <section className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center bg-[#080808] w-full md:w-4/5 min-h-screen">
        {/* Seção main */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full px-16 md:px-40">
          {/* Seção de texto */}
          <div className="flex flex-col text-white w-full md:w-2/3 text-center md:text-left">
            <h1 className="ibm-font text-3xl md:text-4xl lg:text-5xl">Olá, eu sou o</h1>
            <h1 className="ibm-font text-5xl md:text-6xl lg:text-7xl font-bold text-[#FB8500]">MATIAS!</h1>
            <h2 className="ibm-plex-mono-regular text-sm md:text-base lg:text-lg">
              Desenvolvedor Full Stack
            </h2>
            <div className="flex flex-col md:flex-row justify-center md:gap-4 md:justify-start mt-4">
              {/* Botão LinkedIn Clicável */}
              <Button 
                icon={<FaLinkedin size={18} className="md:text-2xl" />} 
                label="LinkedIn"
                clickable={true}       
                color="#FB8500"        
                link="https://www.linkedin.com/in/matiaz/"
              />
              {/* Botão GitHub Clicável */}
              <Button 
                icon={<FaGithub size={18} className="md:text-2xl" />} 
                label="GitHub"
                clickable={true}      
                color="#FB8500"        
                link="https://github.com/webdevmatias" 
              />
            </div>
          </div>
          {/* Seção de imagem */}
          <div className="mt-8 mb-4 md:mt-0 w-full md:w-1/3 flex justify-center py-2">
            <img 
              src={MatiasPic} 
              alt="Foto do Matias" 
              className="rounded-full w-40 h-40 md:w-60 md:h-60 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
