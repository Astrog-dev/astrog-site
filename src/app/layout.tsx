import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
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
      </body>
    </html>
  );
}