"use client";

import { useEffect, useState } from "react";

type AstroGRoute =
  | "sobre"
  | "servicos"
  | "processo"
  | "projeto";

const mobileNavigation = [
  {
    id: "sobre" as AstroGRoute,
    number: "01",
    label: "Sobre",
  },
  {
    id: "servicos" as AstroGRoute,
    number: "02",
    label: "Trabalho",
  },
  {
    id: "processo" as AstroGRoute,
    number: "03",
    label: "Explorar",
  },
  {
    id: "projeto" as AstroGRoute,
    number: "04",
    label: "Começar",
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] =
    useState(false);

  /* =====================================================
     NAVEGAÇÃO
  ====================================================== */

  function goTo(section: AstroGRoute) {
    window.dispatchEvent(
      new CustomEvent("astrog:navigate", {
        detail: section,
      })
    );

    document
      .getElementById("explorar")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

    setMenuOpen(false);
  }

  /* =====================================================
     FECHAR MENU COM ESC
  ====================================================== */

  useEffect(() => {
    function handleEscape(
      event: KeyboardEvent
    ) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  return (
    <header className="absolute inset-x-0 top-0 z-[100]">

      {/* =====================================================
          BARRA PRINCIPAL
      ====================================================== */}

      <div className="relative mx-auto h-24 w-full max-w-7xl px-6 md:px-10 lg:px-12">

        {/* =================================================
            LOGO
        ================================================== */}

        <a
          href="#inicio"
          onClick={() =>
            setMenuOpen(false)
          }
          className="
            absolute
            left-6
            top-1/2
            z-[120]
            -translate-y-1/2
            text-2xl
            font-semibold
            tracking-[0.2em]
            text-white
            md:left-10
            lg:left-12
          "
        >
          Astro
          <span className="text-[#D4AF37]">
            G
          </span>
        </a>

        {/* =================================================
            MENU DESKTOP
        ================================================== */}

        <nav
          className="
            absolute
            right-10
            top-1/2
            hidden
            -translate-y-1/2
            items-center
            gap-9
            text-sm
            md:flex
            lg:right-12
          "
        >
          <button
            type="button"
            onClick={() =>
              goTo("sobre")
            }
            className="text-white/70 transition-colors hover:text-white"
          >
            Sobre
          </button>

          <button
            type="button"
            onClick={() =>
              goTo("servicos")
            }
            className="text-white/70 transition-colors hover:text-white"
          >
            Trabalho
          </button>

          <button
            type="button"
            onClick={() =>
              goTo("processo")
            }
            className="text-white/70 transition-colors hover:text-white"
          >
            Explorar
          </button>

          <button
            type="button"
            onClick={() =>
              goTo("projeto")
            }
            className="
              group
              inline-flex
              items-center
              gap-2
              text-[#D4AF37]
              transition-colors
              hover:text-[#E6C75A]
            "
          >
            Começar

            <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </button>
        </nav>

        {/* =================================================
            BOTÃO ORBITAL MOBILE
        ================================================== */}

        <button
          type="button"
          aria-label={
            menuOpen
              ? "Fechar menu"
              : "Abrir menu"
          }
          aria-expanded={menuOpen}
          onClick={() =>
            setMenuOpen(
              (current) => !current
            )
          }
          className="
            absolute
            right-5
            top-1/2
            z-[130]
            flex
            h-12
            w-12
            -translate-y-1/2
            cursor-pointer
            items-center
            justify-center
            md:hidden
          "
        >

          {/* CÍRCULO PRINCIPAL */}
          <span
            className={`
              absolute
              h-10
              w-10
              rounded-full
              border
              transition-all
              duration-500

              ${
                menuOpen
                  ? "scale-110 border-[#D4AF37]"
                  : "border-[#D4AF37]/55"
              }
            `}
          />

          {/* ÓRBITA */}
          <span
            className={`
              absolute
              h-[20px]
              w-[38px]
              rounded-[50%]
              border
              border-[#D4AF37]/50
              transition-all
              duration-500

              ${
                menuOpen
                  ? "rotate-[38deg] scale-110"
                  : "-rotate-[25deg]"
              }
            `}
          />

          {/* PONTO DOURADO */}
          <span
            className="
              relative
              z-10
              h-2.5
              w-2.5
              rounded-full
              bg-[#D4AF37]
              shadow-[0_0_15px_rgba(212,175,55,0.65)]
            "
          />

        </button>

      </div>

      {/* =====================================================
          OVERLAY MOBILE
      ====================================================== */}

      <button
        type="button"
        aria-label="Fechar menu"
        onClick={() =>
          setMenuOpen(false)
        }
        className={`
          fixed
          inset-0
          z-[90]
          bg-[#020817]/45
          backdrop-blur-[3px]
          transition-opacity
          duration-500
          md:hidden

          ${
            menuOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      />

      {/* =====================================================
          MENU MOBILE
      ====================================================== */}

      <div
        className={`
          fixed
          right-5
          top-[82px]
          z-[110]
          w-[270px]
          overflow-hidden
          border
          border-white/10
          bg-[#071020]/95
          px-7
          py-7
          shadow-[0_30px_90px_rgba(0,0,0,0.45)]
          backdrop-blur-xl
          transition-all
          duration-500
          ease-out
          md:hidden

          ${
            menuOpen
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-4 opacity-0"
          }
        `}
      >

        {/* =================================================
            ÓRBITA DECORATIVA
        ================================================== */}

        <svg
          className="
            pointer-events-none
            absolute
            -right-12
            -top-14
            h-[170px]
            w-[210px]
            opacity-60
          "
          viewBox="0 0 210 170"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M10 145C55 55 125 17 200 47"
            stroke="#D4AF37"
            strokeWidth="1"
          />

          <path
            d="M50 158C92 98 143 78 204 91"
            stroke="rgba(212,175,55,0.20)"
            strokeWidth="1"
          />

          <circle
            cx="132"
            cy="32"
            r="3.5"
            fill="#D4AF37"
          />
        </svg>

        {/* =================================================
            CABEÇALHO
        ================================================== */}

        <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-5">

          <p className="text-[0.58rem] uppercase tracking-[0.32em] text-[#D4AF37]">
            Rota AstroG
          </p>

          <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,0.6)]" />

        </div>

        {/* =================================================
            TRAJETÓRIA
        ================================================== */}

        <div className="relative mt-5">

          {/* LINHA BASE */}
          <div
            className="
              absolute
              left-[7px]
              top-[17px]
              h-[189px]
              w-px
              bg-white/10
            "
          />

          {/* RASTRO DOURADO */}
          <div
            className={`
              absolute
              left-[7px]
              top-[17px]
              w-px
              bg-[#D4AF37]
              transition-[height]
              duration-700
              ease-out

              ${
                menuOpen
                  ? "h-[189px]"
                  : "h-0"
              }
            `}
          />

          {/* =================================================
              ROTAS
          ================================================== */}

          <div className="relative space-y-2">

            {mobileNavigation.map(
              (item, index) => (
                <button
                  type="button"
                  key={item.id}
                  onClick={() =>
                    goTo(item.id)
                  }
                  className="
                    group
                    flex
                    h-[57px]
                    w-full
                    items-center
                    gap-5
                    text-left
                  "
                >

                  {/* PONTO */}
                  <span
                    className="
                      relative
                      z-10
                      flex
                      h-[15px]
                      w-[15px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#D4AF37]/45
                      bg-[#071020]
                      transition-all
                      duration-300
                      group-hover:border-[#D4AF37]
                    "
                  >
                    <span
                      className="
                        h-[5px]
                        w-[5px]
                        rounded-full
                        bg-[#D4AF37]
                        opacity-45
                        transition-all
                        duration-300
                        group-hover:scale-150
                        group-hover:opacity-100
                      "
                    />
                  </span>

                  {/* TEXTO */}
                  <div className="flex flex-1 items-center justify-between">

                    <div>

                      <span className="text-[0.55rem] tracking-[0.28em] text-[#D4AF37]/65">
                        {item.number}
                      </span>

                      <p
                        className="
                          mt-1
                          text-[0.95rem]
                          text-white/65
                          transition-all
                          duration-300
                          group-hover:translate-x-1
                          group-hover:text-white
                        "
                      >
                        {item.label}
                      </p>

                    </div>

                    {index ===
                      mobileNavigation.length -
                        1 && (
                      <span className="text-[#D4AF37]">
                        ↗
                      </span>
                    )}

                  </div>

                </button>
              )
            )}

          </div>

        </div>

        {/* =================================================
            RODAPÉ
        ================================================== */}

        <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-5">

          <span className="text-[0.52rem] uppercase tracking-[0.25em] text-white/25">
            Navegação
          </span>

          <span className="text-[0.52rem] uppercase tracking-[0.25em] text-white/25">
            01 — 04
          </span>

        </div>

      </div>

    </header>
  );
}