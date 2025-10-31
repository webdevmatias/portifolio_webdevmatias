"use client";
import React, { useState } from "react";
import {
  FaReact, FaJs, FaCss3Alt, FaGitAlt
} from "react-icons/fa";
import {
  SiTailwindcss, SiAntdesign, SiPostman,
  SiNodedotjs, SiExpress, SiVite,
  SiFigma, SiSequelize, SiPostgresql, SiTypescript,
  SiNestjs, SiDocker, SiGithub
} from "react-icons/si";
import { DiMysql } from "react-icons/di";

const technologies = [
  // Frontend
  { icon: <FaReact size={40} />, label: "React.js", description: "Biblioteca para UIs." },
  { icon: <FaJs size={40} />, label: "JavaScript", description: "Linguagem base da Web." },
  { icon: <FaCss3Alt size={40} />, label: "CSS", description: "Estilização de páginas." },
  { icon: <SiTailwindcss size={40} />, label: "Tailwind", description: "CSS utilitário rápido." },
  { icon: <SiAntdesign size={40} />, label: "Ant Design", description: "UI framework React." },

  // Ferramentas
  { icon: <FaGitAlt size={40} />, label: "Git", description: "Controle de versão." },
  { icon: <SiGithub size={40} />, label: "GitHub", description: "Hospedagem e versionamento de código." },
  { icon: <SiPostman size={40} />, label: "Postman", description: "Testes e requisições de API." },
  { icon: <SiFigma size={40} />, label: "Figma", description: "Design colaborativo de interfaces." },
  { icon: <SiVite size={40} />, label: "Vite", description: "Build tool rápida e moderna." },

  // Backend
  { icon: <SiNodedotjs size={40} />, label: "Node.js", description: "Execução JS no servidor." },
  { icon: <SiExpress size={40} />, label: "Express", description: "Framework web para Node." },
  { icon: <SiNestjs size={40} />, label: "NestJS", description: "API escalável em Node." },
  { icon: <SiTypescript size={40} />, label: "TypeScript", description: "JS com tipagem estática." },

  // Banco de dados
  { icon: <DiMysql size={40} />, label: "MySQL", description: "Banco de dados relacional." },
  { icon: <SiPostgresql size={40} />, label: "PostgreSQL", description: "Banco relacional avançado." },
  { icon: <SiSequelize size={40} />, label: "Sequelize", description: "ORM para Node.js." },

  // DevOps
  { icon: <SiDocker size={40} />, label: "Docker", description: "Ambiente isolado de apps." },
];

const CardHabilidades = ({ icon, label, description, isActive, onClick }) => (
  <div
    onClick={onClick}
    className={`flex flex-col justify-center items-center 
    bg-[#1e1e1e] text-[#FB8500] rounded-xl border border-transparent 
    hover:shadow-[0_0_15px_#FB8500] hover:scale-105 cursor-pointer
    transition-all duration-300 aspect-square w-40 md:w-36 p-4 md:p-6 mb-8 md:mb-6`}
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

export default function Habilidades() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleCardClick = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  return (
    <section className="flex justify-center items-center py-24 bg-[#080808]">
      <div className="w-11/12 md:w-4/5">
        <h1 className="text-4xl text-center font-bold text-white mb-2">
          Habilidades
        </h1>
        <p className="text-center text-gray-400 mb-12">
          Clique para ver mais detalhes.
        </p>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] justify-items-center">
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
    </section>
  );
}
