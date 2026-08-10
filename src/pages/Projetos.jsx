import { useState, useMemo } from "react";
import { PROJETOS } from "../data/projetos";
import { HiChevronDown } from "react-icons/hi2";
import ProjectCard from "../components/projetos/ProjectCard";
import ProjectFilters from "../components/projetos/ProjectFilters";
import { useLanguage } from "../context/LanguageContext";
import { TIPO_CONFIG } from "../constants/projetos";

const INITIAL = 3;
const STEP = 3;

const Projetos = () => {
  const [activeFilter, setActiveFilter] = useState(null);
  const [visible, setVisible] = useState(INITIAL);
  const { language, t } = useLanguage();

  // Count per tipo + total
  const counts = useMemo(() => {
    const c = { __total__: PROJETOS.length };
    for (const p of PROJETOS) {
      c[p.tipo] = (c[p.tipo] || 0) + 1;
    }
    return c;
  }, []);

  // Filtered list
  const filtered = useMemo(
    () =>
      activeFilter
        ? PROJETOS.filter((p) => p.tipo === activeFilter)
        : PROJETOS,
    [activeFilter]
  );

  const shown = filtered.slice(0, visible);
  const hasMore = visible < filtered.length;

  const handleFilter = (tipo) => {
    setActiveFilter(tipo);
    setVisible(INITIAL);
  };

  const activeFilterLabel = activeFilter
    ? (language === "en" ? (TIPO_CONFIG[activeFilter]?.label_en || activeFilter) : activeFilter)
    : "";

  return (
    <section id="projetos" className="flex justify-center bg-[#0e0e0e] w-full min-h-screen py-28 px-4">
      <div className="w-full max-w-5xl flex flex-col gap-10">

        {/* Header */}
        <div className="text-center flex flex-col gap-2">
          <h2 className="text-2xl text-white uppercase font-light">
            {t("projetos.title")}
          </h2>
          <p className="text-gray-500 text-sm">
            {t("projetos.subtitle")}
          </p>
        </div>

        {/* Filters */}
        <ProjectFilters
          active={activeFilter}
          onChange={handleFilter}
          counts={counts}
        />

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {shown.map((projeto, i) => (
            <div
              key={projeto.slug}
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: `${i * 80}ms`, animationFillMode: "forwards" }}
            >
              <ProjectCard projeto={projeto} index={i} />
            </div>
          ))}
        </div>

        {/* Load more / collapse */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-gray-600 ibm-plex-mono-regular">
            {t("projetos.showingLabel")} {shown.length} {t("projetos.ofLabel")} {filtered.length}
            {activeFilter ? ` ${t("projetos.inLabel")} "${activeFilterLabel}"` : ""}
          </span>

          {hasMore ? (
            <button
              onClick={() => setVisible((v) => v + STEP)}
              className="flex items-center gap-2 border border-white/10 hover:border-[#FB8500]/40 text-gray-400 hover:text-white text-sm px-6 py-2.5 rounded-xl transition-all duration-200 bg-white/[0.02] hover:bg-white/[0.04]"
            >
              <HiChevronDown size={15} />
              {t("projetos.verMais")}
            </button>
          ) : filtered.length > INITIAL ? (
            <button
              onClick={() => setVisible(INITIAL)}
              className="flex items-center gap-2 border border-white/10 hover:border-white/20 text-gray-600 hover:text-gray-400 text-sm px-6 py-2.5 rounded-xl transition-all duration-200 bg-white/[0.02]"
            >
              <HiChevronDown size={15} className="rotate-180" />
              {t("projetos.ocultar")}
            </button>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Projetos;
