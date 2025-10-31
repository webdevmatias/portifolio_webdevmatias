"use client";
import React, { useState } from "react";
import CardProjetos from "../components/CardProjetos.jsx";
import PromonitorImage from "../assets/promonitor-img.svg";
import AmargemImage from "../assets/amargem.png";
import SigparImage from "../assets/sigpar.png";
import EcotrilhaImage from "../assets/logo-ecotrilha.svg";
import MeetSpaceLogo from "../assets/meetspace-logo.svg";

const Projetos = () => {
  // ✅ Estado para controlar qual card está expandido
  const [expandedIndex, setExpandedIndex] = useState(null);

  // ✅ Função para alternar expansão de um card específico
  const handleToggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const projetos = [
    {
      image: SigparImage,
      title: "SIGPAR",
      description:
        "Sistema institucional desenvolvido para o Instituto Ipê (UFRPE), voltado ao gerenciamento de projetos, planos de trabalho e execução orçamentária.",
      isClickable: false,
      tecnologias: [
        "Next.js",
        "React.js",
        "Tailwind",
        "NestJS",
        "Docker",
        "PostgreSQL",
        "Sequelize",
        "TypeScript",
      ],
    },
    {
      image: AmargemImage,
      title: "À margem",
      description:
        "Website oficial do grupo de teatro hip-hop À margem, destacando sua história e produções artísticas.",
      isClickable: true,
      link: "https://amargem.com.br/",
      tecnologias: ["Next.js", "React.js", "Tailwind", "Prisma", "TypeScript"],
    },
    {
      image: EcotrilhaImage,
      title: "Ecotrilha",
      description:
        "Plataforma web para mapeamento, agendamento e acompanhamento de trilhas ecológicas na Região Metropolitana do Recife.",
      isClickable: true,
      link: "https://github.com/EcoTrilha",
      tecnologias: ["React.js", "Leaflet", "Axios", "Express", "Tailwind"],
    },
    {
      image: PromonitorImage,
      title: "ProMonitor",
      description:
        "Sistema de gerenciamento do Programa de Monitoria da UFRPE, permitindo cadastro de monitores, planos de atividades e geração de relatórios em PDF.",
      isClickable: true,
      link: "https://github.com/HidraCode",
      tecnologias: [
        "React.js",
        "Ant Design",
        "Axios",
        "Node.js",
        "Express",
        "MySQL",
        "Swagger",
      ],
    },
    {
      image: MeetSpaceLogo,
      title: "MeetSpace",
      description:
        "Sistema distribuído para gestão e reserva de salas de reunião corporativas. Arquitetado em microserviços, com autenticação JWT, notificações por e-mail e relatórios de uso.",
      isClickable: true,
      link: "https://github.com/MeetSpaceUFRPE",
      tecnologias: [
        "React.js",
        "Node.js",
        "Express",
        "Docker",
        "PostgreSQL",
        "Axios",
        "Ant Design",
        "TypeScript",
      ],
    },
  ];

  return (
    <section className="flex justify-center items-center bg-[#111111] w-full min-h-screen py-32">
      <div className="flex flex-col justify-center items-center w-full md:w-4/5">
        <h1 className="text-4xl font-bold text-white mb-4">Projetos:</h1>
        <p className="text-gray-500 mb-12 mx-8 text-center">
          Clique em "Saiba mais" e acesse o repositório do projeto no GitHub!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
          {projetos.map((projeto, index) => (
            <CardProjetos
              key={index}
              image={projeto.image}
              title={projeto.title}
              description={projeto.description}
              isClickable={projeto.isClickable}
              link={projeto.link}
              tecnologias={projeto.tecnologias}
              expandido={expandedIndex === index} // ✅ controla qual card abre
              onToggleExpand={() => handleToggleExpand(index)} // ✅ alterna expansão
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projetos;
