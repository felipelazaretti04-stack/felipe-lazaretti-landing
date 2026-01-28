// file: components/WhatsAppFloatingButton.tsx
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

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
        "transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300/40",
        "will-change-transform hover:-translate-y-0.5 active:translate-y-0",
        "animate-fadeUp motion-reduce:animate-none"
      ].join(" ")}
      aria-label="Chamar no WhatsApp"
      style={{ animationDelay: "200ms" }}
    >
      <WhatsAppIcon className="h-5 w-5" />
      WhatsApp
    </a>
  );
}
