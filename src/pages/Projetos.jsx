import React from "react";
import CardProjetos from "../components/CardProjetos.jsx";

const Projetos = () => {
  const projetos = [
    {
      image: "https://via.placeholder.com/400x200",
      title: "Projeto 1",
      description: "Descrição do projeto 1.",
    },
    {
      image: "https://via.placeholder.com/400x200",
      title: "Projeto 2",
      description: "Descrição do projeto 2.",
    },
    {
      image: "https://via.placeholder.com/400x200",
      title: "Projeto 3",
      description: "Descrição do projeto 3.",
    },
    {
      image: "https://via.placeholder.com/400x200",
      title: "Projeto 4",
      description: "Em produção.",
    },
    {
      image: "https://via.placeholder.com/400x200",
      title: "Projeto 5",
      description: "Em produção.",
    },
    {
      image: "https://via.placeholder.com/400x200",
      title: "Projeto 6",
      description: "Em produção.",
    },
    {
      image: "https://via.placeholder.com/400x200",
      title: "Projeto 7",
      description: "Em produção.",
    },
    {
      image: "https://via.placeholder.com/400x200", 
      title: "Projeto 8",
      description: "Em produção.",
    },
  ];

  return (
    <section className="flex justify-center items-center bg-[#080808] w-full min-h-screen py-8">
      <div className="flex flex-col justify-center items-center w-full md:w-4/5">
        <h1 className="text-4xl font-bold text-white mb-6">Projetos:</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
          {projetos.map((projeto, index) => (
            <CardProjetos 
              key={index} 
              image={projeto.image} 
              title={projeto.title} 
              description={projeto.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projetos;
