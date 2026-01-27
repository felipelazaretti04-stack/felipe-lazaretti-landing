"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Container from "@/components/Container";

const links = [
  { href: "#servicos", id: "servicos", label: "Serviços" },
  { href: "#projetos", id: "projetos", label: "Projetos" },
  { href: "#processo", id: "processo", label: "Processo" },
  { href: "#planos", id: "planos", label: "Planos" },
  { href: "#faq", id: "faq", label: "FAQ" },
  { href: "#contato", id: "contato", label: "Contato" }
];

function AvatarFallback() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-full w-full text-white/70"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 21a8 8 0 0 0-16 0" />
      <path d="M12 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z" />
    </svg>
  );
}

export default function Navbar() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [imgError, setImgError] = useState(false);

  const ids = useMemo(() => links.map((l) => l.id), []);

  useEffect(() => {
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0)
          )[0];

        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      {
        threshold: reduceMotion ? [0.25] : [0.2, 0.35, 0.5],
        rootMargin: "-20% 0px -70% 0px"
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [ids]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <a href="#topo" className="group inline-flex items-center gap-3">
          <span
            className={[
              "relative grid place-items-center overflow-hidden rounded-full border border-white/15 bg-black/30",
              "h-8 w-8 sm:h-9 sm:w-9",
              "transition",
              "group-hover:border-white/25",
              "group-hover:shadow-[0_0_0_1px_rgba(255,255,255,.06),0_0_40px_rgba(59,130,246,.16)]"
            ].join(" ")}
            aria-hidden="true"
          >
            {!imgError ? (
              <Image
                src="/avatar.jpg"
                alt=""
                fill
                sizes="40px"
                className="object-cover"
                onError={() => setImgError(true)}
                priority={false}
              />
            ) : (
              <AvatarFallback />
            )}
          </span>

          <span className="font-semibold tracking-tight text-white">
            Felipe Lazaretti
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const isActive = activeId === l.id;
            return (
              <a
                key={l.href}
                href={l.href}
                className={[
                  "rounded-lg px-3 py-2 text-sm transition",
                  "focus:outline-none focus:ring-2 focus:ring-blue-400/40",
                  isActive
                    ? "text-white bg-white/8 border border-white/10"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                ].join(" ")}
                aria-current={isActive ? "page" : undefined}
              >
                {l.label}
              </a>
            );
          })}
        </nav>

        <a
          href="#contato"
          className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm font-medium text-white transition hover:bg-white/8 focus:outline-none focus:ring-2 focus:ring-blue-400/40"
        >
          Orçamento
        </a>
      </Container>
    </header>
  );
}
