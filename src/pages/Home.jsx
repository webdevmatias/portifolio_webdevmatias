import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Button from "../components/home/Button.jsx";
import MatiasPic from "../assets/matias-pic.png";
import Particles from "../components/home/Particles";

const Home = () => {
  return (
    <section className="relative flex justify-center items-center min-h-screen bg-[#080808] overflow-hidden">
      {/* Fundo de partículas ocupando toda a seção */}
      <div className="absolute inset-0 w-full h-full">
        <Particles
          className="absolute inset-0"          // <- ocupa toda a seção
          particleColors={["#FB8500", "#FB8500"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          sizeRandomness={1}
          moveParticlesOnHover={false}           // se quiser interagir com o mouse
          particleHoverFactor={1}
          alphaParticles={false}
          cameraDistance={20}
          disableRotation={false}
        />
      </div>

      {/* Conteúdo em cima do fundo */}
      <div className="relative z-10 flex flex-col md:flex-row gap-6 justify-center items-center max-w-screen px-6 py-8">
        {/* Imagem */}
        <div className="w-[220px] flex justify-center py-2">
          <img
            src={MatiasPic}
            alt="Foto do Matias"
            className="rounded-full"
          />
        </div>

        {/* Texto */}
        <div className="flex flex-col text-white text-center md:text-left">
          <h1 className="ibm-font text-5xl md:text-6xl lg:text-7xl font-bold text-[#FB8500] m-0 leading-none">
            MATIAS!
          </h1>
          <h2 className="ibm-plex-mono-regular text-sm md:text-base lg:text-lg m-0 leading-none">
            Desenvolvedor Full Stack
          </h2>

          <div className="flex flex-col md:flex-row justify-center md:justify-start gap-2">
            <Button
              icon={<FaLinkedin size={20} />}
              label="LinkedIn"
              clickable
              color="#FB8500"
              link="https://www.linkedin.com/in/matiaz/"
            />
            <Button
              icon={<FaGithub size={20} />}
              label="GitHub"
              clickable
              color="#FB8500"
              link="https://github.com/webdevmatias"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
