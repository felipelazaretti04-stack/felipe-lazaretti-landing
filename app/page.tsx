"use client";
import Navbar from "@/components/Navbar";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Button from "@/components/Button";
import ProjectsGrid from "@/components/ProjectsGrid";
import FAQ from "@/components/FAQ";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import Icon from "@/components/Icon";
import { MotionConfig, motion, useReducedMotion } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/5554997033416";

export default function Page() {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.55,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: reduceMotion ? 0 : 0.08
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 10 },
    show: { opacity: 1, y: 0, transition: { duration: reduceMotion ? 0 : 0.5 } }
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen">
        <Navbar />

        <main>
          {/* HERO */}
          <section
            id="topo"
            className="relative overflow-hidden border-b border-white/10"
          >
            <div className="absolute inset-0 -z-10">
              <div className="absolute left-1/2 top-[-220px] h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
              <div className="absolute right-[-200px] top-[80px] h-[420px] w-[420px] rounded-full bg-emerald-500/10 blur-3xl" />
            </div>

            <Container className="py-20 sm:py-24">
              <motion.div
                className="mx-auto max-w-3xl text-center"
                variants={container}
                initial="hidden"
                animate="show"
              >
                <motion.div
                  variants={item}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 shadow-soft"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Micro-agência • atendimento para todo o Brasil
                </motion.div>

                <motion.h1
                  variants={item}
                  className="mt-6 text-balance text-4xl font-semibold tracking-tight text-white sm:text-6xl"
                >
                  Sites profissionais, rápidos e sob medida.
                </motion.h1>

                <motion.p
                  variants={item}
                  className="mt-5 text-pretty text-base leading-relaxed text-white/75 sm:text-lg"
                >
                  Design limpo, copy clara e presença online forte. Atendimento para
                  todo o Brasil.
                </motion.p>

                <motion.div
                  variants={item}
                  className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
                >
                  <Button href={WHATSAPP_URL} variant="primary">
                    <Icon name="whatsapp" className="h-5 w-5" />
                    Chamar no WhatsApp
                  </Button>

                  <Button href="#projetos" variant="ghost">
                    Ver projetos
                    <Icon name="arrow" className="h-5 w-5" />
                  </Button>
                </motion.div>

                <motion.div
                  variants={item}
                  className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3"
                >
                  <BenefitCard
                    title="Visual premium"
                    desc="Layout moderno, tipografia forte e detalhes que passam confiança."
                    icon="spark"
                    tint="text-blue-300"
                  />
                  <BenefitCard
                    title="Entrega organizada (15 dias)"
                    desc="Processo claro do briefing até a publicação, com alinhamentos rápidos."
                    icon="clock"
                    tint="text-emerald-300"
                  />
                  <BenefitCard
                    title="Site leve e pronto pra crescer"
                    desc="Performance, SEO básico e estrutura preparada para evoluir."
                    icon="bolt"
                    tint="text-indigo-300"
                  />
                </motion.div>
              </motion.div>
            </Container>
          </section>

          {/* SERVIÇOS */}
          <Section id="servicos" eyebrow="Serviços" title="O que eu entrego">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <ServiceCard
                title="Site institucional"
                desc="Presença profissional para empresas e serviços, com páginas essenciais e CTA claro."
                icon="globe"
              />
              <ServiceCard
                title="Landing pages"
                desc="Uma página focada em conversão: oferta, prova, FAQ e contato direto no Whats."
                icon="layers"
              />
              <ServiceCard
                title="Presença no Google (SEO local)"
                desc="Estrutura e conteúdo para ser encontrado por quem procura na sua região."
                icon="pin"
              />
              <ServiceCard
                title="E-commerce (sob consulta)"
                desc="A partir de R$ 6.000. Catálogo, carrinho e checkout conforme necessidade."
                icon="cart"
              />
            </div>
          </Section>

          {/* PROJETOS */}
          <Section
            id="projetos"
            eyebrow="Projetos"
            title="Alguns trabalhos e demos"
            subtitle="Itens vindos de um arquivo local: edite em /data/projects.ts."
          >
            <ProjectsGrid />
          </Section>

          {/* PROCESSO */}
          <Section
            id="processo"
            eyebrow="Processo"
            title="Rápido, organizado e sem ruído"
            subtitle="Você sabe exatamente o que acontece em cada etapa."
          >
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
              <StepCard
                step="01"
                title="Briefing"
                desc="Entendo seu negócio, objetivo e público. Definimos referências, conteúdo e CTA."
              />
              <StepCard
                step="02"
                title="Layout + copy"
                desc="Estruturo a página com textos claros e blocos pensados para conversão."
              />
              <StepCard
                step="03"
                title="Desenvolvimento + publicação"
                desc="Implemento, ajusto responsivo/performance e publico. Você recebe tudo organizado."
              />
            </div>
          </Section>

          {/* PLANOS */}
          <Section
            id="planos"
            eyebrow="Planos"
            title="Escolha o caminho — o orçamento é sob medida"
            subtitle="Sem preço fixo aqui: eu avalio escopo, prazo e complexidade. Pagamento: 50% início / 50% entrega."
          >
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
              <PlanCard
                name="Essencial"
                desc="Site enxuto e premium, ideal para começar forte."
                bullets={[
                  "1–3 seções/páginas essenciais (conforme necessidade)",
                  "Design premium responsivo",
                  "CTA e WhatsApp bem posicionados",
                  "SEO básico (title, description, OG)"
                ]}
              />

              <PlanCard
                name="Completo"
                highlight
                desc="Mais páginas + estrutura + base para SEO local quando fizer sentido."
                bullets={[
                  "Arquitetura e navegação mais completa",
                  "Conteúdo e seções para autoridade (provas, processos, FAQ)",
                  "SEO local básico (estrutura e boas práticas)",
                  "Mais flexibilidade de expansão"
                ]}
              />

              <PlanCard
                name="Manutenção (opcional)"
                desc="Para manter tudo redondo depois que o site está no ar."
                bullets={[
                  "Ajustes leves e atualizações pontuais",
                  "Revisões de conteúdo (quando necessário)",
                  "Acompanhamento básico de performance",
                  "R$ 149/mês"
                ]}
                footer="Orçamento sob medida no Whats."
              />
            </div>

            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={WHATSAPP_URL} variant="primary">
                <Icon name="whatsapp" className="h-5 w-5" />
                Pedir orçamento no Whats
              </Button>
              <p className="text-sm text-white/65">
                Condição padrão:{" "}
                <span className="text-white/85">50% início / 50% entrega</span>.
              </p>
            </div>
          </Section>

          {/* FAQ */}
          <Section
            id="faq"
            eyebrow="FAQ"
            title="Perguntas frequentes"
            subtitle="Respostas rápidas para acelerar seu orçamento."
          >
            <FAQ />
          </Section>

          {/* CONTATO */}
          <Section
            id="contato"
            eyebrow="Contato"
            title="Vamos tirar sua ideia do papel?"
            subtitle="Me chama no WhatsApp com seu nicho e o que você quer vender/atrair. Eu retorno com um plano de ataque."
          >
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-soft lg:col-span-2">
                <h3 className="text-lg font-semibold text-white">
                  Atendimento direto, rápido e objetivo
                </h3>
                <p className="mt-2 text-white/70">
                  Quanto mais contexto você mandar, mais preciso fica o orçamento:
                  <span className="text-white/85">
                    {" "}
                    tipo de site, objetivo, cidade/região, referência e prazo.
                  </span>
                </p>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <Button href={WHATSAPP_URL} variant="primary">
                    <Icon name="whatsapp" className="h-5 w-5" />
                    Chamar no WhatsApp
                  </Button>
                  <Button href="#projetos" variant="ghost">
                    Ver projetos
                    <Icon name="arrow" className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-soft">
                <div className="flex items-center gap-2 text-white">
                  <Icon name="mail" className="h-5 w-5 text-white/80" />
                  <h3 className="text-lg font-semibold">E-mail</h3>
                </div>

                <p className="mt-2 text-sm text-white/70">
                  Troque este e-mail no código:
                </p>
                <p className="mt-1 break-all rounded-xl border border-white/10 bg-black/30 p-3 text-sm text-white/85">
                  seuemail@exemplo.com
                </p>

                <p className="mt-4 text-sm text-white/70">
                  Melhor canal para orçamento: WhatsApp.
                </p>
              </div>
            </div>
          </Section>
        </main>

        <footer className="border-t border-white/10 py-10">
          <Container className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p className="text-sm text-white/60">
              © 2026 Felipe Lazaretti. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <a className="text-white/70 hover:text-white" href="#servicos">
                Serviços
              </a>
              <a className="text-white/70 hover:text-white" href="#projetos">
                Projetos
              </a>
              <a className="text-white/70 hover:text-white" href="#contato">
                Contato
              </a>
            </div>
          </Container>
        </footer>

        <WhatsAppFloatingButton href={WHATSAPP_URL} />
      </div>
    </MotionConfig>
  );
}

