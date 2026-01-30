// file: app/providers.tsx
"use client";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

// evita o FA injetar CSS via JS (melhor pra Next/SSR)
config.autoAddCss = false;

export default function Providers({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
