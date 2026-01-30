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

];
