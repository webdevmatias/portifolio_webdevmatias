import React from "react";
import MatiasPic from "../assets/matias_pic.svg";

const SobreMim = () => {
  return (
    <section className="flex justify-center items-center bg-[#111111] py-8 md:py-16 w-full min-h-screenl">
      <div className="flex justify-center items-center md:w-4/5 min-h-screen rounded-lg shadow-lg">
        <div className="flex flex-col justify-center items-center px-4 md:px-40">
          <h1 className="text-4xl font-bold text-white mb-10">Sobre Mim:</h1>
          <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-8">
            <div className="flex flex-col w-full h-11/12">
              <h2 className="text-white text-lg text-center md:text-left">
                Olá, sou o{" "}
                <span className="text-[#FB8500] mb-2 font-semibold text-2xl">
                  Matias!
                </span>
              </h2>
              <p className="text-white text-base md:text-lg leading-relaxed text-center md:text-left">
                Sou desenvolvedor{" "}
                <span className="text-[#FB8500]">Fullstack</span> com
                experiência em <span className="text-[#FB8500]">React.js</span>,{" "}
                <span className="text-[#FB8500]">Next.js</span>,{" "}
                <span className="text-[#FB8500]">TypeScript</span>,{" "}
                <span className="text-[#FB8500]">TailwindCSS</span> e{" "}
                <span className="text-[#FB8500]">Ant Design</span>. No back-end,
                trabalho com <span className="text-[#FB8500]">NestJS</span>,{" "}
                <span className="text-[#FB8500]">Express.js</span>,{" "}
                <span className="text-[#FB8500]">Sequelize</span> e{" "}
                <span className="text-[#FB8500]">Redis</span>, desenvolvendo e
                consumindo <span className="text-[#FB8500]">APIs REST</span>.
                Tenho experiência com{" "}
                <span className="text-[#FB8500]">PostgreSQL</span> e{" "}
                <span className="text-[#FB8500]">MySQL</span>, além de boas
                práticas de <span className="text-[#FB8500]">UI/UX</span> e{" "}
                <span className="text-[#FB8500]">arquitetura escalável</span>.
                Estudante de{" "}
                <span className="text-[#FB8500]">Ciência da Computação</span> na{" "}
                <span className="text-[#FB8500]">UFRPE</span>, atuo em projetos
                acadêmicos e pessoais, seguindo{" "}
                <span className="text-[#FB8500]">Metodologias Ágeis</span>.
                Sempre buscando aprimorar minhas habilidades e desenvolver
                soluções eficientes.
              </p>
            </div>
            <img
              src={MatiasPic}
              alt="foto do Matias"
              className="rounded-lg w-40 h-40 md:w-60 md:h-60 border-b-8 border-[#FB8500] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreMim;
