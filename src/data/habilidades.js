import { FaReact, FaJs, FaGitAlt } from "react-icons/fa";
import { FaMobileScreenButton } from "react-icons/fa6";
import {
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiSequelize,
  SiPostgresql,
  SiTypescript,
  SiNestjs,
  SiDocker,
  SiGithub,
  SiPython,
  SiPrisma,
  SiMongodb,
  SiFigma,
  SiPostman,
  SiNextdotjs,
  SiJsonwebtokens,
} from "react-icons/si";

export const CATEGORIES = [
  {
    label: "Front-end",
    label_en: "Front-end",
    color: "#61DAFB",
    techs: [
      {
        Icon: FaReact,
        label: "React.js",
        note: "Interfaces componentizadas e reativas",
        note_en: "Component-driven and reactive UIs",
      },
      {
        Icon: SiNextdotjs,
        label: "Next.js",
        note: "SSR, SSG e full stack com React",
        note_en: "SSR, SSG, and full-stack React",
      },
      {
        Icon: FaMobileScreenButton,
        label: "React Native",
        note: "Apps mobile multiplataforma",
        note_en: "Cross-platform mobile apps",
      },
      {
        Icon: FaJs,
        label: "JavaScript",
        note: "Base da web moderna",
        note_en: "Foundation of the modern web",
      },
      {
        Icon: SiTypescript,
        label: "TypeScript",
        note: "Tipagem estática e robustez",
        note_en: "Static typing and code robustness",
      },
      {
        Icon: SiTailwindcss,
        label: "Tailwind CSS",
        note: "CSS utilitário e produtivo",
        note_en: "Utility-first and productive CSS",
      },
    ],
  },
  {
    label: "Back-end",
    label_en: "Back-end",
    color: "#68D391",
    techs: [
      {
        Icon: SiNodedotjs,
        label: "Node.js",
        note: "Runtime JavaScript no servidor",
        note_en: "Server-side JavaScript runtime",
      },
      {
        Icon: SiExpress,
        label: "Express.js",
        note: "APIs REST leves e rápidas",
        note_en: "Lightweight and fast REST APIs",
      },
      {
        Icon: SiNestjs,
        label: "NestJS",
        note: "Arquitetura modular e escalável",
        note_en: "Modular and scalable architecture",
      },
      {
        Icon: SiJsonwebtokens,
        label: "JWT | Auth",
        note: "Autenticação stateless segura",
        note_en: "Secure stateless authentication",
      },
      {
        Icon: SiPython,
        label: "Python",
        note: "Scripts, automação e NLP",
        note_en: "Scripting, automation, and NLP",
      },
    ],
  },
  {
    label: "Banco de Dados",
    label_en: "Database",
    color: "#F6AD55",
    techs: [
      {
        Icon: SiPostgresql,
        label: "PostgreSQL",
        note: "Banco relacional avançado e robusto",
        note_en: "Advanced and robust relational DB",
      },
      {
        Icon: SiMongodb,
        label: "MongoDB",
        note: "Banco NoSQL orientado a documentos",
        note_en: "Document-oriented NoSQL database",
      },
      {
        Icon: SiPrisma,
        label: "Prisma",
        note: "ORM moderno com type-safety",
        note_en: "Modern ORM with end-to-end type safety",
      },
      {
        Icon: SiSequelize,
        label: "Sequelize",
        note: "ORM clássico para Node.js",
        note_en: "Classic Node.js ORM",
      },
    ],
  },
  {
    label: "DevOps & Ferramentas",
    label_en: "DevOps & Tools",
    color: "#76E4F7",
    techs: [
      {
        Icon: FaGitAlt,
        label: "Git",
        note: "Controle de versão distribuído",
        note_en: "Distributed version control",
      },
      {
        Icon: SiGithub,
        label: "GitHub",
        note: "Repositórios e colaboração",
        note_en: "Repositories and collaboration",
      },
      {
        Icon: SiDocker,
        label: "Docker",
        note: "Containers e ambientes isolados",
        note_en: "Containers and isolated environments",
      },
      {
        Icon: SiPostman,
        label: "Postman",
        note: "Testes e documentação de APIs",
        note_en: "API testing and documentation",
      },
      {
        Icon: SiFigma,
        label: "Figma",
        note: "Design de interfaces e prototipagem",
        note_en: "UI design and prototyping",
      },
    ],
  },
];
