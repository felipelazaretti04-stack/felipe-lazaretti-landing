// file: components/Navbar.tsx
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

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      {open ? (
        <>
          <path d="M6 6l12 12" />
          <path d="M18 6L6 18" />
        </>
      ) : (
        <>
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </>
      )}
    </svg>
  );
}

export default function Navbar() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [imgError, setImgError] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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

  // Fecha menu com ESC
  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  // Trava scroll quando menu abre (leve)
  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  const close = () => setMobileOpen(false);

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

        {/* Desktop nav */}
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
                    : "text-white/70 hover:text-white hover:bg-black/40 sm:bg-black/40 sm:bg-white/5 backdrop-blur backdrop-blur"
                ].join(" ")}
                aria-current={isActive ? "page" : undefined}
              >
                {l.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contato"
            className="rounded-xl border border-white/15 bg-black/40 sm:bg-black/40 sm:bg-white/5 backdrop-blur backdrop-blur px-3 py-2 text-sm font-medium text-white transition hover:bg-white/8 focus:outline-none focus:ring-2 focus:ring-blue-400/40"
          >
            Orçamento
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden rounded-xl border border-white/15 bg-black/40 sm:bg-black/40 sm:bg-white/5 backdrop-blur backdrop-blur p-2 text-white transition hover:bg-white/8 focus:outline-none focus:ring-2 focus:ring-blue-400/40"
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <HamburgerIcon open={mobileOpen} />
          </button>
        </div>
      </Container>

      {/* Mobile overlay + panel */}
      {mobileOpen && (
        <div className="md:hidden">
          <button
            aria-label="Fechar menu"
            onClick={close}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          />

          <div className="fixed left-0 right-0 top-16 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
            <Container className="py-3">
              <div className="grid gap-1">
                {links.map((l) => {
                  const isActive = activeId === l.id;
                  return (
                    <a
                      key={l.href}
                      href={l.href}
                      onClick={close}
                      className={[
                        "rounded-xl px-4 py-3 text-sm transition",
                        "focus:outline-none focus:ring-2 focus:ring-blue-400/40",
                        isActive
                          ? "text-white bg-white/8 border border-white/10"
                          : "text-white/80 hover:text-white hover:bg-black/40 sm:bg-black/40 sm:bg-white/5 backdrop-blur backdrop-blur"
                      ].join(" ")}
                    >
                      {l.label}
                    </a>
                  );
                })}
                <a
                  href="#topo"
                  onClick={close}
                  className="rounded-xl px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-black/40 sm:bg-black/40 sm:bg-white/5 backdrop-blur backdrop-blur transition focus:outline-none focus:ring-2 focus:ring-blue-400/40"
                >
                  Voltar ao topo
                </a>
              </div>
            </Container>
          </div>
        </div>
      )}
    </header>
  );
}


