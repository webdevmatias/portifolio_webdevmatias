import React from "react";
import MatiasPic from "../assets/matias-pic.png";

const SobreMim = () => {
  return (
    <section className="flex justify-center items-center bg-[#111111] py-8 md:py-16 w-full">
      <div className="flex justify-center items-center md:w-4/5 min-h-screen rounded-lg">
        <div className="flex flex-col justify-center items-center px-4 md:px-40">
          <h1 className="text-4xl font-bold text-white mb-10">Sobre Mim:</h1>

          {/* Card principal */}
          <div className="flex flex-col-reverse md:flex-row bg-transparent md:bg-[#01161E] px-8 py-4 rounded-lg justify-center items-center gap-8">
            
            {/* Texto */}
            <div className="flex flex-col w-full h-11/12">
              <p className="text-white text-base md:text-md leading-relaxed text-center md:text-left">
                Sou <span className="text-[#FB8500]">Lucas Mattias</span>, estudante de Ciência da Computação na 
                UFRPE. Gosto de transformar ideias em aplicações web com foco em 
                desempenho, clareza e boas práticas de desenvolvimento.
              </p>

              <p className="text-white text-base md:text-md leading-relaxed text-center md:text-left mt-4">
                Trabalho com{" "}
                <span className="text-[#FB8500]">React.js</span>,{" "}
                <span className="text-[#FB8500]">Next.js</span> e{" "}
                <span className="text-[#FB8500]">TailwindCSS</span> no front-end, e{" "}
                <span className="text-[#FB8500]">NestJS</span> e{" "}
                <span className="text-[#FB8500]">Express</span> no back-end, 
                conectando bancos como{" "}
                <span className="text-[#FB8500]">PostgreSQL</span> e{" "}
                <span className="text-[#FB8500]">MySQL</span>.
              </p>

              <p className="text-white text-base md:text-md leading-relaxed text-center md:text-left mt-4">
                Tenho interesse em{" "}
                <span className="text-[#FB8500]">arquitetura de software</span> e{" "}
                <span className="text-[#FB8500]">design de interfaces</span>, 
                buscando sempre criar soluções simples, bonitas e funcionais.
              </p>
            </div>

            {/* Foto */}
            <img
              src={MatiasPic}
              alt="foto do Matias"
              className="rounded-full w-40 h-40 md:w-60 md:h-60 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreMim;
