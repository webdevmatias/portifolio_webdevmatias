import React from "react";
import { FaReact, FaJs, FaCss3Alt, FaGitAlt } from 'react-icons/fa'; 
import { SiTailwindcss, SiAntdesign, SiMysql, SiPostman, SiNodedotjs, SiExpress, SiGithub, SiVite, SiFigma } from 'react-icons/si'; // Importando ícones
import { MdDesignServices } from 'react-icons/md'; 

const technologies = [
  { icon: <FaReact size={40} />, label: "React.js" },
  { icon: <FaJs size={40} />, label: "JavaScript" },
  { icon: <FaCss3Alt size={40} />, label: "CSS" },
  { icon: <FaGitAlt size={40} />, label: "Git" },
  { icon: <SiTailwindcss size={40} />, label: "Tailwind" },
  { icon: <SiAntdesign size={40} />, label: "Ant Design" },
  { icon: <SiMysql size={40} />, label: "MySQL" },
  { icon: <SiPostman size={40} />, label: "Postman" },
  { icon: <SiNodedotjs size={40} />, label: "Node.js" },
  { icon: <SiExpress size={40} />, label: "Express" },
  { icon: <SiGithub size={40} />, label: "GitHub" },
  { icon: <SiVite size={40} />, label: "Vite" },
  { icon: <MdDesignServices size={40} />, label: "UI/UX" },
  { icon: <SiFigma size={40} />, label: "Figma" },
];

const CardHabilidades = ({ icon, label }) => {
  return (
    <div 
      className={`flex flex-col justify-center items-center px-4 py-2 my-2 border-b-4 rounded-md shadow-md bg-[#090909]`}
      style={{
        borderColor: '#FB8500',  //  cor da borda
        color: '#FB8500',        //  cor do texto
        width: '120px',          //  largura fixa
        height: '100px',         // altura fixa
      }}
    >
      {icon}
      <span className="text-sm md:text-base mt-1">{label}</span>
    </div>
  );
};

const Habilidades = () => {
  return (
    <section className="flex justify-center items-center">
      <div className="flex justify-center items-center bg-black w-full md:w-4/5 min-h-screen">
        <div className="flex flex-col justify-center items-center px-4 md:px-16">
          <h1 className="text-4xl text-white font-bold mb-12">Habilidades:</h1>
          <div className="flex flex-wrap justify-center gap-2">
            {technologies.map((tech, index) => (
              <CardHabilidades key={index} icon={tech.icon} label={tech.label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Habilidades;
