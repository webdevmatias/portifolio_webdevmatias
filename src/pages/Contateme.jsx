import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa"; 
import CardContato from "../components/CardContato";

const Contateme = () => {
  const contatos = [
    {
      icon: <FaGithub size={40} />,
      label: "GitHub",
      description: "Acesse meu perfil no GitHub.",
      link: "https://github.com/seu-perfil",
    },
    {
      icon: <FaLinkedin size={40} />,
      label: "LinkedIn",
      description: "Conecte-se comigo no LinkedIn.",
      link: "https://linkedin.com/in/seu-perfil",
    },
    {
      icon: <FaInstagram size={40} />,
      label: "Instagram",
      description: "Siga-me no Instagram.",
      link: "https://instagram.com/seu-perfil",
    },
    {
      icon: <FaEnvelope size={40} />,
      label: "Email",
      description: "Envie-me um email.",
      link: "mailto:seu-email@example.com",
    },
  ];

  return (
    <section className="flex justify-center items-center bg-[#080808] w-full min-h-screen py-8">
      <div className="flex flex-col justify-center items-center w-full md:w-4/5">
        <h1 className="text-4xl font-bold text-white mb-6">Contate-me:</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
          {contatos.map((contato, index) => (
            <CardContato
              key={index}
              icon={contato.icon}
              label={contato.label}
              description={contato.description}
              link={contato.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contateme;
