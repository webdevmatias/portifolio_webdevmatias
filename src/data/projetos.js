import AmargemImage from "../assets/amargem.png";
import SigparImage from "../assets/sigpar.png";
import EcotrilhaImage from "../assets/logo-ecotrilha.svg";
import MeetSpaceLogo from "../assets/meetspace-logo.svg";
import EntreLinhasLogo from "../assets/entrelinhas.avif";
import LetsNoteLogo from "../assets/lets-note.avif";

import { FaReact, FaDocker, FaLeaf } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiNestjs,
  SiPostgresql,
  SiSequelize,
  SiTypescript,
  SiPrisma,
  SiAxios,
  SiExpress,
  SiNodedotjs,
  SiMongodb,
  SiExpo,
  SiReact,
} from "react-icons/si";

export const PROJETOS = [
  {
    slug: "sigpar",
    image: SigparImage,
    title: "SIGPAR - UFRPE",
    summary:
      "Sistema institucional para o Instituto Ipê (UFRPE), voltado ao gerenciamento de parcerias, planos de trabalho e execução orçamentária com a universidade",
    description:
      "O SIGPAR foi desenvolvido para digitalizar e centralizar os processos administrativos do Instituto Ipê na UFRPE. O sistema permite o cadastro e acompanhamento de projetos de extensão, controle de planos de trabalho de bolsistas e voluntários, além da gestão completa da execução orçamentária com geração de relatórios institucionais.",
    isClickable: false,
    link: null,
    tecnologias: [
      { label: "Next.js", Icon: SiNextdotjs },
      { label: "React.js", Icon: FaReact },
      { label: "Tailwind", Icon: SiTailwindcss },
      { label: "NestJS", Icon: SiNestjs },
      { label: "Docker", Icon: FaDocker },
      { label: "PostgreSQL", Icon: SiPostgresql },
      { label: "Sequelize", Icon: SiSequelize },
      { label: "TypeScript", Icon: SiTypescript },
    ],
    tipo: "Institucional",
  },
  {
    slug: "amargem",
    image: AmargemImage,
    title: "À Margem",
    summary:
      "Website oficial do grupo de teatro hip-hop À Margem, destacando sua história e produções artísticas.",
    description:
      "O site do grupo À Margem foi construído para dar visibilidade ao trabalho artístico do coletivo de teatro hip-hop. A plataforma apresenta a história do grupo, agenda de espetáculos, galeria de produções e canais de contato para booking, com foco em performance visual e acessibilidade.",
    isClickable: true,
    link: "https://amargem.com.br/",
    tecnologias: [
      { label: "Next.js", Icon: SiNextdotjs },
      { label: "React.js", Icon: FaReact },
      { label: "Tailwind", Icon: SiTailwindcss },
      { label: "Prisma", Icon: SiPrisma },
      { label: "TypeScript", Icon: SiTypescript },
    ],
    tipo: "Cultural",
  },
  {
    slug: "entrelinhas",
    image: EntreLinhasLogo,
    title: "EntreLinhas",
    summary:
      "Landing page para projeto social que capacita mulheres de Aracoiaba – PE em costura e geração de renda por meio da produção artesanal.",
    description:
      "O EntreLinhas é um projeto social sediado em Aracoiaba – Pernambuco, formado por mais de 10 mulheres que produzem bolsas e artigos de costura artesanal. O projeto promove capacitação em costura, desenvolvimento pessoal e geração de renda local, fortalecendo o empreendedorismo feminino e a economia da cidade. Atualmente atua com produção sob demanda e busca estruturar parcerias estratégicas com empresas e indústrias têxteis para ampliar sua capacidade produtiva, impacto social e logística de vendas para além de Pernambuco. A landing page institucional foi desenvolvida com Next.js em arquitetura fullstack, integrando banco de dados MongoDB por meio do Prisma ORM.",
    isClickable: true,
    link: "https://entrelinhasprojeto.vercel.app/",
    tecnologias: [
      { label: "Next.js", Icon: SiNextdotjs },
      { label: "TypeScript", Icon: SiTypescript },
      { label: "Tailwind CSS", Icon: SiTailwindcss },
      { label: "MongoDB", Icon: SiMongodb },
      { label: "Prisma", Icon: SiPrisma },
    ],
    tipo: "Institucional",
  },
  {
    slug: "ecotrilha",
    image: EcotrilhaImage,
    title: "Ecotrilha",
    summary:
      "Plataforma web para mapeamento, agendamento e acompanhamento de trilhas ecológicas na Região Metropolitana do Recife.",
    description:
      "O Ecotrilha conecta guias e visitantes em experiências sustentáveis na natureza. A plataforma oferece mapeamento interativo de trilhas com Leaflet, sistema de agendamento e reservas, perfis de guias com avaliações e painel de acompanhamento em tempo real das atividades.",
    isClickable: false,
    link: "https://github.com/EcoTrilha",
    tecnologias: [
      { label: "React.js", Icon: FaReact },
      { label: "Leaflet", Icon: FaLeaf },
      { label: "Axios", Icon: SiAxios },
      { label: "Express", Icon: SiExpress },
      { label: "Tailwind", Icon: SiTailwindcss },
    ],
    tipo: "Ambiental",
  },
  {
    slug: "meetspace",
    image: MeetSpaceLogo,
    title: "MeetSpace",
    summary:
      "Sistema distribuído para gestão e reserva de salas de reunião corporativas.",
    description:
      "O MeetSpace é arquitetado em microserviços para gerenciar reservas de salas em ambientes corporativos e acadêmicos. Conta com autenticação JWT, calendário interativo de disponibilidade, confirmações por e-mail e relatórios de uso por período.",
    isClickable: true,
    link: "https://github.com/MeetSpaceUFRPE",
    tecnologias: [
      { label: "React.js", Icon: FaReact },
      { label: "Node.js", Icon: SiNodedotjs },
      { label: "Express", Icon: SiExpress },
      { label: "Docker", Icon: FaDocker },
      { label: "PostgreSQL", Icon: SiPostgresql },
      { label: "Axios", Icon: SiAxios },
      { label: "TypeScript", Icon: SiTypescript },
    ],
    tipo: "Produtividade",
  },
  {
    slug: "letsnote",
    image: LetsNoteLogo,
    title: "LetsNote",
    summary:
      "Aplicativo mobile para gerenciamento de tarefas e projetos com exportação em CSV e funcionamento offline.",
    description:
      "O LetsNote é um aplicativo mobile desenvolvido com Expo, React Native e TypeScript, projetado para organizar tarefas e projetos de forma simples e eficiente. O aplicativo permite criar tarefas, associá-las a projetos, acompanhar progresso e exportar os dados em formato CSV para compartilhamento ou backup. Utiliza Zustand e Context API para gerenciamento de estado global e Async Storage para armazenamento local, garantindo funcionamento offline. A interface foi construída com NativeWind (TailwindCSS), oferecendo um design moderno, responsivo e minimalista.",
    isClickable: true,
    link: "https://github.com/webdevmatias/lets-note",
    tecnologias: [
      { label: "Expo", Icon: SiExpo },
      { label: "React Native", Icon: SiReact },
      { label: "TypeScript", Icon: SiTypescript },
      { label: "TailwindCSS", Icon: SiTailwindcss },
      { label: "Zustand", Icon: FaReact },
      { label: "Async Storage", Icon: SiReact },
    ],
    tipo: "Produtividade",
  },
];
