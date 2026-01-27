export default function WhatsAppFloatingButton({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={[
        "fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full",
        "border border-white/15 bg-white px-4 py-3 text-sm font-semibold text-black shadow-soft",
        "transition hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-emerald-400/40",
        "will-change-transform hover:-translate-y-0.5 active:translate-y-0",
        "animate-fadeUp motion-reduce:animate-none"
      ].join(" ")}
      aria-label="Chamar no WhatsApp"
      style={{ animationDelay: "200ms" }}
    >
      {/* ícone inline pra evitar depender de motion; reaproveita seu Icon */}
      <span className="h-5 w-5" aria-hidden="true">
        {/* Mantém o mesmo ícone do seu projeto: */}
        {/* Se preferir, volte a usar <Icon .../> aqui. */}
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 11.5a8.5 8.5 0 0 1-12.7 7.4L4 20l1.2-3.1A8.5 8.5 0 1 1 20 11.5Z" />
          <path d="M9.2 9.3c.2-.4.4-.4.7-.4h.6c.2 0 .4.1.5.4l.7 1.6c.1.3.1.6-.1.8l-.4.4c-.1.1-.2.3-.1.5.2.6.9 1.7 2.1 2.4.5.3.9.4 1.3.3.2-.1.4-.2.5-.3l.5-.6c.2-.2.5-.3.7-.2l1.7.6c.3.1.4.3.4.6 0 .9-.4 1.7-1.1 2.2-.6.4-1.4.6-2.1.4-2.1-.4-4-2.1-5.2-3.4-1.1-1.3-1.9-3-1.8-4.4 0-.6.2-1.2.5-1.7Z" />
        </svg>
      </span>
      WhatsApp
    </a>
  );
}
