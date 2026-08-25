import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/*
  Enquanto estivermos trabalhando localmente,
  usamos localhost.

  Quando publicarmos o site, configuramos
  NEXT_PUBLIC_SITE_URL com o domínio oficial.
*/
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  verification: {
  google: "Q6ZW8tMXZGfoyOq2Lst65wTUyhHPJEPnew8J9mQ3epY",
  },

  title: {
    default:
      "AstroG | Business Intelligence & Soluções Digitais",
    template: "%s | AstroG",
  },

  description:
    "Soluções digitais, Business Intelligence e desenvolvimento web pensados para transformar necessidades reais em resultados.",

  applicationName: "AstroG",

  keywords: [
    "AstroG",
    "Business Intelligence",
    "Power BI",
    "Dashboards",
    "Desenvolvimento Web",
    "Sistemas",
    "Soluções Digitais",
    "Tecnologia",
  ],

  authors: [
    {
      name: "AstroG",
    },
  ],

  creator: "AstroG",

  publisher: "AstroG",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "AstroG",

    title:
      "AstroG | Business Intelligence & Soluções Digitais",

    description:
      "Soluções digitais, Business Intelligence e desenvolvimento web pensados para transformar necessidades reais em resultados.",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "AstroG | Business Intelligence & Soluções Digitais",

    description:
      "Soluções digitais, Business Intelligence e desenvolvimento web pensados para transformar necessidades reais em resultados.",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}