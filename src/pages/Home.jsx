import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi2";
import MatiasPic from "../assets/mattias-pic.webp";
import { useLanguage } from "../context/LanguageContext";

const Home = () => {
  const { t } = useLanguage();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative flex justify-center items-center min-h-screen bg-[#080808] px-6 py-24 overflow-hidden"
    >
      {/* Soft background glow & subtle CSS mesh pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full blur-[140px] opacity-15"
          style={{ background: "radial-gradient(circle, #FB8500 0%, transparent 70%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      {/* Hero Content — Imagem no topo em mobile (flex-col-reverse), lado a lado em desktop (md:flex-row) */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-10 w-full max-w-5xl">
        
        {/* Bio & Action CTAs */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1 gap-6">
          
          {/* Bloco de Conteúdo de Texto — Borda oculta em mobile (border-l-0 pl-0), visível em desktop (md:border-l-2 md:pl-6) */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2 border-l-0 md:border-l-2 border-[#FB8500] pl-0 md:pl-6">
            {/* Badge com sinalizador variando do Laranja pro Branco e reativo ao idioma */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full animate-pulse-orange-white shrink-0" />
              <span className="text-xs text-gray-300 ibm-plex-mono-regular tracking-wide">
                {`< ${t("home.role")} />`}
              </span>
            </div>

            {/* Name */}
            <div className="flex flex-col gap-2">
              <h1 className="ibm-font text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white m-0 leading-none">
                <span className="text-white">MATIAS</span>
              </h1>
            </div>

            {/* Value Prop Tagline */}
            <p className="text-xs sm:text-sm text-gray-400 max-w-lg leading-relaxed font-light">
              {t("home.tagline")}
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
            {/* Primary Action Button */}
            <button
              onClick={() => scrollToSection("projetos")}
              className="flex items-center gap-2 bg-[#FB8500] hover:bg-[#e07800] active:scale-95 text-black font-semibold text-xs sm:text-sm px-6 py-3 rounded-xl transition-all duration-200 shadow-[0_0_20px_rgba(251,133,0,0.2)]"
            >
              <span>{t("home.verProjetos")}</span>
              <HiArrowDown size={14} />
            </button>

            {/* Social Links */}
            <a
              href="https://github.com/webdevmatias"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-white text-xs sm:text-sm px-4 py-3 rounded-xl transition-all duration-200"
            >
              <FaGithub size={16} className="text-[#FB8500]" />
              <span>{t("home.github")}</span>
            </a>

            <a
              href="https://www.linkedin.com/in/matiaz/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-white text-xs sm:text-sm px-4 py-3 rounded-xl transition-all duration-200"
            >
              <FaLinkedin size={16} className="text-[#FB8500]" />
              <span>{t("home.linkedin")}</span>
            </a>
          </div>
        </div>

        {/* Profile Avatar Picture */}
        <div className="relative shrink-0 flex justify-center items-center">
          {/* Ambient glow behind avatar */}
          <div className="absolute inset-0 bg-[#FB8500]/20 rounded-full blur-2xl transform scale-90" />

          {/* Profile Frame */}
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full ring-2 ring-[#FB8500]/40 ring-offset-4 ring-offset-[#080808] overflow-hidden bg-[#01161E] shadow-2xl transition-transform duration-500 hover:scale-105">
            <img
              src={MatiasPic}
              alt="Lucas Matias"
              width={256}
              height={256}
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
