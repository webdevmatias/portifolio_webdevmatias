import { useNavigate } from "react-router-dom";
import { HiArrowUpRight, HiCpuChip } from "react-icons/hi2";
import { TIPO_CONFIG } from "../../constants/projetos";
import { useLanguage } from "../../context/LanguageContext";

const TECH_VISIBLE = 4;

const ProjectCard = ({ projeto, index = 0 }) => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const tipo = TIPO_CONFIG[projeto.tipo] || {};
  const visibleTechs = projeto.tecnologias.slice(0, TECH_VISIBLE);
  const remaining = projeto.tecnologias.length - TECH_VISIBLE;

  const tipoLabel = language === "en" ? (projeto.tipo_en || projeto.tipo) : projeto.tipo;
  const summaryText = language === "en" ? (projeto.summary_en || projeto.summary) : projeto.summary;
  const archText = language === "en" ? (projeto.arch_en || projeto.arch) : projeto.arch;

  return (
    <article
      onClick={() => navigate(`/projetos/${projeto.slug}`)}
      className="group cursor-pointer flex flex-col bg-white/[0.03] border border-white/5 rounded-2xl overflow-hidden hover:border-[#FB8500]/35 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(251,133,0,0.07)] h-full"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Image — HD 16:9 */}
      <div className="w-full aspect-video bg-white/[0.02] border-b border-white/5 flex items-center justify-center overflow-hidden shrink-0">
        <img
          src={projeto.image}
          alt={projeto.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover opacity-75 group-hover:opacity-100 transition-all duration-300 group-hover:scale-[1.03]"
        />
      </div>

      {/* Body */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-white font-semibold text-base leading-snug">
            {projeto.title}
          </h3>
          <span className={`text-[10px] px-2 py-0.5 rounded-full border shrink-0 mt-0.5 font-medium ${tipo.badge}`}>
            {tipoLabel}
          </span>
        </div>

        <p className="text-xs text-gray-500 leading-relaxed line-clamp-3 flex-1">
          {summaryText}
        </p>

        <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-white/5">
          {visibleTechs.map(({ label, Icon }) => (
            <span
              key={label}
              title={label}
              className="flex items-center gap-1 text-[10px] text-[#FB8500]/80 bg-[#FB8500]/8 border border-[#FB8500]/15 px-2 py-0.5 rounded-full font-medium ibm-plex-mono-regular"
            >
              <Icon size={9} />
              {label}
            </span>
          ))}
          {remaining > 0 && (
            <span className="text-[10px] text-gray-600 ibm-plex-mono-regular">+{remaining}</span>
          )}
        </div>
      </div>

      {/* Arch footer */}
      {archText && (
        <div className="px-5 py-3 border-t border-white/5 flex items-center gap-2 bg-white/[0.015]">
          <HiCpuChip size={11} className="text-[#FB8500]/50 shrink-0" />
          <span className="text-[10px] text-gray-600 ibm-plex-mono-regular truncate flex-1">
            {archText}
          </span>
          <HiArrowUpRight
            size={12}
            className="text-gray-700 group-hover:text-[#FB8500] transition-colors duration-200 shrink-0"
          />
        </div>
      )}
    </article>
  );
};

export default ProjectCard;
