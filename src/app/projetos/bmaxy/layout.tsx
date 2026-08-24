import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "BMaxy",

  description:
    "Conheça o projeto BMaxy, uma experiência digital desenvolvida pela AstroG para organizar livros, consultoria, ghostwriting e cursos em uma única presença digital.",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "AstroG",

    title: "BMaxy | AstroG",

    description:
      "Uma experiência digital desenvolvida pela AstroG para reunir diferentes caminhos da BMaxy dentro de uma presença digital única.",
  },

  twitter: {
    card: "summary_large_image",

    title: "BMaxy | AstroG",

    description:
      "Uma experiência digital desenvolvida pela AstroG para reunir diferentes caminhos da BMaxy dentro de uma presença digital única.",
  },
};

export default function BmaxyLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}