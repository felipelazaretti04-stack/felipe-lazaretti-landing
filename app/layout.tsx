// file: app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";

const siteName = "Felipe Lazaretti";
const siteDescription =
  "Sites profissionais, rápidos e sob medida. Design limpo, copy clara e presença online forte. Atendimento para todo o Brasil.";

export const metadata: Metadata = {
  metadataBase: new URL("https://felipe-lazaretti-landing.vercel.app"), // troque quando tiver domínio
  title: {
    default: `${siteName} — Sites profissionais`,
    template: `%s — ${siteName}`
  },
  description: siteDescription,
  openGraph: {
    title: `${siteName} — Sites profissionais, rápidos e sob medida.`,
    description: siteDescription,
    type: "website",
    locale: "pt_BR",
    siteName: siteName
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} — Sites profissionais`,
    description: siteDescription
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
