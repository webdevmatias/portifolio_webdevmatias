import { useNavigate } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi2";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="flex justify-center items-center bg-[#080808] min-h-screen px-4">
      <div className="text-center flex flex-col items-center gap-6">
        <span className="text-8xl font-bold text-[#FB8500] ibm-font leading-none">
          404
        </span>
        <div className="flex flex-col gap-2">
          <h1 className="text-white text-xl font-semibold">
            Página não encontrada
          </h1>
          <p className="text-gray-500 text-sm">
            A URL que você acessou não existe neste portfólio.
          </p>
        </div>
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 border border-white/10 hover:border-[#FB8500]/40 text-gray-400 hover:text-white text-sm px-5 py-2.5 rounded-xl transition-all duration-200 bg-white/[0.02] hover:bg-white/[0.04]"
        >
          <HiArrowLeft size={15} />
          Voltar ao início
        </button>
      </div>
    </section>
  );
};

export default NotFound;
