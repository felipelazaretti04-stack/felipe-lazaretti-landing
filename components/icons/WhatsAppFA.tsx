// file: components/icons/WhatsAppFA.tsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function WhatsAppFA({
  className = "h-5 w-5"
}: {
  className?: string;
}) {
  // FontAwesomeIcon usa `style` pra tamanho; vamos mapear Tailwind -> em
  return (
    <FontAwesomeIcon
      icon={faWhatsapp}
      className={className}
      // garante que pega a cor do texto (premium)
      style={{ color: "currentColor" }}
      aria-hidden="true"
    />
  );
}
