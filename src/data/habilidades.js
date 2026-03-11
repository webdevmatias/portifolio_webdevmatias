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
    color: "#61DAFB",
    techs: [
      {
        Icon: FaReact,
        label: "React.js",
        note: "Interfaces componentizadas e reativas",
      },
      {
        Icon: SiNextdotjs,
        label: "Next.js",
        note: "SSR, SSG e full stack com React",
      },
      {
        Icon: FaMobileScreenButton,
        label: "React Native",
        note: "Apps mobile multiplataforma",
      },
      { Icon: FaJs, label: "JavaScript", note: "Base da web moderna" },
      {
        Icon: SiTypescript,
        label: "TypeScript",
        note: "Tipagem estática e robustez",
      },
      {
        Icon: SiTailwindcss,
        label: "Tailwind CSS",
        note: "CSS utilitário e produtivo",
      },
    ],
  },
  {
    label: "Back-end",
    color: "#68D391",
    techs: [
      {
        Icon: SiNodedotjs,
        label: "Node.js",
        note: "Runtime JavaScript no servidor",
      },
      {
        Icon: SiExpress,
        label: "Express.js",
        note: "APIs REST leves e rápidas",
      },
      {
        Icon: SiNestjs,
        label: "NestJS",
        note: "Arquitetura modular e escalável",
      },
      {
        Icon: SiJsonwebtokens,
        label: "JWT | Auth",
        note: "Autenticação stateless segura",
      },
      { Icon: SiPython, label: "Python", note: "Scripts, automação e NLP" },
    ],
  },
  {
    label: "Banco de Dados",
    color: "#F6AD55",
    techs: [
      {
        Icon: SiPostgresql,
        label: "PostgreSQL",
        note: "Banco relacional avançado e robusto",
      },
      {
        Icon: SiMongodb,
        label: "MongoDB",
        note: "Banco NoSQL orientado a documentos",
      },
      { Icon: SiPrisma, label: "Prisma", note: "ORM moderno com type-safety" },
      {
        Icon: SiSequelize,
        label: "Sequelize",
        note: "ORM clássico para Node.js",
      },
    ],
  },
  {
    label: "DevOps & Ferramentas",
    color: "#76E4F7",
    techs: [
      { Icon: FaGitAlt, label: "Git", note: "Controle de versão distribuído" },
      { Icon: SiGithub, label: "GitHub", note: "Repositórios e colaboração" },
      {
        Icon: SiDocker,
        label: "Docker",
        note: "Containers e ambientes isolados",
      },
      {
        Icon: SiPostman,
        label: "Postman",
        note: "Testes e documentação de APIs",
      },
      {
        Icon: SiFigma,
        label: "Figma",
        note: "Design de interfaces e prototipagem",
      },
    ],
  },
];
