import MatiasPic from "../assets/mattias-pic.webp";
import { HiArrowUpRight } from "react-icons/hi2";
import { useLanguage } from "../context/LanguageContext";

const SobreMim = () => {
  const { t } = useLanguage();
  const interests = t("sobre.interests");
  const timeline = t("sobre.timeline");

  return (
    <section id="sobre-mim" className="flex flex-col justify-center items-center bg-[#0e0e0e] py-20 px-4 w-full">
      <div className="w-full max-w-5xl flex flex-col gap-16">
        
        {/* Header Title */}
        <div className="text-center">
          <h2 className="text-2xl text-white font-light uppercase tracking-wider">
            {t("sobre.title")}
          </h2>
        </div>

        {/* Card Bio & Foto — Minimalista */}
        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 shadow-2xl">
          {/* Foto */}
          <div className="shrink-0 flex justify-center">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full ring-2 ring-[#FB8500]/40 ring-offset-4 ring-offset-[#080808] overflow-hidden bg-[#01161E] transition-transform duration-300 hover:scale-105">
              <img
                src={MatiasPic}
                alt="Lucas Matias"
                width={192}
                height={192}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Conteúdo */}
          <div className="flex flex-col gap-5 flex-1 text-center md:text-left">
            <div className="flex flex-col gap-2">
              <h3 className="text-white font-semibold text-base">
                <span className="block text-xl font-bold">{t("sobre.name")}</span>
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed font-light">
                {t("sobre.bio")}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-xs text-gray-500 uppercase tracking-widest ibm-plex-mono-regular">
                {t("sobre.interestsTitle")}
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {Array.isArray(interests) &&
                  interests.map((item) => (
                    <span
                      key={item}
                      className="flex items-center gap-1.5 text-xs text-[#FB8500] bg-[#FB8500]/10 border border-[#FB8500]/25 px-3.5 py-1 rounded-full font-medium"
                    >
                      <HiArrowUpRight size={11} />
                      {item}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experiência Profissional com Linha do Tempo Contínua */}
        <div className="flex flex-col gap-12 pt-4">
          {/* Título Centralizado com a mesma formatação de SOBRE MIM : */}
          <div className="text-center">
            <h2 className="text-2xl text-white font-light uppercase tracking-wider">
              {t("sobre.timelineTitle")}
            </h2>
          </div>

          {/* Timeline Container com Linha Contínua */}
          <div className="relative flex flex-col gap-12">
            
            {/* LINHA CONTÍNUA DE TEMPO */}
            <div className="absolute left-[15px] md:left-[300px] top-3 bottom-3 w-px bg-gradient-to-b from-[#FB8500] via-white/20 to-white/5 pointer-events-none" />

            {Array.isArray(timeline) &&
              timeline.map((item, index) => {
                const isCurrent = item.period?.includes("ATUALMENTE") || item.period?.includes("PRESENT");
                return (
                  <div
                    key={index}
                    className="relative flex flex-col md:grid md:grid-cols-[270px_60px_1fr] items-start gap-4 md:gap-0 group"
                  >
                    {/* Coluna 1: Cargo, Empresa & Período (Desktop) */}
                    <div className="pl-9 md:pl-0 flex flex-col gap-1 md:text-right md:pr-4 w-full">
                      <h4 className="text-base md:text-lg font-bold text-white leading-snug group-hover:text-[#FB8500] transition-colors duration-200">
                        {item.role}
                      </h4>
                      <p className="text-xs md:text-sm text-gray-400 font-medium">
                        {item.company}
                      </p>
                      <span className="text-[11px] text-[#FB8500]/80 ibm-plex-mono-regular uppercase tracking-wider font-semibold mt-1">
                        {item.period}
                      </span>
                    </div>

                    {/* Coluna 2: Nó Central na Linha Contínua */}
                    <div className="absolute left-0 md:relative md:left-0 top-1.5 md:top-1.5 flex items-center justify-center w-8 md:w-full shrink-0 z-10">
                      <span
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          isCurrent
                            ? "bg-[#FB8500] border-2 border-white shadow-[0_0_12px_rgba(251,133,0,0.9)] scale-110"
                            : "bg-[#0e0e0e] border-2 border-[#FB8500]/60 group-hover:border-[#FB8500] group-hover:bg-[#FB8500] group-hover:scale-110"
                        }`}
                      />
                    </div>

                    {/* Coluna 3: Descrição e Realizações */}
                    <div className="pl-9 md:pl-4 flex flex-col gap-2 w-full">
                      <span className="text-xs text-gray-500 ibm-plex-mono-regular mb-1 block">
                        {item.type}
                      </span>
                      {item.bullets && item.bullets.length > 0 && (
                        <ul className="flex flex-col gap-2 text-xs md:text-sm text-gray-400 leading-relaxed list-disc list-inside marker:text-[#FB8500]">
                          {item.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="leading-relaxed font-light">
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SobreMim;