function BenefitCard({
  title,
  desc,
  icon,
  tint
}: {
  title: string;
  desc: string;
  icon: Parameters<typeof Icon>[0]["name"];
  tint: string;
}) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-4 text-left shadow-soft transition will-change-transform hover:-translate-y-1 hover:border-white/15 hover:bg-white/7 hover:shadow-glow">
      <div className="flex items-center gap-2 text-white">
        <Icon name={icon} className={`h-5 w-5 ${tint}`} />
        <span className="font-medium">{title}</span>
      </div>
      <p className="mt-2 text-sm text-white/70">{desc}</p>
      <div className="mt-3 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}

function ServiceCard({
  title,
  desc,
  icon
}: {
  title: string;
  desc: string;
  icon: Parameters<typeof Icon>[0]["name"];
}) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-5 shadow-soft transition will-change-transform hover:-translate-y-1 hover:border-white/15 hover:bg-white/7 hover:shadow-glow">
      <div className="flex items-center gap-2 text-white">
        <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-black/30 transition group-hover:border-white/15">
          <Icon name={icon} className="h-5 w-5 text-white/85" />
        </div>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-white/70">{desc}</p>
      <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <p className="mt-4 text-xs text-white/55">
        Orçamento sob medida no Whats • 50% início / 50% entrega
      </p>
    </div>
  );
}

