import React from "react";

const CardContato = ({ icon, label, description, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center p-4 border-b-4 rounded-md shadow-md transition-transform transform hover:scale-105"
      style={{ backgroundColor: "#1E1E1E", borderColor: "#FB8500" }}
    >
      <div className="text-[#FB8500] mb-2">
        {icon}
      </div>
      <span className="text-white text-lg font-bold text-center">{label}</span>
      <p className="text-sm text-gray-400 text-center mt-1">{description}</p>
    </a>
  );
};

export default CardContato;
