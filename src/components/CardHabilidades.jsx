import React from "react";

const CardHabilidades = ({ icon, label, color = "#FB8500" }) => {
  return (
    <div 
      className={`flex flex-col justify-center items-center px-4 py-2 my-2 border-b-4 rounded-md shadow-md transition-colors`}
      style={{
        backgroundColor: "#598392", // Cor de fundo fixa
        borderColor: color,          // Borda na cor personalizada
        color: color,                // Texto e ícone na cor personalizada
      }}
    >
      {icon}
      <span className="text-sm md:text-base mt-1">{label}</span>
    </div>
  );
};

export default CardHabilidades;
