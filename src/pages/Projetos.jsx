import React from "react";
import CardProjetos from "../components/CardProjetos.jsx";
import PromonitorImage from "../assets/promonitor-img.svg";
import AmargemImage from "../assets/amargem.png";
import SigparImage from "../assets/sigpar.png";
import EcotrilhaImage from "../assets/logo-ecotrilha.svg";
import MeetSpaceLogo from "../assets/meetspace-logo.svg";
import StooreImage from "../assets/stoore-logo.svg";

const Projetos = () => {
  const projetos = [
    {
      image: SigparImage,
      title: "Sigpar",
      description: "Sistema de gerenciamento de projetos e planos de trabalho para o instituto Ipê UFRPE.",
      isClickable: false,
    },
    {
      image: AmargemImage,
      title: "Amargem",
      description: "Portifolio do primeiro grupo de teatro hip-hop de Pernambuco.",
      isClickable: true,
      link: "https://amargem.com.br/",
    },
    {
      image: EcotrilhaImage,
      title: "Ecotrilha",
      description: "Plataforma de para a realização de trilhas na Região Metropolitana do Recife.",
      isClickable: true,
      link: "https://github.com/EcoTrilha",
    },
    {
      image: PromonitorImage,
      title: "Promonitor",
      description: "Plataforma de gerenciamento do progama de monitoria da UFRPE.",
      isClickable: true, 
      link: "https://github.com/HidraCode",
    },
    {
      image: MeetSpaceLogo,
      title: "MeetSpace",
      description: "Sistema distribuido de agendamento de salas de reunião.",
      isClickable: true,
      link: "https://github.com/MeetSpaceUFRPE",
    },
    {
      image: StooreImage,
      title: "Stoore",
      description: "E-comerce de eletronicos feito com ReactJs.",
      isClickable: true,
      link: "https://github.com/webdevmatias/stoore",
    }
  ];

  return (
    <section className="flex justify-center items-center bg-[#111111] w-full min-h-screen py-32">
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
