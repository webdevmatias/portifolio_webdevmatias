import React, { useState } from "react";
import { FaReact, FaJs, FaCss3Alt, FaGitAlt } from 'react-icons/fa'; 
import { SiTailwindcss, SiAntdesign, SiMysql, SiPostman, SiNodedotjs, SiExpress, SiGithub, SiVite, SiFigma, SiSequelize, SiPostgresql, SiTypescript, SiNestjs, SiDocker, SiRedis } from 'react-icons/si'; 
import { MdDesignServices } from 'react-icons/md'; 

// Lista das tecnologias com ícone, nome e descrição
const technologies = [
  { icon: <FaReact size={40} />, label: "React.js", description: "Uma biblioteca para construir interfaces de usuário." },
  { icon: <FaJs size={40} />, label: "JavaScript", description: "Uma linguagem de programação essencial para desenvolvimento web." },
  { icon: <FaCss3Alt size={40} />, label: "CSS", description: "Usado para estilizar e layout das páginas." },
  { icon: <FaGitAlt size={40} />, label: "Git", description: "Sistema de controle de versão para gerenciamento de código." },
  { icon: <SiTailwindcss size={40} />, label: "Tailwind", description: "Um framework CSS utilitário para estilização rápida." },
  { icon: <SiAntdesign size={40} />, label: "Ant Design", description: "Uma biblioteca de componentes UI para React." },
  { icon: <SiMysql size={60} />, label: "MySQL", description: "Um sistema de gerenciamento de banco de dados relacional." },
  { icon: <SiPostgresql size={40} />, label: "PostgreSQL", description: "Banco de dados relacional avançado, open source." },
  { icon: <SiSequelize size={40} />, label: "Sequelize", description: "ORM para Node.js, suportando diversos bancos de dados." },
  { icon: <SiPostman size={40} />, label: "Postman", description: "Uma ferramenta para testar APIs." },
  { icon: <SiNodedotjs size={40} />, label: "Node.js", description: "Ambiente de execução para JavaScript no lado do servidor." },
  { icon: <SiExpress size={40} />, label: "Express", description: "Um framework para aplicações web em Node.js." },
  { icon: <SiNestjs size={40} />, label: "NestJS", description: "Framework Node.js para construção de APIs escaláveis e robustas." },
  { icon: <SiTypescript size={40} />, label: "TypeScript", description: "Superset do JavaScript que adiciona tipagem estática." },
  { icon: <SiDocker size={40} />, label: "Docker", description: "Plataforma para desenvolvimento, envio e execução de aplicações." },
  { icon: <SiRedis size={40} />, label: "Redis", description: "Banco de dados em memória de código aberto." },
  { icon: <SiVite size={40} />, label: "Vite", description: "Um build tool que oferece um ambiente de desenvolvimento rápido." },
  { icon: <SiFigma size={40} />, label: "Figma", description: "Ferramenta de design colaborativo na web." },
];

// Componente para cada card de habilidade
const CardHabilidades = ({ icon, label, description, isActive, onClick }) => {
  return (
    <div 
      className={`flex flex-col justify-center items-center px-4 py-2 border-b-4 rounded-md shadow-md transition-all duration-300 ${isActive ? 'bg-white text-black scale-110 mb-4' : 'bg-[#1e1e1e] text-[#FB8500]'}`}
      style={{
        borderColor: isActive ? 'transparent' : 'transparent',
        width: isActive ? '140px' : '120px', 
        height: isActive ? '160px' : '140px', 
      }}
      onClick={onClick}
    >
      {icon}
      <span className="text-sm md:text-base mt-1">{label}</span>
      {isActive && <p className="text-xs mt-1 text-center">{description}</p>}
    </div>
  );
};

// Componente principal de habilidades
const Habilidades = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Controla o card ativo

  const handleCardClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index); 
  };

  return (
    <section className="flex justify-center items-center py-24">
      <div className="flex justify-center items-center bg-[#080808] w-full md:w-4/5 min-h-screen">
        <div className="flex flex-col justify-center items-center px-4 md:px-4">
          <h1 className="text-4xl text-white font-bold m-4">Habilidades:</h1>
          <p className="text-gray-500 mb-12">Clique para ativar/desativar os cards!</p>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <CardHabilidades 
                key={index} 
                icon={tech.icon} 
                label={tech.label} 
                description={tech.description} 
                isActive={activeIndex === index} 
                onClick={() => handleCardClick(index)} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Habilidades;
