import { TIPO_CONFIG } from "../../constants/projetos";
import { useLanguage } from "../../context/LanguageContext";

const ProjectFilters = ({ active, onChange, counts }) => {
  const { language, t } = useLanguage();
  const tipos = Object.keys(TIPO_CONFIG).filter((tipo) => (counts[tipo] ?? 0) > 0);

  return (
    <div className="flex flex-wrap justify-center gap-2">
      <button
        onClick={() => onChange(null)}
        className={`text-xs ibm-plex-mono-regular uppercase tracking-wider px-4 py-1.5 rounded-full border transition-all duration-200 ${
          active === null
            ? "bg-[#FB8500] border-[#FB8500] text-black font-semibold"
            : "bg-transparent text-gray-400 border-white/10 hover:border-white/25 hover:text-white"
        }`}
      >
        {t("projetos.allFilter")}
        <span className="ml-1.5 opacity-60">
          ({counts.__total__ ?? 0})
        </span>
      </button>

      {tipos.map((tipo) => {
        const cfg = TIPO_CONFIG[tipo];
        const isActive = active === tipo;
        const count = counts[tipo] ?? 0;
        const label = language === "en" ? (cfg.label_en || tipo) : tipo;

        return (
          <button
            key={tipo}
            onClick={() => onChange(isActive ? null : tipo)}
            className={`text-xs ibm-plex-mono-regular uppercase tracking-wider px-4 py-1.5 rounded-full border transition-all duration-200 ${
              isActive
                ? "text-black font-semibold"
                : "bg-transparent text-gray-400 border-white/10 hover:border-white/25 hover:text-white"
            }`}
            style={
              isActive
                ? { background: cfg.color, borderColor: cfg.color }
                : {}
            }
          >
            {label}
            <span className="ml-1.5 opacity-60">({count})</span>
          </button>
        );
      })}
    </div>
  );
};

export default ProjectFilters;
