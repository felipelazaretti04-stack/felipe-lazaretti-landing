export default function Icon({
  name,
  className = ""
}: {
  name:
    | "whatsapp"
    | "arrow"
    | "chev"
    | "spark"
    | "clock"
    | "bolt"
    | "globe"
    | "layers"
    | "pin"
    | "cart"
    | "mail";
  className?: string;
}) {
  const common = { className, fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

  switch (name) {
    case "whatsapp":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M20 11.5a8.5 8.5 0 0 1-12.7 7.4L4 20l1.2-3.1A8.5 8.5 0 1 1 20 11.5Z" />
          <path d="M9.2 9.3c.2-.4.4-.4.7-.4h.6c.2 0 .4.1.5.4l.7 1.6c.1.3.1.6-.1.8l-.4.4c-.1.1-.2.3-.1.5.2.6.9 1.7 2.1 2.4.5.3.9.4 1.3.3.2-.1.4-.2.5-.3l.5-.6c.2-.2.5-.3.7-.2l1.7.6c.3.1.4.3.4.6 0 .9-.4 1.7-1.1 2.2-.6.4-1.4.6-2.1.4-2.1-.4-4-2.1-5.2-3.4-1.1-1.3-1.9-3-1.8-4.4 0-.6.2-1.2.5-1.7Z" />
        </svg>
      );
    case "arrow":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M7 17L17 7" />
          <path d="M10 7h7v7" />
        </svg>
      );
    case "chev":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M6 9l6 6 6-6" />
        </svg>
      );
    case "spark":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M12 2l1.2 4.3L17.5 7.5l-4.3 1.2L12 13l-1.2-4.3L6.5 7.5l4.3-1.2L12 2Z" />
          <path d="M19 13l.8 2.8 2.2.7-2.2.7L19 20l-.7-2.8-2.3-.7 2.3-.7L19 13Z" />
        </svg>
      );
    case "clock":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M12 22a10 10 0 1 0-10-10 10 10 0 0 0 10 10Z" />
          <path d="M12 6v6l4 2" />
        </svg>
      );
    case "bolt":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M13 2L3 14h8l-1 8 11-14h-8l0-6Z" />
        </svg>
      );
    case "globe":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M12 22a10 10 0 1 0-10-10 10 10 0 0 0 10 10Z" />
          <path d="M2 12h20" />
          <path d="M12 2a15 15 0 0 1 0 20" />
          <path d="M12 2a15 15 0 0 0 0 20" />
        </svg>
      );
    case "layers":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M12 2l10 6-10 6L2 8l10-6Z" />
          <path d="M2 14l10 6 10-6" />
          <path d="M2 10l10 6 10-6" />
        </svg>
      );
    case "pin":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M12 22s7-4.4 7-11a7 7 0 1 0-14 0c0 6.6 7 11 7 11Z" />
          <path d="M12 11a2.2 2.2 0 1 0-2.2-2.2A2.2 2.2 0 0 0 12 11Z" />
        </svg>
      );
    case "cart":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M6 6h15l-2 9H7L6 6Z" />
          <path d="M6 6l-2-3H2" />
          <path d="M9 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
          <path d="M18 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
        </svg>
      );
    case "mail":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M4 6h16v12H4V6Z" />
          <path d="M4 7l8 6 8-6" />
        </svg>
      );
    default:
      return null;
  }
}
