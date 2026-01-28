// file: components/WhatsAppFloatingButton.tsx
import WhatsAppFA from "@/components/icons/WhatsAppFA";

export default function WhatsAppFloatingButton({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={[
        "fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full",
        "bg-emerald-500 px-4 py-3 text-sm font-semibold text-white shadow-soft",
        "border border-emerald-400/40",
        "transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300/40"
      ].join(" ")}
      aria-label="Chamar no WhatsApp"
    >
      <WhatsAppFA size="md" />
      WhatsApp
    </a>
  );
}
