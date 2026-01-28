// file: components/WhatsAppFloatingButton.tsx
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
      <span
        className="grid h-6 w-6 place-items-center rounded-full bg-emerald-500 text-white"
        aria-hidden="true"
      >
        <svg viewBox="0 0 32 32" className="h-4 w-4" fill="currentColor">
          <path d="M19.11 17.64c-.28-.14-1.65-.81-1.9-.9-.26-.1-.45-.14-.64.14-.19.28-.74.9-.9 1.08-.17.19-.33.21-.61.07-.28-.14-1.18-.43-2.25-1.38-.83-.74-1.39-1.65-1.56-1.93-.16-.28-.02-.43.12-.57.12-.12.28-.33.42-.5.14-.17.19-.28.28-.47.1-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.47-.64-.48h-.55c-.19 0-.5.07-.76.36-.26.28-1 1-1 2.43 0 1.43 1.02 2.81 1.16 3.01.14.19 2.01 3.07 4.87 4.3.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.65-.67 1.88-1.32.23-.64.23-1.19.16-1.32-.07-.12-.26-.19-.54-.33z" />
          <path d="M26.64 5.36C23.88 2.6 20.2 1.07 16.3 1.07c-8.08 0-14.66 6.58-14.66 14.66 0 2.58.67 5.1 1.95 7.32L1.5 30.93l8.06-2.05c2.16 1.18 4.59 1.8 7.05 1.8h.01c8.08 0 14.66-6.58 14.66-14.66 0-3.9-1.52-7.58-4.28-10.66zM16.61 28.2h-.01c-2.19 0-4.34-.59-6.21-1.7l-.45-.27-4.78 1.22 1.28-4.65-.29-.48a12.16 12.16 0 0 1-1.83-6.48c0-6.73 5.47-12.2 12.2-12.2 3.26 0 6.33 1.27 8.64 3.57a12.14 12.14 0 0 1 3.57 8.63c0 6.73-5.47 12.2-12.12 12.36z" />
        </svg>
      </span>
      WhatsApp
    </a>
  );
}