function StepCard({
  step,
  title,
  desc
}: {
  step: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-soft transition will-change-transform hover:-translate-y-1 hover:border-white/15 hover:bg-white/7 hover:shadow-glow">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-white/80">{step}</span>
        <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/70">{desc}</p>
    </div>
  );
}

function PlanCard({
  name,
  desc,
  bullets,
  highlight,
  footer
}: {
  name: string;
  desc: string;
  bullets: string[];
  highlight?: boolean;
  footer?: string;
}) {
  return (
    <div
      className={[
        "relative rounded-2xl border bg-white/5 p-6 shadow-soft transition will-change-transform",
        "hover:-translate-y-1 hover:bg-white/7 hover:shadow-glow",
        highlight ? "border-white/20" : "border-white/10 hover:border-white/15"
      ].join(" ")}
    >
      {highlight && (
        <div className="absolute -top-3 left-6 rounded-full border border-white/15 bg-black/60 px-3 py-1 text-xs text-white/80">
          Recomendado
        </div>
      )}

      <h3 className="text-lg font-semibold text-white">{name}</h3>
      <p className="mt-2 text-sm text-white/70">{desc}</p>

      <div className="mt-5 space-y-2">
        {bullets.map((b) => (
          <div key={b} className="flex gap-2 text-sm text-white/75">
            <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-blue-300/80" />
            <span>{b}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-xl border border-white/10 bg-black/30 p-4 text-sm text-white/70">
        {footer ?? "Orçamento sob medida no Whats."}
      </div>
    </div>
  );
}
