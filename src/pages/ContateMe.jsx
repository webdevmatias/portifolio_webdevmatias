import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { Modal } from 'antd';
import CardContato from '../components/CardContato.jsx';

const contacts = [
  {
    icon: <FaGithub size={40} />,
    label: "GitHub",
    link: "https://github.com/webdevmatias",
    description: "webdevmatias"
  },
  {
    icon: <FaLinkedin size={40} />,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/matiaz/",
    description: "matiaz"
  },
  {
    icon: <FaInstagram size={40} />,
    label: "Instagram",
    link: "https://www.instagram.com/omattiaz/",
    description: "@omattiaz"
  },
  {
    icon: <FaEnvelope size={40} />,
    label: "Email",
    link: "mailto:lucas.matias@ufrpe.br",
    description: "lucas.matias@ufrpe.br"
  },
];

const ContateMe = () => {
  const handleCardClick = (link) => {
    Modal.confirm({
      title: 'Confirmação',
      content: `Você realmente deseja visitar o ${link}?`,
      okText: 'Sim',
      cancelText: 'Não',
      onOk: () => {
        // Redireciona para o link se o usuário clicar em "Ok"
        window.open(link, '_blank');
      },
    });
  };

  return (
    <section className="flex justify-center items-center bg-[#080808] w-full min-h-screen py-8">
      <div className="flex flex-col justify-center items-center w-full md:w-4/5">
        <h1 className="text-4xl font-bold text-white mb-6">Contate-me:</h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
          {contacts.map((contact, index) => (
            <div key={index} onClick={() => handleCardClick(contact.link)}>
              <CardContato 
                icon={contact.icon} 
                label={contact.label} 
                description={contact.description} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContateMe;
