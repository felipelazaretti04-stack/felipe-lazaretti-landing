import Image from "next/image";
import { projects } from "@/data/projects";
import Icon from "@/components/Icon";

export default function ProjectsGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p) => (
        <div
          key={p.title}
          className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-soft"
        >
          <div className="relative aspect-[16/10] w-full">
            <Image
              src={p.image}
              alt={p.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 33vw"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
          </div>

          <div className="p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-base font-semibold text-white">{p.title}</h3>
                <p className="mt-1 text-sm text-white/70">{p.niche}</p>
              </div>

              {p.url ? (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 rounded-lg border border-white/15 bg-black/30 px-2 py-1 text-xs text-white/80 hover:bg-black/40"
                >
                  Ver <Icon name="arrow" className="h-4 w-4" />
                </a>
              ) : (
                <span className="rounded-lg border border-white/10 bg-black/20 px-2 py-1 text-xs text-white/55">
                  Demo
                </span>
              )}
            </div>

            <p className="mt-3 text-sm leading-relaxed text-white/70">
              {p.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
