import PromonitorImage from "../assets/promonitor-img.svg";
import AmargemImage from "../assets/amargem.png";
import SigparImage from "../assets/sigpar.png";
import EcotrilhaImage from "../assets/logo-ecotrilha.svg";
import MeetSpaceLogo from "../assets/meetspace-logo.svg";

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
  SiSwagger,
  SiMysql,
  SiNodedotjs,
  SiAntdesign,
} from "react-icons/si";

export const PROJETOS = [
  {
    slug: "sigpar",
    image: SigparImage,
    title: "SIGPAR",
    summary:
      "Sistema institucional para o Instituto Ipê (UFRPE), voltado ao gerenciamento de projetos, planos de trabalho e execução orçamentária.",
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
    slug: "ecotrilha",
    image: EcotrilhaImage,
    title: "Ecotrilha",
    summary:
      "Plataforma web para mapeamento, agendamento e acompanhamento de trilhas ecológicas na Região Metropolitana do Recife.",
    description:
      "O Ecotrilha conecta guias e visitantes em experiências sustentáveis na natureza. A plataforma oferece mapeamento interativo de trilhas com Leaflet, sistema de agendamento e reservas, perfis de guias com avaliações e painel de acompanhamento em tempo real das atividades.",
    isClickable: true,
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
    slug: "promonitor",
    image: PromonitorImage,
    title: "ProMonitor",
    summary: "Sistema de gerenciamento do Programa de Monitoria da UFRPE.",
    description:
      "O ProMonitor centraliza todo o ciclo do programa de monitoria da UFRPE: inscrição e seleção de monitores, cadastro de planos de atividades, registro de horas cumpridas e geração de relatórios em PDF para prestação de contas institucional.",
    isClickable: true,
    link: "https://github.com/HidraCode",
    tecnologias: [
      { label: "React.js", Icon: FaReact },
      { label: "Ant Design", Icon: SiAntdesign },
      { label: "Axios", Icon: SiAxios },
      { label: "Node.js", Icon: SiNodedotjs },
      { label: "Express", Icon: SiExpress },
      { label: "MySQL", Icon: SiMysql },
      { label: "Swagger", Icon: SiSwagger },
    ],
    tipo: "Acadêmico",
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
];
