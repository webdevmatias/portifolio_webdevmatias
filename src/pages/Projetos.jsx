import { useNavigate } from "react-router-dom";
import { PROJETOS } from "../data/projetos";
import { HiArrowUpRight } from "react-icons/hi2";

const TIPO_COLORS = {
  Institucional: "text-blue-400 bg-blue-400/10 border-blue-400/20",
  Cultural: "text-purple-400 bg-purple-400/10 border-purple-400/20",
  Ambiental: "text-green-400 bg-green-400/10 border-green-400/20",
  Acadêmico: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
  Produtividade: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
};

const LIMIT = 5;

const Projetos = () => {
  const navigate = useNavigate();

  return (
    <section className="flex justify-center bg-[#0e0e0e] w-full min-h-screen py-24 px-4">
      <div className="w-full max-w-5xl flex flex-col gap-10">
        <div className="text-center">
          <h2 className="text-2xl font-light uppercase text-white mb-2">
            Projetos :
          </h2>
          <p className="text-gray-500 text-sm">
            Clique em um projeto para ver os detalhes
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJETOS.map((projeto) => {
            const techs = projeto.tecnologias;
            const visible = techs.slice(0, LIMIT);
            const remaining = techs.length - LIMIT;

            return (
              <div
                key={projeto.slug}
                onClick={() => navigate(`/projetos/${projeto.slug}`)}
                className="group cursor-pointer flex flex-col bg-white/[0.03] border border-white/5 rounded-2xl overflow-hidden hover:border-[#FB8500]/40 transition-all duration-200 h-full"
              >
                {/* Imagem — altura fixa */}
                <div className="h-44 w-full bg-white/[0.02] border-b border-white/5 flex items-center justify-center p-3 shrink-0">
                  <img
                    src={projeto.image}
                    alt={projeto.title}
                    className="h-full w-full rounded object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-200"
                  />
                </div>

                {/* Corpo — flex-1 para ocupar o espaço restante */}
                <div className="flex flex-col gap-3 p-5 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-white font-semibold text-base truncate">
                      {projeto.title}
                    </h3>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full border shrink-0 ${TIPO_COLORS[projeto.tipo]}`}
                    >
                      {projeto.tipo}
                    </span>
                  </div>

                  {/* Descrição com altura fixa para alinhar os cards */}
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-3 flex-1">
                    {projeto.summary}
                  </p>

                  {/* Techs com ícones */}
                  <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-white/5">
                    {visible.map(({ label, Icon }) => (
                      <span
                        key={label}
                        title={label}
                        className="text-[#FB8500]"
                      >
                        <Icon size={16} />
                      </span>
                    ))}
                    {remaining > 0 && (
                      <span className="text-xs text-gray-600">
                        +{remaining}
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer — sempre no fundo */}
                <div className="px-5 py-3 border-t border-white/5 flex items-center justify-between shrink-0">
                  <span className="text-xs text-gray-600">Ver detalhes</span>
                  <HiArrowUpRight
                    size={14}
                    className="text-gray-700 group-hover:text-[#FB8500] transition-colors duration-200"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projetos;
