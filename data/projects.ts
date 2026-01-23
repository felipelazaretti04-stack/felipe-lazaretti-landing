export type Project = {
  title: string;
  niche: string;
  description: string;
  image: string;
  url?: string;
};

export const projects: Project[] = [
  {
    title: "Projeto Demo 1",
    niche: "Serviços locais",
    description:
      "Landing com foco em orçamento via WhatsApp e prova social, feita para conversão em mobile.",
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1400&q=80"
  },
  {
    title: "Projeto Demo 2",
    niche: "Negócio regional",
    description:
      "Site institucional premium com seções bem estruturadas e copy objetiva para gerar leads.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=80",
    url: "https://example.com"
  },
  {
    title: "Projeto Demo 3",
    niche: "Marca pessoal",
    description:
      "Portfólio moderno com navegação por âncoras, performance e SEO básico.",
    image: "https://picsum.photos/seed/felipe-lz/1400/900"
  }
];
