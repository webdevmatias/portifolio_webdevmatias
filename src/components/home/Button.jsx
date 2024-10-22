// Button.js
import React from "react";

const Button = ({ icon, label, clickable = true, color = "#FB8500", link = "#" }) => {
  const buttonContent = (
    <div 
      className={`flex flex-row gap-2 justify-center items-center px-4 py-1 my-2 border rounded-md shadow-md transition-colors ${clickable ? 'cursor-pointer' : 'cursor-default'}`}
      style={{
        borderColor: color,    // Borda na cor personalizada
        color: color,          // Texto e ícone na cor personalizada
        opacity: clickable ? 1 : 0.8, // Menor opacidade para não-clicáveis
      }}
    >
      {icon}
      <span className="text-sm md:text-base">{label}</span>
    </div>
  );

  return clickable ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {buttonContent}
    </a>
  ) : (
    buttonContent
  );
};

export default Button;
