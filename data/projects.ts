export type Project = {
  title: string;
  niche: string;
  description: string;
  image: string;
  url?: string;
};

export const projects: Project[] = [
  {
    title: "Dorigon Panetteria",
    niche: "Panificadora / Alimentação",
    description: "Site institucional com visual premium, foco em presença e contato.",
    image: "/projects/doriganpanetteria.jpeg",
    url: "https://dorigonpanetteria.com/"
  },
  {
    title: "Real Papelaria",
    niche: "E-commerce (papelaria)",
    description: "E-commerce completo publicado, com catálogo e fluxo de compra.",
    image: "/projects/realpapelaria.jpg",
    url: "https://realpapelaria.page.gd/"
  },

  {
    title: "Leo Barber Shop",
    niche: "Barbearia / Identidade Visual",
    description: "Site institucional para barbearia com agendamento e galeria.",
    image: "/projects/leo.jpg",
    url: "https://leo-barber-shop.vercel.app/",
  },
  {
    title: "Lendas da Velocidade",
    niche: "Landing / Automotive",
    description: "Landing imersiva sobre supercarros com navegação por seções.",
    image: "/projects/lendas-da-velocidade.png",
    url: "https://lendas-da-velocidade.vercel.app/",
  },
  {
    title: "Loja Pro",
    niche: "E-commerce",
    description: "Loja online com catálogo e checkout integrado.",
    image: "/projects/loja-pro.png",
    url: "https://cuias-lazaretti.vercel.app/",
  },

];
