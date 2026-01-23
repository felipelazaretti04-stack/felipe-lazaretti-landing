import Container from "@/components/Container";

const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#projetos", label: "Projetos" },
  { href: "#processo", label: "Processo" },
  { href: "#planos", label: "Planos" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <a href="#topo" className="font-semibold tracking-tight text-white">
          Felipe Lazaretti
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/70 transition hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm font-medium text-white hover:bg-white/8"
        >
          Orçamento
        </a>
      </Container>
    </header>
  );
}
