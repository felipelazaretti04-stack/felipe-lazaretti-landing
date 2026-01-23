"use client";

import { useMemo, useState } from "react";
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

  return (
    <div className="mx-auto max-w-3xl divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-soft">
      {items.map((it, idx) => {
        const open = openIndex === idx;
        return (
          <button
            key={it.q}
            onClick={() => setOpenIndex(open ? null : idx)}
            className="w-full p-5 text-left"
            aria-expanded={open}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-white">{it.q}</div>
                {open && (
                  <div className="mt-2 text-sm leading-relaxed text-white/70">
                    {it.a}
                  </div>
                )}
              </div>
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
        );
      })}
    </div>
  );
}
