import React from "react";
import MatiasPic from '../assets/matias_pic.svg';

const SobreMim = () => {
  return (
    <section className="flex justify-center items-center py-8 md:py-16">
      <div className="flex justify-center items-center bg-[#080808] w-full md:w-4/5 min-h-screen rounded-lg shadow-lg">
        <div className="flex flex-col justify-center items-center px-4 md:px-40">
          <h1 className="text-4xl font-bold text-white mb-10">Sobre Mim:</h1>
          <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-8">
            <div className="flex flex-col w-11/12 h-11/12">
              <h2 className="text-white text-lg text-center md:text-left">
                Olá, sou o <span className="text-[#FB8500] mb-2 font-bold text-2xl">Matias!</span>
              </h2>
              <p className="text-white text-base md:text-lg leading-relaxed text-center md:text-left">
                Sou desenvolvedor Front-end com experiência em <span className="text-[#FB8500]">React.js</span>, <span className="text-[#FB8500]">JavaScript</span>, <span className="text-[#FB8500]">Tailwind</span>, <span className="text-[#FB8500]">Ant Design</span>, e consumo de <span className="text-[#FB8500]">APIs REST</span>. Apaixonado pelo desenvolvimento de componentes reutilizáveis e boas práticas de UI/UX. Estudante de <span className="text-[#FB8500]">Ciência da Computação</span> na <span className="text-[#FB8500]">UFRPE</span>, com experiência em projetos acadêmicos e pessoais, além de participação em equipes que utilizam <span className="text-[#FB8500]">Metodologias Ágeis</span>.
              </p>
            </div>
            <img 
              src={MatiasPic}
              alt="foto do Matias"
              className="rounded-lg w-40 h-40 md:w-60 md:h-60 border-b-8 border-[#FB8500] object-cover bg-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreMim;
