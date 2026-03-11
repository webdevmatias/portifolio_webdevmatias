import { useParams, useNavigate } from "react-router-dom";
import { PROJETOS } from "../data/projetos";
import {
  HiArrowLeft,
  HiArrowTopRightOnSquare,
  HiChevronRight,
} from "react-icons/hi2";

const TIPO_CONFIG = {
  Institucional: {
    text: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/25",
    glow: "rgba(96,165,250,0.12)",
  },
  Cultural: {
    text: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/25",
    glow: "rgba(167,139,250,0.12)",
  },
  Ambiental: {
    text: "text-green-400",
    bg: "bg-green-400/10",
    border: "border-green-400/25",
    glow: "rgba(74,222,128,0.12)",
  },
  Acadêmico: {
    text: "text-yellow-400",
    bg: "bg-yellow-400/10",
    border: "border-yellow-400/25",
    glow: "rgba(250,204,21,0.12)",
  },
  Produtividade: {
    text: "text-cyan-400",
    bg: "bg-cyan-400/10",
    border: "border-cyan-400/25",
    glow: "rgba(34,211,238,0.12)",
  },
};

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
            className="hover:text-gray-400 transition-colors flex items-center gap-1"
          >
            <HiArrowLeft size={11} /> Projetos
          </button>
          <span>/</span>
          <span className="text-gray-400 truncate max-w-[180px]">
            {projeto.title}
          </span>
        </div>

        {/* Layout principal */}
        <div className="flex flex-col lg:flex-row gap-5 items-start">
          {/* Coluna esquerda */}
          <div className="flex flex-col gap-4 flex-1 min-w-0">
            {/* Título */}
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white leading-tight tracking-tight">
                {projeto.title}
              </h1>
              <div
                className="mt-2 h-px w-full"
                style={{
                  background:
                    "linear-gradient(to right, rgba(251,133,0,0.35), transparent)",
                }}
              />
            </div>

            {/* Imagem */}
            <div
              className="w-full rounded-xl border border-white/5 flex items-center justify-center p-5"
              style={{
                background: `radial-gradient(ellipse at 60% 40%, ${tipo.glow || "rgba(251,133,0,0.06)"}, transparent 70%), #0c0c0c`,
              }}
            >
              <img
                src={projeto.image}
                alt={projeto.title}
                className="object-contain rounded-lg"
                style={{ maxHeight: 180, maxWidth: "100%" }}
              />
            </div>

            {/* Descrição */}
            <p className="text-sm text-gray-400 text-justify leading-relaxed">
              {projeto.description}
            </p>

            {/* Stack */}
            <div className="flex justify-center md:justify-start flex-wrap gap-2">
              {projeto.tecnologias?.map(({ label, Icon }) => (
                <span
                  key={label}
                  className="flex items-center gap-1.5 text-xs text-[#FB8500] bg-[#FB8500]/10 border border-[#FB8500]/20 px-3 py-1 rounded-full"
                >
                  {Icon && <Icon size={11} />}
                  {label}
                </span>
              ))}
            </div>

            {/* CTA mobile — só aparece abaixo de lg */}
            <div className="flex flex-col gap-2 lg:hidden">
              {projeto.isClickable && projeto.link ? (
                <a
                  href={projeto.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#FB8500] hover:bg-[#e07800] active:scale-95 text-black font-semibold text-sm rounded-lg py-2.5 transition-all duration-200"
                >
                  <HiArrowTopRightOnSquare size={14} />
                  Ver no GitHub
                </a>
              ) : (
                <div className="flex items-center justify-center w-full bg-white/5 border border-white/5 text-gray-600 text-sm rounded-lg py-2.5 cursor-not-allowed select-none">
                  Repositório privado
                </div>
              )}

              {/* Info inline no mobile */}
              <div className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-4 py-2.5">
                <span className={`text-xs font-medium ${tipo.text}`}>
                  {projeto.tipo}
                </span>
                <div className="w-px h-3 bg-white/10" />
                <span className="text-xs text-gray-500">
                  {projeto.tecnologias?.length || 0} tecnologias
                </span>
                <div className="w-px h-3 bg-white/10" />
                <span className="text-xs text-gray-500">
                  {projeto.isClickable ? "Público" : "Privado"}
                </span>
              </div>
            </div>
          </div>

          {/* Sidebar — só no lg+ */}
          <div className="hidden lg:flex flex-col gap-3 w-60 shrink-0">
            {/* CTA */}
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 flex flex-col gap-3">
              {projeto.isClickable && projeto.link ? (
                <a
                  href={projeto.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#FB8500] hover:bg-[#e07800] active:scale-95 text-black font-semibold text-sm rounded-lg py-2.5 transition-all duration-200"
                >
                  <HiArrowTopRightOnSquare size={14} />
                  Ver no GitHub
                </a>
              ) : (
                <div className="flex items-center justify-center w-full bg-white/5 border border-white/5 text-gray-600 text-sm rounded-lg py-2.5 cursor-not-allowed select-none">
                  Repositório privado
                </div>
              )}

              <button
                onClick={() => navigate("/projetos")}
                className="flex items-center justify-center gap-1.5 w-full text-gray-500 hover:text-gray-300 text-xs py-1.5 transition-colors"
              >
                <HiArrowLeft size={11} />
                Todos os projetos
              </button>
            </div>

            {/* Info */}
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 flex flex-col gap-2">
              {[
                { label: "Categoria", value: projeto.tipo, cls: tipo.text },
                {
                  label: "Tecnologias",
                  value: `${projeto.tecnologias?.length || 0} itens`,
                  cls: "text-gray-400",
                },
                {
                  label: "Acesso",
                  value: projeto.isClickable ? "Público" : "Privado",
                  cls: "text-gray-400",
                },
              ].map(({ label, value, cls }, i, arr) => (
                <div key={label}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-600">{label}</span>
                    <span className={`text-xs ${cls}`}>{value}</span>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="h-px bg-white/5 mt-2" />
                  )}
                </div>
              ))}
            </div>

            {/* Outros projetos */}
            {suggestions.length > 0 && (
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-widest text-gray-600 mb-2">
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
                          className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                        />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-xs text-white font-medium truncate">
                          {p.title}
                        </span>
                        <span className={`text-[10px] ${t.text}`}>
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
