import Icon from "@/components/Icon";

export default function WhatsAppFloatingButton({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white px-4 py-3 text-sm font-semibold text-black shadow-soft transition hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-emerald-400/40"
      aria-label="Chamar no WhatsApp"
    >
      <Icon name="whatsapp" className="h-5 w-5" />
      WhatsApp
    </a>
  );
}
