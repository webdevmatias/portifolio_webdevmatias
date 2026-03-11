import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const github = "https://github.com/webdevmatias";
const linkedin = "https://www.linkedin.com/in/matiaz/";
const instagram = "https://www.instagram.com/omattiaz/";
const email = "mailto:lucas.matias@ufrpe.br";

const CONTACTS = [
  { Icon: FaGithub, label: "GitHub", handle: "webdevmatias", link: github },
  { Icon: FaLinkedin, label: "LinkedIn", handle: "matiaz", link: linkedin },
  {
    Icon: FaInstagram,
    label: "Instagram",
    handle: "@omattiaz",
    link: instagram,
  },
  {
    Icon: FaEnvelope,
    label: "Email",
    handle: "lucas.matias@ufrpe.br",
    link: email,
  },
];

const ContateMe = () => {
  return (
    <section className="flex justify-center items-center bg-[#080808] w-full min-h-screen py-16 px-6">
      <div className="w-full max-w-4xl flex flex-col items-center gap-10">
        {/* Título */}
        <div className="text-center">
          <h2 className="text-2xl font-ligth uppercase text-white mb-2">
            Contate-me :
          </h2>
          <p className="text-gray-500 text-sm">
            Aberto a projetos, parcerias e oportunidades
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
          {CONTACTS.map(({ Icon, label, handle, link }) => (
            <a
              key={label}
              href={link}
              target="_blank"
              rel="noreferrer"
              className="
                group
                flex flex-col items-center gap-3
                rounded-2xl p-6 border
                bg-white/[0.03] border-white/[0.05]
                hover:bg-[#FB8500]/[0.05] hover:border-[#FB8500]/40
                transition-all duration-200
              "
            >
              <Icon size={28} className="text-[#FB8500]" />

              <div className="flex flex-col items-center gap-0.5">
                <span className="text-sm font-medium text-white">{label}</span>

                <span className="text-xs text-gray-500">{handle}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContateMe;
