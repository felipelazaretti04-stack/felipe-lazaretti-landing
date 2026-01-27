"use client";

import { useMemo, useRef, useState } from "react";
import Icon from "@/components/Icon";

type Item = { q: string; a: string };

export default function FAQ() {
  const items = useMemo<Item[]>(
    () => [
      {
        q: "Qual é o prazo de entrega?",
        a: "Em média ~15 dias, variando conforme escopo, quantidade de páginas e agilidade no envio do conteúdo."
      },
      {
        q: "O que eu preciso enviar para começar?",
        a: "Logo (se tiver), cores/referências, fotos e textos. Se você não tiver tudo pronto, eu ajudo a organizar e estruturar."
      },
      {
        q: "Você cuida de domínio e hospedagem?",
        a: "Sim. Eu posso orientar na compra do domínio e configurar o deploy (ex.: Vercel). Hospedagem e domínio geralmente ficam no nome do cliente."
      },
      {
        q: "Tem manutenção?",
        a: "Sim, opcional. Inclui pequenas atualizações e suporte básico para manter o site sempre em ordem."
      },
      {
        q: "Quais formas de pagamento?",
        a: "Pix e cartão (quando aplicável). Condição padrão: 50% no início e 50% na entrega."
      },
      {
        q: "Atende o Brasil inteiro?",
        a: "Sim. Atendimento 100% remoto para todo o Brasil."
      }
    ],
    []
  );

  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const contentRefs = useRef<Array<HTMLDivElement | null>>([]);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-soft">
      {items.map((it, idx) => {
        const open = openIndex === idx;
        const contentEl = contentRefs.current[idx];
        const maxH = open ? `${contentEl?.scrollHeight ?? 0}px` : "0px";

        return (
          <div key={it.q}>
            <button
              onClick={() => setOpenIndex(open ? null : idx)}
              className="w-full p-5 text-left focus:outline-none focus:ring-2 focus:ring-blue-400/40"
              aria-expanded={open}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="text-sm font-semibold text-white">{it.q}</div>

                <span
                  className={[
                    "mt-0.5 grid h-8 w-8 flex-none place-items-center rounded-lg border border-white/10 bg-black/20 transition",
                    open ? "rotate-180" : "rotate-0"
                  ].join(" ")}
                  aria-hidden="true"
                >
                  <Icon name="chev" className="h-4 w-4 text-white/75" />
                </span>
              </div>
            </button>

            <div
              data-accordion-content
              style={{ maxHeight: maxH, opacity: open ? 1 : 0 }}
              className="px-5"
              aria-hidden={!open}
            >
              <div
                ref={(el) => {
                  contentRefs.current[idx] = el;
                }}
                className="pb-5 text-sm leading-relaxed text-white/70"
              >
                {it.a}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
