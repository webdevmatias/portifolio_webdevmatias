"use client";
import React, { useState } from "react";
import {
  FaReact, FaJs, FaCss3Alt, FaGitAlt, FaNodeJs,
} from "react-icons/fa";
import {
  SiNextdotjs, SiPrisma, SiTailwindcss, SiAntdesign, SiGithub,
  SiPostman, SiFigma, SiVite, SiNodedotjs, SiExpress,
  SiNestjs, SiTypescript, SiPostgresql, SiSequelize, SiDocker,
  SiMysql, SiSwagger, SiMongodb, SiLeaflet, SiAxios,
} from "react-icons/si";
import { DiMysql } from "react-icons/di";

export const techIcons = {
  "Next.js": <SiNextdotjs size={20} color="#fff" />,
  "Prisma": <SiPrisma size={20} color="#2D3748" />,
  "React.js": <FaReact size={20} color="#61DBFB" />,
  "JavaScript": <FaJs size={20} color="#F7DF1E" />,
  "TypeScript": <SiTypescript size={20} color="#3178C6" />,
  "CSS": <FaCss3Alt size={20} color="#2965F1" />,
  "Tailwind": <SiTailwindcss size={20} color="#38BDF8" />,
  "Ant Design": <SiAntdesign size={20} color="#1677FF" />,
  "Git": <FaGitAlt size={20} color="#F1502F" />,
  "GitHub": <SiGithub size={20} color="#fff" />,
  "Postman": <SiPostman size={20} color="#FF6C37" />,
  "Figma": <SiFigma size={20} color="#A259FF" />,
  "Vite": <SiVite size={20} color="#646CFF" />,
  "Node.js": <SiNodedotjs size={20} color="#539E43" />,
  "Express": <SiExpress size={20} color="#fff" />,
  "NestJS": <SiNestjs size={20} color="#E0234E" />,
  "MySQL": <DiMysql size={20} color="#00758F" />,
  "PostgreSQL": <SiPostgresql size={20} color="#336791" />,
  "Sequelize": <SiSequelize size={20} color="#52B0E7" />,
  "Docker": <SiDocker size={20} color="#0db7ed" />,
  "Swagger": <SiSwagger size={20} color="#85EA2D" />,
  "MongoDB": <SiMongodb size={20} color="#4FAA41" />,
  "Leaflet": <SiLeaflet size={20} color="#199900" />,
  "Axios": <SiAxios size={20} color="#5A29E4" />,
};

const CardProjetos = ({
  image,
  title,
  description,
  tecnologias = [],
  isClickable,
  link,
  expandido, // 👈 recebido do pai
  onToggleExpand, // 👈 callback para expandir esse card
}) => {
  const limiteTexto = 60;
  const textoExibido = expandido
    ? description
    : description.length > limiteTexto
      ? description.slice(0, limiteTexto) + "..."
      : description;

  return (
    <div
      className="relative flex flex-col bg-[#1e1e1e] rounded-md shadow-md border-b-4 mb-6 mx-4 md:mx-0
                 transition-transform hover:scale-[1.02] hover:shadow-[0_0_15px_#FB8500]"
      style={{ borderBottomColor: "#FB8500" }}
    >
      <img src={image} alt={title} className="rounded-t-md h-40 w-full object-cover" />

      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-xl text-white font-semibold mb-2">{title}</h2>

        <p className="text-gray-300 text-sm text-start mb-3">
          {textoExibido}
        </p>

        {description.length > limiteTexto && (
          <button
            onClick={onToggleExpand}
            className="text-[#FB8500] text-xs self-start mb-3 hover:underline"
          >
            {expandido ? "Ler menos" : "Ler mais"}
          </button>
        )}

        {/* Ícones das tecnologias */}
        {tecnologias.length > 0 && (
          <div className="flex items-center justify-center flex-wrap gap-2 mt-auto border-t border-[#FB8500]/50 pt-2">
            {tecnologias.map((tech, i) => (
              <div key={i} title={tech} className="text-[#FB8500] pt-1">
                {techIcons[tech] || (
                  <span className="text-xs text-gray-400">{tech}</span>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Botão "Saiba mais" */}
        <button
          className={`absolute top-2 right-2 bg-[#FB8500] text-white px-2 py-1 rounded-md 
                      ${isClickable ? "" : "cursor-not-allowed opacity-50"}`}
          onClick={isClickable ? () => window.open(link, "_blank") : null}
          disabled={!isClickable}
        >
          Saiba mais
        </button>
      </div>
    </div>
  );
};

export default CardProjetos;

