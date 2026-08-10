import AmargemImage from "../assets/amargem.webp";
import SigparImage from "../assets/sigpar.png";
import EntreLinhasLogo from "../assets/entrelinhas.avif";
import LetsNoteLogo from "../assets/lets-note.avif";
import AtomImage from "../assets/atom.webp";
import LogbookImage from "../assets/logbook.webp";

import { FaReact, FaDocker, FaCode, FaDatabase } from "react-icons/fa";
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
    slug: "atom",
    image: AtomImage,
    title: "Atom",
    summary:
      "Rede social em tempo real projetada para uso entre um grupo de amigos e desenvolvedores, combinando feed, stories (24h) e chat temporário (1h).",
    description:
      "O Atom é uma plataforma social em tempo real criada para conexão e interação diária entre um grupo privado de amigos e programadores. O sistema oferece feed interativo com curtidas e comentários otimistas, stories efêmeros (24h TTL), salas de chat temporárias (1h TTL) e notificações via WebSockets. O projeto resolve a necessidade de um espaço de comunicação reservado e de alta performance para o grupo, solucionando o desafio de gerenciar altíssima concorrência e acúmulo de dados efêmeros com expiração automática diretamente no PostgreSQL via queries e RLS — e não apenas oculta por timers no cliente.",
    isClickable: true,
    link: "https://atom-social.vercel.app/",
    arch: "Feature-Based · Facade Pattern · Component → Facade → Service → Supabase",
    archDetails: [
      "Facade Pattern como única porta de entrada dos componentes: expõe Signals de estado e métodos de intenção de negócio, isolando a UI da camada de dados",
      "Angular Signals como state management primário — decisão consciente de não usar NgRx, reduzindo boilerplate em uma app de porte médio",
      "Dados efêmeros (stories 24h, chat 1h) com TTL garantido via query no PostgreSQL (.gt('expires_at', now())), não por setTimeout no cliente",
      "Tempo real via Supabase Realtime (postgres_changes sobre WebSocket) com gerenciamento explícito de ciclo de vida das subscriptions",
      "Row Level Security (RLS) no banco como fronteira real de autorização — o frontend nunca é a camada de segurança",
      "Lazy loading em todas as rotas com loadComponent/loadChildren, mantendo o bundle inicial pequeno para FCP",
      "UI otimista em ações de alta frequência (curtidas): atualiza o Signal local antes da confirmação do servidor com rollback em caso de erro",
    ],
    tecnologias: [
      { label: "Angular 21", Icon: FaCode, layer: "front" },
      { label: "TypeScript", Icon: SiTypescript, layer: "front" },
      { label: "Tailwind v4", Icon: SiTailwindcss, layer: "front" },
      { label: "Supabase", Icon: FaDatabase, layer: "back" },
      { label: "PostgreSQL", Icon: SiPostgresql, layer: "db" },
      { label: "Vitest", Icon: FaCode, layer: "devops" },
    ],
    tipo: "Produtividade",
  },
  {
    slug: "logbook",
    image: LogbookImage,
    title: "Logbook",
    summary:
      "Plataforma privada desenvolvida para armazenar e auditar as atividades diárias dos funcionários da ONG Aldeias Infantis SOS em Araçoiaba – PE.",
    description:
      "O Logbook é uma aplicação web privada e segura desenvolvida para registrar, acompanhar e auditar a rotina de atividades diárias dos funcionários da organização Aldeias Infantis SOS em Araçoiaba – Pernambuco. O sistema resolve a falta de padronização e o risco de extravio nos registros operacionais da equipe, substituindo controles manuais por uma plataforma restrita fechada por convite (invite-only). Soluciona a segurança da informação com RBAC em duas camadas: navegação protegida por guards client-side no Angular e controle rigoroso de privilégios com Row Level Security (RLS) em PL/pgSQL no PostgreSQL como fonte da verdade.",
    isClickable: false,
    link: null,
    arch: "RBAC Redundante · Invite-Only Auth · Security Definer RLS · Triggers PL/pgSQL",
    archDetails: [
      "Modelo de cadastro estritamente fechado (Invite-only) com senhas temporárias de 20 caracteres geradas no servidor",
      "RBAC em duas camadas: guards client-side no Angular Router para UX e Row Level Security (RLS) no PostgreSQL como barreira de segurança real",
      "Resolução de recursão infinita em RLS (Postgres 42P17) utilizando função is_admin() com privilégios elevados (SECURITY DEFINER)",
      "Sincronização automática entre auth.users e public.users através de trigger PL/pgSQL (handle_new_user) no PostgreSQL",
      "Flag ativo em public.users atuando como kill-switch de sessão, forçando logout imediato no listener reativo mesmo com JWT válido",
      "Guards de rota assíncronos no Angular com barreira de inicialização (ensureInitialized) para mitigar race conditions no carregamento de sessão",
      "Arquitetura limpa em camadas (Component → Facade → Service → Supabase) garantindo baixo acoplamento com o provedor de BaaS",
    ],
    tecnologias: [
      { label: "Angular 21", Icon: FaCode, layer: "front" },
      { label: "TypeScript", Icon: SiTypescript, layer: "front" },
      { label: "Tailwind v4", Icon: SiTailwindcss, layer: "front" },
      { label: "Supabase", Icon: FaDatabase, layer: "back" },
      { label: "PostgreSQL", Icon: SiPostgresql, layer: "db" },
      { label: "PL/pgSQL", Icon: FaDatabase, layer: "db" },
    ],
    tipo: "Produtividade",
  },
  {
    slug: "sigpar",
    image: SigparImage,
    title: "SIGPAR - UFRPE",
    summary:
      "Plataforma institucional para a UFRPE que automatiza o gerenciamento de parcerias, execução orçamentária e planos de trabalho entre universidade e fundações.",
    description:
      "O Sistema Integrado de Gestão de Parcerias (SIGPAR-UFRPE) é a plataforma oficial do Instituto IPÊ (UFRPE) destinada a gerenciar o ciclo de vida completo de parcerias acadêmicas e institucionais. O sistema resolve o problema da desorganização, lentidão e falta de rastreabilidade de processos físicos e planilhas descentralizadas, automatizando desde a celebração do acordo, acompanhamento de metas e aprovações até a prestação de contas financeira. Garante total conformidade com as resoluções vigentes da universidade, integrando docentes, coordenadores, fundações de apoio e gestores em um fluxo de trabalho único e auditável.",
    isClickable: false,
    link: null,
    arch: "Fullstack · Monorepo · Arquitetura em Camadas",
    archDetails: [
      "Next.js App Router no frontend com SSR seletivo por rota",
      "NestJS com módulos isolados por domínio (RBAC, Parcerias, Orçamento)",
      "Banco relacional PostgreSQL com Sequelize ORM e migrations versionadas",
      "Containerização via Docker Compose para dev e produção",
      "TypeScript end-to-end para type-safety na API e no client",
    ],
    tecnologias: [
      { label: "Next.js", Icon: SiNextdotjs, layer: "front" },
      { label: "React.js", Icon: FaReact, layer: "front" },
      { label: "Tailwind", Icon: SiTailwindcss, layer: "front" },
      { label: "NestJS", Icon: SiNestjs, layer: "back" },
      { label: "TypeScript", Icon: SiTypescript, layer: "back" },
      { label: "PostgreSQL", Icon: SiPostgresql, layer: "db" },
      { label: "Sequelize", Icon: SiSequelize, layer: "db" },
      { label: "Docker", Icon: FaDocker, layer: "devops" },
    ],
    tipo: "Institucional",
  },
  {
    slug: "amargem",
    image: AmargemImage,
    title: "À Margem",
    summary:
      "Portal oficial do grupo de teatro hip-hop À Margem, construído para resolver a centralização de produções artísticas, agenda e booking profissional.",
    description:
      "O portal do grupo À Margem é a plataforma digital oficial do coletivo de teatro hip-hop. O sistema resolve a dificuldade de centralização de informações artísticas e agendamento de apresentações, reunindo em um só lugar a história do grupo, acervo audiovisual de produções, agenda de espetáculos atualizada em tempo real e formulário otimizado para contratantes. A aplicação foca em alta performance visual, acessibilidade e SEO avançado para maximizar a visibilidade da produção cultural do coletivo e facilitar parcerias profissionais.",
    isClickable: true,
    link: "https://amargem.com.br/",
    arch: "Fullstack · SSR · Next.js App Router",
    archDetails: [
      "Next.js App Router com SSR para SEO e carregamento instantâneo",
      "Prisma ORM com banco PostgreSQL para gestão de agenda e conteúdo",
      "TypeScript end-to-end com validação de tipos na camada de dados",
      "Deploy na Vercel com CI/CD automático via GitHub",
    ],
    tecnologias: [
      { label: "Next.js", Icon: SiNextdotjs, layer: "front" },
      { label: "React.js", Icon: FaReact, layer: "front" },
      { label: "Tailwind", Icon: SiTailwindcss, layer: "front" },
      { label: "TypeScript", Icon: SiTypescript, layer: "back" },
      { label: "Prisma", Icon: SiPrisma, layer: "db" },
    ],
    tipo: "Cultural",
  },
  {
    slug: "entrelinhas",
    image: EntreLinhasLogo,
    title: "EntreLinhas",
    summary:
      "Plataforma para projeto social de capacitação feminina em costura artesanal em Araçoiaba (PE), apoiado pela organização Aldeias Infantis SOS.",
    description:
      "O EntreLinhas é a plataforma digital oficial de uma iniciativa social voltada à capacitação em costura artesanal e geração de renda para mulheres na cidade de Araçoiaba – Pernambuco, apoiada pela organização Aldeias Infantis SOS. O sistema resolve a limitação de visibilidade e a ausência de um canal comercial profissional do coletivo, servindo como catálogo interativo de produtos sob demanda e ponte institucional para captar parcerias com indústrias têxteis e empresas, promovendo o empreendedorismo feminino e o fortalecimento socioeconômico local.",
    isClickable: true,
    link: "https://entrelinhasprojeto.vercel.app/",
    arch: "Fullstack · SSG/SSR · MongoDB + Prisma",
    archDetails: [
      "Next.js com geração híbrida (SSG para conteúdo estático, SSR para formulário)",
      "MongoDB como banco de dados NoSQL via Prisma ORM com schema tipado",
      "TypeScript garantindo consistência de tipos entre client e server",
      "Deploy na Vercel com variáveis de ambiente seguras para a string de conexão",
    ],
    tecnologias: [
      { label: "Next.js", Icon: SiNextdotjs, layer: "front" },
      { label: "TypeScript", Icon: SiTypescript, layer: "front" },
      { label: "Tailwind CSS", Icon: SiTailwindcss, layer: "front" },
      { label: "MongoDB", Icon: SiMongodb, layer: "db" },
      { label: "Prisma", Icon: SiPrisma, layer: "db" },
    ],
    tipo: "Institucional",
  },
  {
    slug: "letsnote",
    image: LetsNoteLogo,
    title: "LetsNote",
    summary:
      "Aplicativo mobile de tarefas e projetos com persistência offline-first e exportação CSV, resolvendo a dependência de conexão à internet.",
    description:
      "O LetsNote é um aplicativo mobile de produtividade projetado para gerenciamento de tarefas e projetos. O aplicativo resolve o problema da perda de acesso a dados e impossibilidade de organização pessoal durante a falta de conectividade, funcionando de forma 100% offline via persistência local no dispositivo (Async Storage) com gerenciamento de estado via Zustand. Oferece criação e acompanhamento de metas, organização por projetos e recurso de exportação de dados em CSV para relatórios e backups externos, combinando interface moderna com alta fluidez mobile.",
    isClickable: true,
    link: "https://github.com/webdevmatias/lets-note",
    arch: "Mobile-first · Offline-first · State com Zustand",
    archDetails: [
      "Expo + React Native com TypeScript para apps iOS e Android a partir de uma única base",
      "Zustand para gerenciamento de estado global leve e sem boilerplate",
      "Async Storage como camada de persistência local garantindo funcionamento offline",
      "Context API segmentado por domínio (tarefas, projetos, configurações)",
      "NativeWind para estilização com a mesma DX do Tailwind CSS",
    ],
    tecnologias: [
      { label: "React Native", Icon: SiReact, layer: "front" },
      { label: "Expo", Icon: SiExpo, layer: "front" },
      { label: "TypeScript", Icon: SiTypescript, layer: "front" },
      { label: "NativeWind", Icon: SiTailwindcss, layer: "front" },
      { label: "Zustand", Icon: FaReact, layer: "back" },
      { label: "Async Storage", Icon: SiReact, layer: "db" },
    ],
    tipo: "Produtividade",
  },
];
