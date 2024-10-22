import React from "react";
import CardProjetos from "../components/CardProjetos.jsx";
import PromonitorImage from "../assets/promonitor-img.svg";

const Projetos = () => {
  const projetos = [
    {
      image: PromonitorImage,
      title: "Promonitor",
      description: "Um sistema de monitoria para universidades, que facilita a interação entre estudantes e monitores.",
      isClickable: true, 
      link: "https://github.com/HidraCode",
    },
    {
      image: "https://via.placeholder.com/400x200",
      title: "Projeto 2",
      description: "Em produção.",
      isClickable: false, 
      link: "#",
    },
    {
      image: "https://via.placeholder.com/400x200",
      title: "Projeto 3",
      description: "Em produção.",
      isClickable: false,
      link: "#",
    },
    {
      image: "https://via.placeholder.com/400x200",
      title: "Projeto 4",
      description: "Em produção.",
      isClickable: false,
      link: "#",
    },
    {
      image: "https://via.placeholder.com/400x200",
      title: "Projeto 5",
      description: "Em produção.",
      isClickable: false,
      link: "#",
    },
    {
      image: "https://via.placeholder.com/400x200",
      title: "Projeto 6",
      description: "Em produção.",
      isClickable: false,
      link: "#",
    },
    {
      image: "https://via.placeholder.com/400x200",
      title: "Projeto 7",
      description: "Em produção.",
      isClickable: false,
      link: "#",
    },
    {
      image: "https://via.placeholder.com/400x200", 
      title: "Projeto 8",
      description: "Em produção.",
      isClickable: false,
      link: "#",
    },
  ];

  return (
    <section className="flex justify-center items-center bg-[#080808] w-full min-h-screen py-32">
      <div className="flex flex-col justify-center items-center w-full md:w-4/5">
        <h1 className="text-4xl font-bold text-white mb-4">Projetos:</h1>
        <p className="text-gray-500 mb-12 mx-8 text-center">Clique em "saiba mais" e acesse o repositório do projeto no Github!</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
          {projetos.map((projeto, index) => (
            <CardProjetos 
              key={index} 
              image={projeto.image} 
              title={projeto.title} 
              description={projeto.description} 
              isClickable={projeto.isClickable}
              link={projeto.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projetos;
