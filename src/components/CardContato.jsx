import React from 'react';

const CardContato = ({ icon, label, link, description }) => {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="flex flex-col justify-center items-center px-4 py-2 my-2 border-b-4 rounded-md shadow-md transition-colors bg-[#090909] hover:bg-[#212121]"
      style={{
        borderColor: '#FB8500',
        color: '#FB8500',
        width: '160px', // Aumenta o tamanho dos cards para mobile
        height: '160px', // Aumenta o tamanho dos cards para mobile
      }}
    >
      {icon}
      <span className="text-sm md:text-base mt-1">{label}</span>
      <span className="text-xs mt-1">{description}</span>
    </a>
  );
};

export default CardContato;
