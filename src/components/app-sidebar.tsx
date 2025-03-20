"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavAdm } from "@/components/nav-adm";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "João Batista",
    email: "coplamar@coplamar",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Agência Web17",
      logo: GalleryVerticalEnd,
      plan: "Flávio Ribeiro",
    },
    {
      name: "Coplamar",
      logo: AudioWaveform,
      plan: "João Batista",
    },
    {
      name: "Facebook",
      logo: Command,
      plan: "Mark Zukenberg",
    },
    {
      name: "TLDR",
      logo: Command,
      plan: "Carolina Gambarini",
    },
  ],

  navMain: [
    {
      title: "Serviços",
      url: "#",
      icon: SquareTerminal,
      isActive: false,
      items: [
        {
          title: "Consultoria Fiscal e Tributária",
          url: "#",
        },
        {
          title: "Escrituração Contábil",
          url: "#",
        },
        {
          title: "Declaração de Impostos e Obrigações Acessórias",
          url: "#",
        },
        {
          title: "Folha de Pagamento e Encargos Sociais",
          url: "#",
        },
        {
          title: "Consultoria Trabalhista",
          url: "#",
        },
        {
          title: "Planejamento e Análise Financeira",
          url: "#",
        },
        {
          title: "Auditoria Contábil",
          url: "#",
        },
        {
          title: "Planejamento Sucessório",
          url: "#",
        },
        {
          title: "Consultoria em Abertura e Encerramento de Empresas",
          url: "#",
        },
        {
          title: "Regularização de Documentos Fiscais e Contábeis",
          url: "#",
        },
        {
          title: "Assessoria em Recuperação Judicial",
          url: "#",
        },
        {
          title: "Contabilidade para o MEI",
          url: "#",
        },
        {
          title: "Consultoria em Investimentos e Aplicações",
          url: "#",
        },
        {
          title: "Elaboração de Relatórios Gerenciais",
          url: "#",
        },
      ],
    },
    {
      title: "Documentos",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "2025",
          url: "#",
        },
        {
          title: "2024",
          url: "#",
        },
        {
          title: "2023",
          url: "#",
        },
        {
          title: "2022",
          url: "#",
        },
        {
          title: "2021",
          url: "#",
        },
      ],
    },
  ],

  navAdm: [
    {
      title: "Upload Documentação",
      url: "#",
      icon: SquareTerminal,
      isActive: false,
      items: [
        {
          title: "Enviar Documentos",
          url: "#",
        },
      ],
    },
    {
      title: "Configurações",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Geral",
          url: "#",
        },
        {
          title: "Empresas",
          url: "#",
        },
        {
          title: "Usuários",
          url: "#",
        },
        {
          title: "Tipo do Documento",
          url: "#",
        },
      ],
    },
  ],

  projects: [
    {
      name: "Contratos de Serviços",
      url: "#",
      icon: Frame,
    },
    {
      name: "Financeiro",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Processos",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavAdm items={data.navAdm} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
