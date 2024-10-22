import React from "react";

const CardProjetos = ({ image, title, description, isClickable, link }) => {
  return (
    <div 
      className="relative flex flex-col bg-[#1e1e1e] rounded-md shadow-md border-b-4 mb-6 mx-4 md:mx-0"
      style={{ borderColor: '#FB8500', height: '300px' }} // Altura fixa do card
    >
      <img src={image} alt={title} className="rounded-t-md h-40 w-full object-cover" />
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-xl text-white font-semibold mb-2">{title}</h2>
        <p className="text-gray-300 flex-grow mb-4 overflow-hidden text-ellipsis">
          <span className="whitespace-normal break-words">{description}</span>
        </p>
        <button 
          className={`absolute top-2 right-2 bg-[#FB8500] text-white px-2 py-1 rounded-md ${isClickable ? '' : 'cursor-not-allowed opacity-50'}`}
          onClick={isClickable ? () => window.open(link, "_blank") : null}
          disabled={!isClickable} // Desativa o botão se não for clicável
        >
          Saiba mais
        </button>
      </div>
    </div>
  );
};

export default CardProjetos;
