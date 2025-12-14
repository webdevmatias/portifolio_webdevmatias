"use client";
import React, { useState } from "react";

// Front / Base
import { FaReact, FaJs, FaCss3Alt, FaGitAlt } from "react-icons/fa";

// Simple Icons
import {
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiSequelize,
  SiPostgresql,
  SiTypescript,
  SiNestjs,
  SiDocker,
  SiGithub,
  SiPython
} from "react-icons/si";

// Outros
import { TbBrandCSharp } from "react-icons/tb";
import { DiMysql } from "react-icons/di";

const technologies = [
  // 🔵 Front-end
  {
    icon: <FaReact size={40} />,
    label: "React.js",
    description: "Interfaces modernas e componentizadas."
  },
  {
    icon: <FaJs size={40} />,
    label: "JavaScript",
    description: "Base da web moderna."
  },
  {
    icon: <SiTypescript size={40} />,
    label: "TypeScript",
    description: "JavaScript com tipagem estática."
  },
  {
    icon: <FaCss3Alt size={40} />,
    label: "CSS",
    description: "Estilização responsiva."
  },
  {
    icon: <SiTailwindcss size={40} />,
    label: "Tailwind CSS",
    description: "CSS utilitário e produtivo."
  },

  // 🟢 Back-end
  {
    icon: <SiNodedotjs size={40} />,
    label: "Node.js",
    description: "Execução JavaScript no servidor."
  },
  {
    icon: <SiExpress size={40} />,
    label: "Express.js",
    description: "APIs REST simples e rápidas."
  },
  {
    icon: <SiNestjs size={40} />,
    label: "NestJS",
    description: "Arquitetura escalável e robusta."
  },
  {
    icon: <SiPython size={40} />,
    label: "Python",
    description: "Scripts, automações e NLP."
  },
  {
    icon: <TbBrandCSharp size={40} />,
    label: "C Sharp",
    description: "Backend moderno com .NET."
  },

  // 🗄️ Banco de dados
  {
    icon: <DiMysql size={40} />,
    label: "MySQL",
    description: "Banco de dados relacional."
  },
  {
    icon: <SiPostgresql size={40} />,
    label: "PostgreSQL",
    description: "Banco relacional avançado."
  },
  {
    icon: <SiSequelize size={40} />,
    label: "Sequelize",
    description: "ORM para Node.js."
  },

  // ⚙️ DevOps / Versionamento
  {
    icon: <FaGitAlt size={40} />,
    label: "Git",
    description: "Controle de versão."
  },
  {
    icon: <SiGithub size={40} />,
    label: "GitHub",
    description: "Repositórios e colaboração."
  },
  {
    icon: <SiDocker size={40} />,
    label: "Docker",
    description: "Containers e ambientes isolados."
  }
];

const CardHabilidades = ({ icon, label, description, isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-col justify-center items-center 
        bg-[#1e1e1e] text-[#FB8500] rounded-xl 
        hover:shadow-[0_0_15px_#FB8500] hover:scale-105 
        cursor-pointer transition-all duration-300 
        aspect-square w-40 md:w-36 p-4 md:p-6 mb-8"
    >
      <div className="flex flex-col items-center text-center">
        {icon}
        <span className="mt-2 font-semibold text-sm sm:text-base">{label}</span>

        {isActive && (
          <p className="text-xs mt-2 text-gray-300 leading-snug">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default function Habilidades() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="flex justify-center py-24 bg-[#080808]">
      <div className="w-11/12 md:w-4/5">
        <h1 className="text-4xl text-center font-bold text-white mb-2">
          Habilidades
        </h1>
        <p className="text-center text-gray-400 mb-12">
          Clique para ver mais detalhes
        </p>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] justify-items-center">
          {technologies.map((tech, index) => (
            <CardHabilidades
              key={index}
              icon={tech.icon}
              label={tech.label}
              description={tech.description}
              isActive={activeIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
