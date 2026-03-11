import MatiasPic from "../assets/matias-pic.avif";
import { HiArrowUpRight } from "react-icons/hi2";

const INTERESTS = [
  "Design de Interfaces",
  "Software Architecture",
  "Systems Design",
];

const SobreMim = () => (
  <section className="flex min-h-screen justify-center items-center bg-[#0e0e0e] py-16 px-4 w-full">
    <div className="w-full max-w-4xl flex flex-col gap-6">
      <h2 className="text-2xl text-white text-center font-light uppercase">
        Sobre Mim :
      </h2>

      <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-8">
        {/* Foto */}
        <div className="shrink-0 flex justify-center">
          <div className="w-44 h-44 md:w-52 md:h-52 rounded-full ring-2 ring-[#FB8500]/40 ring-offset-2 ring-offset-[#080808] overflow-hidden">
            <img
              src={MatiasPic}
              alt="Lucas Mattias"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Conteúdo */}
        <div className="flex flex-col gap-5 flex-1 text-center md:text-left">
          <div className="flex flex-col gap-1.5">
            <h3 className="text-white space-y-2 font-semibold text-base">
              <p className="pb-1 text-lg"> Lucas Matias</p>
              <span className="text-xs text-[#FB8500]/50 uppercase">
                <p>{"< Full Stack Developer />"}</p>{" "}
              </span>
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Estudante de Ciência da Computação na UFRPE. Construo aplicações
              web completas, do banco de dados à interface, com foco em
              desempenho, clareza e boas práticas.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-xs text-gray-600 uppercase tracking-widest">
              Interesses :
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {INTERESTS.map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-1 text-xs text-[#FB8500] bg-[#FB8500]/10 border border-[#FB8500]/25 px-3 py-1 rounded-full"
                >
                  <HiArrowUpRight size={10} />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SobreMim;
