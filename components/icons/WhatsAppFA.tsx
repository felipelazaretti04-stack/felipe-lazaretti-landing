// file: components/icons/WhatsAppFA.tsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const sizeMap = {
  sm: "text-[16px]",
  md: "text-[18px]",
  lg: "text-[20px]"
} as const;

export default function WhatsAppFA({
  size = "sm",
  className = ""
}: {
  size?: keyof typeof sizeMap;
  className?: string;
}) {
  return (
    <FontAwesomeIcon
      icon={faWhatsapp}
      className={[sizeMap[size], "leading-none", className].join(" ")}
      style={{ color: "currentColor" }}
      aria-hidden="true"
    />
  );
}
