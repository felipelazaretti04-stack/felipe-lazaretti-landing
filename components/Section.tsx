import Container from "@/components/Container";

export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children
}: {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-b border-white/10">
      <Container className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          {eyebrow && (
            <p className="text-sm font-medium text-white/70">{eyebrow}</p>
          )}
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-base leading-relaxed text-white/70">
              {subtitle}
            </p>
          )}
        </div>

        <div className="mt-10">{children}</div>
      </Container>
    </section>
  );
}
