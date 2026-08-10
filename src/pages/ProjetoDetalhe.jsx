import { useParams, useNavigate } from "react-router-dom";
import { PROJETOS } from "../data/projetos";
import {
  HiArrowLeft,
  HiArrowTopRightOnSquare,
  HiChevronRight,
} from "react-icons/hi2";

import { TIPO_CONFIG } from "../constants/projetos";
import ArchBlock from "../components/projetos/ArchBlock";
import TechStack from "../components/projetos/TechStack";

const ProjetoDetalhe = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const projeto = PROJETOS.find((p) => p.slug === slug);
  const tipo = TIPO_CONFIG[projeto?.tipo] || {};
  const suggestions = PROJETOS.filter((p) => p.slug !== slug).slice(0, 3);

  if (!projeto) {
    return (
      <section className="flex justify-center items-center bg-[#080808] min-h-screen px-4">
        <div className="text-center flex flex-col gap-3">
          <p className="text-gray-500 text-sm">Projeto não encontrado.</p>
          <button
            onClick={() => navigate("/projetos")}
            className="text-[#FB8500] text-sm underline"
          >
            Voltar para projetos
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="flex justify-center bg-[#080808] w-full min-h-screen px-4 py-28">
      <div className="w-full max-w-5xl flex flex-col gap-6">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <button
            onClick={() => navigate("/projetos")}
            className="hover:text-gray-400 transition-colors flex items-center gap-1.5 ibm-plex-mono-regular"
          >
            <HiArrowLeft size={11} />
            Projetos
          </button>
          <span className="text-gray-700">/</span>
          <span className="text-gray-400 truncate max-w-[200px] ibm-plex-mono-regular">
            {projeto.title}
          </span>
        </div>

        {/* Layout principal */}
        <div className="flex flex-col lg:flex-row gap-6 items-start">

          {/* ── Coluna esquerda ── */}
          <div className="flex flex-col gap-5 flex-1 min-w-0">

            {/* Título + badge */}
            <div>
              <div className="flex items-start gap-3 flex-wrap">
                <h1 className="text-2xl md:text-3xl font-bold text-white leading-tight tracking-tight">
                  {projeto.title}
                </h1>
                <span
                  className={`text-xs px-2.5 py-1 rounded-full border font-medium mt-1 shrink-0 ${tipo.badge}`}
                >
                  {projeto.tipo}
                </span>
              </div>
              <div
                className="mt-3 h-px w-full"
                style={{
                  background:
                    "linear-gradient(to right, rgba(251,133,0,0.35), transparent)",
                }}
              />
            </div>

            {/* Hero image — HD 16:9 */}
            <div
              className="w-full rounded-xl border border-white/5 overflow-hidden"
              style={{
                background: `radial-gradient(ellipse at 60% 40%, ${
                  tipo.glow || "rgba(251,133,0,0.06)"
                }, transparent 70%), #0c0c0c`,
              }}
            >
              <div className="w-full aspect-video flex items-center justify-center p-4">
                <img
                  src={projeto.image}
                  alt={projeto.title}
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Descrição */}
            <p className="text-sm text-gray-400 leading-relaxed">
              {projeto.description}
            </p>

            {/* ★ Bloco Arquitetural */}
            <ArchBlock arch={projeto.arch} archDetails={projeto.archDetails} />

            {/* Stack por camada */}
            <TechStack tecnologias={projeto.tecnologias} />

            {/* CTA mobile (abaixo de lg) */}
            <div className="flex flex-col gap-2 lg:hidden">
              {projeto.isClickable && projeto.link ? (
                <a
                  href={projeto.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#FB8500] hover:bg-[#e07800] active:scale-95 text-black font-semibold text-sm rounded-xl py-3 transition-all duration-200"
                >
                  <HiArrowTopRightOnSquare size={15} />
                  {projeto.link.includes("github.com") ? "Ver no GitHub" : "Acessar Aplicação"}
                </a>
              ) : (
                <div className="flex items-center justify-center w-full bg-white/5 border border-white/5 text-gray-600 text-sm rounded-xl py-3 cursor-not-allowed select-none">
                  Repositório privado
                </div>
              )}

              <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3">
                <span className={`text-xs font-medium ibm-plex-mono-regular ${tipo.text}`}>
                  {projeto.tipo}
                </span>
                <div className="w-px h-3 bg-white/10" />
                <span className="text-xs text-gray-500 ibm-plex-mono-regular">
                  {projeto.tecnologias?.length || 0} tecnologias
                </span>
                <div className="w-px h-3 bg-white/10" />
                <span className="text-xs text-gray-500 ibm-plex-mono-regular">
                  {projeto.isClickable ? "Público" : "Privado"}
                </span>
              </div>
            </div>
          </div>

          {/* ── Sidebar (lg+) ── */}
          <div className="hidden lg:flex flex-col gap-3 w-64 shrink-0">

            {/* CTA */}
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 flex flex-col gap-3">
              {projeto.isClickable && projeto.link ? (
                <a
                  href={projeto.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#FB8500] hover:bg-[#e07800] active:scale-95 text-black font-semibold text-sm rounded-lg py-2.5 transition-all duration-200"
                >
                  <HiArrowTopRightOnSquare size={14} />
                  {projeto.link.includes("github.com") ? "Ver no GitHub" : "Acessar Aplicação"}
                </a>
              ) : (
                <div className="flex items-center justify-center w-full bg-white/5 border border-white/5 text-gray-600 text-sm rounded-lg py-2.5 cursor-not-allowed select-none">
                  Repositório privado
                </div>
              )}

              <button
                onClick={() => navigate("/projetos")}
                className="flex items-center justify-center gap-1.5 w-full text-gray-500 hover:text-gray-300 text-xs py-1.5 transition-colors ibm-plex-mono-regular"
              >
                <HiArrowLeft size={11} />
                Todos os projetos
              </button>
            </div>

            {/* Info */}
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 flex flex-col gap-3">
              {[
                { label: "Categoria", value: projeto.tipo, cls: tipo.text },
                {
                  label: "Stack",
                  value: `${projeto.tecnologias?.length || 0} tecnologias`,
                  cls: "text-gray-400",
                },
                {
                  label: "Acesso",
                  value: projeto.isClickable ? "Público" : "Privado",
                  cls: projeto.isClickable ? "text-green-400" : "text-gray-500",
                },
              ].map(({ label, value, cls }, i, arr) => (
                <div key={label}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-600 ibm-plex-mono-regular">
                      {label}
                    </span>
                    <span className={`text-xs font-medium ibm-plex-mono-regular ${cls}`}>
                      {value}
                    </span>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="h-px bg-white/5 mt-3" />
                  )}
                </div>
              ))}
            </div>

            {/* Arch resumo (sidebar) */}
            {projeto.arch && (
              <div className="rounded-xl border border-[#FB8500]/15 bg-[#FB8500]/[0.03] p-4">
                <p className="text-[10px] uppercase tracking-widest text-[#FB8500]/50 ibm-plex-mono-regular mb-2">
                  Arquitetura
                </p>
                <p className="text-xs text-white/70 ibm-plex-mono-regular leading-relaxed">
                  {projeto.arch}
                </p>
              </div>
            )}

            {/* Outros projetos */}
            {suggestions.length > 0 && (
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-widest text-gray-600 mb-2 ibm-plex-mono-regular">
                  Outros projetos
                </span>
                {suggestions.map((p) => {
                  const t = TIPO_CONFIG[p.tipo] || {};
                  return (
                    <button
                      key={p.slug}
                      onClick={() => navigate(`/projetos/${p.slug}`)}
                      className="group flex items-center gap-2.5 w-full text-left rounded-lg p-2 hover:bg-white/[0.03] transition-colors"
                    >
                      <div className="w-8 h-8 rounded-md overflow-hidden shrink-0 bg-white/5">
                        <img
                          src={p.image}
                          alt={p.title}
                          width={32}
                          height={32}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                        />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-xs text-white font-medium truncate">
                          {p.title}
                        </span>
                        <span className={`text-[10px] ibm-plex-mono-regular ${t.text}`}>
                          {p.tipo}
                        </span>
                      </div>
                      <HiChevronRight
                        size={12}
                        className="ml-auto text-gray-700 group-hover:text-[#FB8500] shrink-0 transition-colors"
                      />
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjetoDetalhe;
