// Button.js
import React from "react";

const Button = ({ icon, label }) => {
  return (
    <div 
      className="flex flex-row gap-2 items-center px-4 py-2 my-2 border border-[#FB8500] text-[#FB8500] rounded-lg shadow-md transition-colors"
    >
      {icon}
      <span className="text-sm md:text-base">{label}</span>
    </div>
  );
};

export default Button;
