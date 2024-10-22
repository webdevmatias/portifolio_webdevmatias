import React from "react";

const CardProjetos = ({ image, title, description }) => {
  return (
    <div 
      className="relative flex flex-col justify-between bg-[#1e1e1e] rounded-md shadow-md border-b-4 mb-6"
      style={{ borderColor: '#FB8500' }}
    >
      <img src={image} alt={title} className="rounded-t-md h-40 w-full object-cover" />
      <div className="p-4">
        <h2 className="text-xl text-white font-semibold mb-2">{title}</h2>
        <p className="text-gray-300 mb-4">{description}</p>
        <button className="absolute top-2 right-2 bg-[#FB8500] text-white px-2 py-1 rounded-md">
          Saiba mais
        </button>
      </div>
    </div>
  );
};

export default CardProjetos;
