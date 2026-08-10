import AmargemImage from "../assets/amargem.webp";
import SigparImage from "../assets/sigpar.png";
import EntreLinhasLogo from "../assets/entrelinhas.avif";
import LetsNoteLogo from "../assets/lets-note.avif";
import AtomImage from "../assets/atom.webp";
import LogbookImage from "../assets/logbook.webp";

import { FaReact, FaDocker, FaAngular, FaDatabase } from "react-icons/fa";
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
  SiSupabase,
  SiVitest,
} from "react-icons/si";

export const PROJETOS = [
  {
    slug: "atom",
    image: AtomImage,
    title: "Atom",
    summary:
      "Rede social em tempo real projetada para uso entre um grupo de amigos e desenvolvedores, combinando feed, stories (24h) e chat temporário (1h).",
    summary_en:
      "Real-time social network engineered for a private group of friends and developers, featuring interactive feed, 24h stories, and 1h temporary chat.",
    description:
      "O Atom é uma plataforma social em tempo real criada para conexão e interação diária entre um grupo privado de amigos e programadores. O sistema oferece feed interativo com curtidas e comentários otimistas, stories efêmeros (24h TTL), salas de chat temporárias (1h TTL) e notificações via WebSockets. O projeto resolve a necessidade de um espaço de comunicação reservado e de alta performance para o grupo, solucionando o desafio de gerenciar altíssima concorrência e acúmulo de dados efêmeros com expiração automática diretamente no PostgreSQL via queries e RLS — e não apenas oculta por timers no cliente.",
    description_en:
      "Atom is a real-time social platform built for daily interaction among a private group of friends and developers. It features an interactive feed with optimistic likes and comments, 24h ephemeral stories, 1h temporary chat rooms, and real-time WebSocket notifications. The system solves the need for a high-performance, private communication space, handling high concurrency and data expiration directly at the PostgreSQL layer via server-enforced TTL and RLS policies.",
    isClickable: true,
    link: "https://atom-social.vercel.app/",
    arch: "Feature-Based · Facade Pattern · Component → Facade → Service → Supabase",
    arch_en: "Feature-Based · Facade Pattern · Component → Facade → Service → Supabase",
    archDetails: [
      "Facade Pattern como única porta de entrada dos componentes: expõe Signals de estado e métodos de intenção de negócio, isolando a UI da camada de dados",
      "Angular Signals como state management primário — decisão consciente de não usar NgRx, reduzindo boilerplate em uma app de porte médio",
      "Dados efêmeros (stories 24h, chat 1h) com TTL garantido via query no PostgreSQL (.gt('expires_at', now())), não por setTimeout no cliente",
      "Tempo real via Supabase Realtime (postgres_changes sobre WebSocket) com gerenciamento explícito de ciclo de vida das subscriptions",
      "Row Level Security (RLS) no banco como fronteira real de autorização — o frontend nunca é a camada de segurança",
      "Lazy loading em todas as rotas com loadComponent/loadChildren, mantendo o bundle inicial pequeno para FCP",
      "UI otimista em ações de alta frequência (curtidas): atualiza o Signal local antes da confirmação do servidor com rollback em caso de erro",
    ],
    archDetails_en: [
      "Facade Pattern as the sole component gateway: exposes state Signals and business-intent methods, decoupling UI from data layers",
      "Angular Signals as primary state management — a conscious decision to avoid NgRx boilerplate in a medium-scale application",
      "Ephemeral data (24h stories, 1h chat) with server-enforced TTL directly in PostgreSQL (.gt('expires_at', now())), rather than client-side timers",
      "Real-time capability powered by Supabase Realtime (postgres_changes WebSockets) with explicit subscription lifecycle management",
      "Row Level Security (RLS) policies in PostgreSQL serving as the real security boundary — the client is treated as untrusted",
      "Lazy loading on all feature routes via loadComponent/loadChildren, maintaining a minimal initial bundle size for fast FCP",
      "Optimistic UI updates for high-frequency actions (likes): updates local Signals immediately with rollback on network failure",
    ],
    tecnologias: [
      { label: "Angular 21", Icon: FaAngular, layer: "front" },
      { label: "TypeScript", Icon: SiTypescript, layer: "front" },
      { label: "Tailwind v4", Icon: SiTailwindcss, layer: "front" },
      { label: "Supabase", Icon: SiSupabase, layer: "back" },
      { label: "PostgreSQL", Icon: SiPostgresql, layer: "db" },
      { label: "Vitest", Icon: SiVitest, layer: "devops" },
    ],
    tipo: "Produtividade",
    tipo_en: "Productivity",
  },
  {
    slug: "logbook",
    image: LogbookImage,
    title: "Logbook",
    summary:
      "Plataforma privada desenvolvida para armazenar e auditar as atividades diárias dos funcionários da ONG Aldeias Infantis SOS em Araçoiaba – PE.",
    summary_en:
      "Private platform built to record and audit the daily activities of staff members at the NGO Aldeias Infantis SOS in Araçoiaba, Brazil.",
    description:
      "O Logbook é uma aplicação web privada e segura desenvolvida para registrar, acompanhar e auditar a rotina de atividades diárias dos funcionários da organização Aldeias Infantis SOS em Araçoiaba – Pernambuco. O sistema resolve a falta de padronização e o risco de extravio nos registros operacionais da equipe, substituindo controles manuais por uma plataforma restrita fechada por convite (invite-only). Soluciona a segurança da informação com RBAC em duas camadas: navegação protegida por guards client-side no Angular e controle rigoroso de privilégios com Row Level Security (RLS) em PL/pgSQL no PostgreSQL como fonte da verdade.",
    description_en:
      "Logbook is a secure private web application built to log, monitor, and audit daily operational activities of staff members at the NGO Aldeias Infantis SOS in Araçoiaba, Pernambuco. The system replaces manual paper logs with an invite-only platform. It solves access control security with two-tier RBAC: client-side Angular route guards for UX and strict PostgreSQL Row Level Security (RLS) policies written in PL/pgSQL with SECURITY DEFINER privilege isolation as the ultimate source of truth.",
    isClickable: false,
    link: null,
    arch: "RBAC Redundante · Invite-Only Auth · Security Definer RLS · Triggers PL/pgSQL",
    arch_en: "Two-Tier RBAC · Invite-Only Auth · Security Definer RLS · PL/pgSQL Triggers",
    archDetails: [
      "Modelo de cadastro estritamente fechado (Invite-only) com senhas temporárias de 20 caracteres geradas no servidor",
      "RBAC em duas camadas: guards client-side no Angular Router para UX e Row Level Security (RLS) no PostgreSQL como barreira de segurança real",
      "Resolução de recursão infinita em RLS (Postgres 42P17) utilizando função is_admin() com privilégios elevados (SECURITY DEFINER)",
      "Sincronização automática entre auth.users e public.users através de trigger PL/pgSQL (handle_new_user) no PostgreSQL",
      "Flag ativo em public.users atuando como kill-switch de sessão, forçando logout imediato no listener reativo mesmo com JWT válido",
      "Guards de rota assíncronos no Angular com barreira de inicialização (ensureInitialized) para mitigar race conditions no carregamento de sessão",
      "Arquitetura limpa em camadas (Component → Facade → Service → Supabase) garantindo baixo acoplamento com o provedor de BaaS",
    ],
    archDetails_en: [
      "Invite-only authentication flow featuring server-generated 20-character temporary passwords for new staff members",
      "Two-tier RBAC: Angular client-side guards for smooth UX and PostgreSQL Row Level Security (RLS) as the security source of truth",
      "Resolution of RLS infinite recursion (Postgres 42P17) using an is_admin() helper function with SECURITY DEFINER execution rights",
      "Automatic table synchronization between auth.users and public.users powered by an idempotent PL/pgSQL trigger (handle_new_user)",
      "Active status flag in public.users serving as an immediate session kill-switch, triggering forced logouts even with valid JWTs",
      "Asynchronous Angular route guards using an initialization barrier (ensureInitialized) to eliminate auth state race conditions",
      "Decoupled architecture (Component → Facade → Service → Supabase) maintaining clear separation of concerns",
    ],
    tecnologias: [
      { label: "Angular 21", Icon: FaAngular, layer: "front" },
      { label: "TypeScript", Icon: SiTypescript, layer: "front" },
      { label: "Tailwind v4", Icon: SiTailwindcss, layer: "front" },
      { label: "Supabase", Icon: SiSupabase, layer: "back" },
      { label: "PostgreSQL", Icon: SiPostgresql, layer: "db" },
      { label: "PL/pgSQL", Icon: FaDatabase, layer: "db" },
    ],
    tipo: "Produtividade",
    tipo_en: "Productivity",
  },
  {
    slug: "sigpar",
    image: SigparImage,
    title: "SIGPAR - UFRPE",
    summary:
      "Plataforma institucional para a UFRPE que automatiza o gerenciamento de parcerias, execução orçamentária e planos de trabalho entre universidade e fundações.",
    summary_en:
      "Institutional platform for UFRPE automating partnership management, budget execution, and work plans between the university and partner foundations.",
    description:
      "O Sistema Integrado de Gestão de Parcerias (SIGPAR-UFRPE) é a plataforma oficial do Instituto IPÊ (UFRPE) destinada a gerenciar o ciclo de vida completo de parcerias acadêmicas e institucionais. O sistema resolve o problema da desorganização, lentidão e falta de rastreabilidade de processos físicos e planilhas descentralizadas, automatizando desde a celebração do acordo, acompanhamento de metas e aprovações até a prestação de contas financeira. Garante total conformidade com as resoluções vigentes da universidade, integrando docentes, coordenadores, fundações de apoio e gestores em um fluxo de trabalho único e auditável.",
    description_en:
      "The Integrated Partnership Management System (SIGPAR-UFRPE) is the official platform for Instituto IPÊ at UFRPE, designed to manage the full lifecycle of academic and institutional partnerships. It replaces paper-based workflows and fragmented spreadsheets with automated agreement celebration, goal tracking, approvals, and financial reporting, ensuring full compliance with university regulations for faculty, foundation managers, and directors.",
    isClickable: false,
    link: null,
    arch: "Fullstack · Monorepo · Arquitetura em Camadas",
    arch_en: "Fullstack · Monorepo · Layered Architecture",
    archDetails: [
      "Next.js App Router no frontend com SSR seletivo por rota",
      "NestJS com módulos isolados por domínio (RBAC, Parcerias, Orçamento)",
      "Banco relacional PostgreSQL com Sequelize ORM e migrations versionadas",
      "Containerização via Docker Compose para dev e produção",
      "TypeScript end-to-end para type-safety na API e no client",
    ],
    archDetails_en: [
      "Next.js App Router on frontend with selective route-level SSR",
      "NestJS modular backend isolated by domain boundaries (RBAC, Partnerships, Budgeting)",
      "Relational PostgreSQL database with Sequelize ORM and version-controlled migrations",
      "Full containerization via Docker Compose for environment parity in development and production",
      "End-to-end TypeScript enforcement for contract type-safety across API and frontend client",
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
    tipo_en: "Institutional",
  },
  {
    slug: "amargem",
    image: AmargemImage,
    title: "À Margem",
    summary:
      "Portal oficial do grupo de teatro hip-hop À Margem, construído para resolver a centralização de produções artísticas, agenda e booking profissional.",
    summary_en:
      "Official web platform for the hip-hop theater collective À Margem, centralizing artistic productions, tour schedules, and professional booking.",
    description:
      "O portal do grupo À Margem é a plataforma digital oficial do coletivo de teatro hip-hop. O sistema resolve a dificuldade de centralização de informações artísticas e agendamento de apresentações, reunindo em um só lugar a história do grupo, acervo audiovisual de produções, agenda de espetáculos atualizada em tempo real e formulário otimizado para contratantes. A aplicação foca em alta performance visual, acessibilidade e SEO avançado para maximizar a visibilidade da produção cultural do coletivo e facilitar parcerias profissionais.",
    description_en:
      "The official portal for the hip-hop theater collective À Margem centralizes artistic history, audiovisual show archives, real-time tour schedules, and booking inquiries. Built with Next.js App Router, it focuses on high visual performance, accessibility, and SEO optimization to increase cultural outreach and streamline booking opportunities.",
    isClickable: true,
    link: "https://amargem.com.br/",
    arch: "Fullstack · SSR · Next.js App Router",
    arch_en: "Fullstack · SSR · Next.js App Router",
    archDetails: [
      "Next.js App Router com SSR para SEO e carregamento instantâneo",
      "Prisma ORM com banco PostgreSQL para gestão de agenda e conteúdo",
      "TypeScript end-to-end com validação de tipos na camada de dados",
      "Deploy na Vercel com CI/CD automático via GitHub",
    ],
    archDetails_en: [
      "Next.js App Router utilizing Server-Side Rendering (SSR) for optimal SEO performance",
      "Prisma ORM paired with PostgreSQL for managing schedules and media content",
      "End-to-end TypeScript ensuring data safety across server components and client UI",
      "Vercel deployment with automated CI/CD pipeline triggered via GitHub commits",
    ],
    tecnologias: [
      { label: "Next.js", Icon: SiNextdotjs, layer: "front" },
      { label: "React.js", Icon: FaReact, layer: "front" },
      { label: "Tailwind", Icon: SiTailwindcss, layer: "front" },
      { label: "TypeScript", Icon: SiTypescript, layer: "back" },
      { label: "Prisma", Icon: SiPrisma, layer: "db" },
    ],
    tipo: "Cultural",
    tipo_en: "Cultural",
  },
  {
    slug: "entrelinhas",
    image: EntreLinhasLogo,
    title: "EntreLinhas",
    summary:
      "Plataforma para projeto social de capacitação feminina em costura artesanal em Araçoiaba (PE), apoiado pela organização Aldeias Infantis SOS.",
    summary_en:
      "Digital platform for a social initiative promoting women's handicraft sewing and income generation in Araçoiaba, supported by Aldeias Infantis SOS.",
    description:
      "O EntreLinhas é a plataforma digital oficial de uma iniciativa social voltada à capacitação em costura artesanal e geração de renda para mulheres na cidade de Araçoiaba – Pernambuco, apoiada pela organização Aldeias Infantis SOS. O sistema resolve a limitação de visibilidade e a ausência de um canal comercial profissional do coletivo, servindo como catálogo interativo de produtos sob demanda e ponte institucional para captar parcerias com indústrias têxteis e empresas, promovendo o empreendedorismo feminino e o fortalecimento socioeconômico local.",
    description_en:
      "EntreLinhas is the official digital platform for a social project empowering women in Araçoiaba, Pernambuco through handicraft sewing training and local income generation, supported by Aldeias Infantis SOS. It solves local market reach limitations by acting as an interactive product catalog and B2B partnership gateway for textile industries.",
    isClickable: true,
    link: "https://entrelinhasprojeto.vercel.app/",
    arch: "Fullstack · SSG/SSR · MongoDB + Prisma",
    arch_en: "Fullstack · SSG/SSR · MongoDB + Prisma",
    archDetails: [
      "Next.js com geração híbrida (SSG para conteúdo estático, SSR para formulário)",
      "MongoDB como banco de dados NoSQL via Prisma ORM com schema tipado",
      "TypeScript garantindo consistência de tipos entre client e server",
      "Deploy na Vercel com variáveis de ambiente seguras para a string de conexão",
    ],
    archDetails_en: [
      "Next.js hybrid architecture utilizing SSG for static content and SSR for dynamic forms",
      "MongoDB NoSQL database integrated via typed Prisma ORM schemas",
      "TypeScript ensuring contract integrity between client presentation and backend routes",
      "Vercel cloud hosting with secure environment variable management",
    ],
    tecnologias: [
      { label: "Next.js", Icon: SiNextdotjs, layer: "front" },
      { label: "TypeScript", Icon: SiTypescript, layer: "front" },
      { label: "Tailwind CSS", Icon: SiTailwindcss, layer: "front" },
      { label: "MongoDB", Icon: SiMongodb, layer: "db" },
      { label: "Prisma", Icon: SiPrisma, layer: "db" },
    ],
    tipo: "Institucional",
    tipo_en: "Institutional",
  },
  {
    slug: "letsnote",
    image: LetsNoteLogo,
    title: "LetsNote",
    summary:
      "Aplicativo mobile de tarefas e projetos com persistência offline-first e exportação CSV, resolvendo a dependência de conexão à internet.",
    summary_en:
      "Offline-first mobile productivity application for task and project management with local persistence and CSV data exports.",
    description:
      "O LetsNote é um aplicativo mobile de produtividade projetado para gerenciamento de tarefas e projetos. O aplicativo resolve o problema da perda de acesso a dados e impossibilidade de organização pessoal durante a falta de conectividade, funcionando de forma 100% offline via persistência local no dispositivo (Async Storage) com gerenciamento de estado via Zustand. Oferece criação e acompanhamento de metas, organização por projetos e recurso de exportação de dados em CSV para relatórios e backups externos, combinando interface moderna com alta fluidez mobile.",
    description_en:
      "LetsNote is an offline-first mobile productivity app built with React Native and Expo. It resolves network dependency issues by storing tasks and project goals locally via Async Storage with Zustand state management. Features project tracking, CSV report exports, and NativeWind styling for a fluid cross-platform user experience.",
    isClickable: true,
    link: "https://github.com/webdevmatias/lets-note",
    arch: "Mobile-first · Offline-first · State com Zustand",
    arch_en: "Mobile-first · Offline-first · State with Zustand",
    archDetails: [
      "Expo + React Native com TypeScript para apps iOS e Android a partir de uma única base",
      "Zustand para gerenciamento de estado global leve e sem boilerplate",
      "Async Storage como camada de persistência local garantindo funcionamento offline",
      "Context API segmentado por domínio (tarefas, projetos, configurações)",
      "NativeWind para estilização com a mesma DX do Tailwind CSS",
    ],
    archDetails_en: [
      "Expo + React Native with TypeScript targeting iOS and Android from a single codebase",
      "Zustand for lightweight, boilerplate-free global state management",
      "Async Storage local persistence layer guaranteeing full offline functionality",
      "Domain-segmented Context API for clean state boundaries",
      "NativeWind styling enabling Tailwind CSS developer experience on mobile UI",
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
    tipo_en: "Productivity",
  },
];
