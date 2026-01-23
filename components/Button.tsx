import Link from "next/link";

type Variant = "primary" | "ghost";

export default function Button({
  href,
  children,
  variant = "primary"
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-blue-400/40 focus:ring-offset-0";

  const styles =
    variant === "primary"
      ? "bg-white text-black hover:bg-white/90"
      : "border border-white/15 bg-white/5 text-white hover:bg-white/8";

  const external = href.startsWith("http");

  const Comp: any = external ? "a" : Link;
  const props = external
    ? { href, target: "_blank", rel: "noreferrer" }
    : { href };

  return (
    <Comp className={`${base} ${styles}`} {...props}>
      {children}
    </Comp>
  );
}
