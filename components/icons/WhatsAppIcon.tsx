// file: components/icons/WhatsAppIcon.tsx
export default function WhatsAppIcon({
  className = "h-5 w-5"
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 11.5a7.9 7.9 0 0 1-11.9 6.9L4 19l.7-3.7A7.9 7.9 0 1 1 20 11.5Z" />
      <path d="M9.35 9.35c.2 3.05 2.3 5.1 5.35 5.3" />
      <path d="M9.8 11.35c.45.85 1.15 1.55 2 2" />
      <path d="M14.1 14.2l1.45-.35c.35-.08.7.1.85.42l.35.8" />
    </svg>
  );
}
