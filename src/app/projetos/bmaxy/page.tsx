"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type ProjectRoute =
  | "origem"
  | "estrutura"
  | "interface"
  | "entrega";

const routes = [
  {
    id: "origem" as ProjectRoute,
    number: "01",
    label: "Origem",
  },
  {
    id: "estrutura" as ProjectRoute,
    number: "02",
    label: "Estrutura",
  },
  {
    id: "interface" as ProjectRoute,
    number: "03",
    label: "Interface",
  },
  {
    id: "entrega" as ProjectRoute,
    number: "04",
    label: "Entrega",
  },
];

export default function BmaxyProject() {
  const [activeRoute, setActiveRoute] =
    useState<ProjectRoute>("origem");

  const activeIndex = routes.findIndex(
    (route) => route.id === activeRoute
  );

  /*
    Progresso da trajetória:

    01 = início
    02 = 33%
    03 = 66%
    04 = 100%
  */
  const orbitProgress =
    activeIndex === 0
      ? 0
      : activeIndex === 1
        ? 33
        : activeIndex === 2
          ? 66
          : 100;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F4F0E7] text-[#0B132B]">

      {/* =====================================================
          LINHA SUPERIOR
      ====================================================== */}

      <div className="absolute left-0 right-0 top-[94px] h-px bg-[#0B132B]/10" />

      {/* =====================================================
          HEADER
      ====================================================== */}

      <header className="relative z-[80] mx-auto flex h-24 w-full max-w-[1500px] items-center justify-between px-6 md:px-10 lg:px-14">
        <Link
          href="/"
          className="
            group
            inline-flex
            items-center
            gap-3
            text-sm
            text-[#0B132B]/55
            transition-colors
            duration-300
            hover:text-[#0B132B]
          "
        >
          <span
            className="
              text-[#A78722]
              transition-transform
              duration-300
              group-hover:-translate-x-1
            "
          >
            ←
          </span>

          AstroG
        </Link>

        <p className="text-[0.58rem] uppercase tracking-[0.28em] text-[#0B132B]/30 sm:text-xs sm:tracking-[0.35em]">
          Arquivo 01 / BMaxy
        </p>
      </header>

      {/* =====================================================
          MINI ÓRBITA MOBILE
      ====================================================== */}

      <div className="relative z-40 mx-auto w-full px-6 pt-7 lg:hidden">
        <div className="mx-auto max-w-[350px]">

          {/* Título da navegação */}
          <div className="mb-2 flex items-center justify-between">
            <p className="text-[0.58rem] uppercase tracking-[0.28em] text-[#A78722]">
              Rota do projeto
            </p>

            <p className="text-[0.58rem] uppercase tracking-[0.25em] text-[#0B132B]/30">
              {String(activeIndex + 1).padStart(2, "0")} / 04
            </p>
          </div>

          {/* Órbita */}
          <div className="relative h-[175px] w-full">

            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 350 175"
              fill="none"
              aria-hidden="true"
            >
              {/* Caminho completo */}
              <path
                d="
                  M38 38
                  C52 76 70 108 98 123
                  C140 145 210 145 252 123
                  C281 108 298 76 312 38
                "
                stroke="rgba(11,19,43,0.14)"
                strokeWidth="1.2"
                pathLength="100"
              />

              {/* Rastro dourado */}
              <path
                d="
                  M38 38
                  C52 76 70 108 98 123
                  C140 145 210 145 252 123
                  C281 108 298 76 312 38
                "
                stroke="#D4AF37"
                strokeWidth="1.7"
                pathLength="100"
                strokeDasharray={`${orbitProgress} 100`}
                className="transition-all duration-700 ease-out"
              />

              {/* Linha secundária */}
              <path
                d="
                  M74 42
                  C98 76 117 96 145 104
                  C176 114 213 104 238 85
                  C255 72 266 55 274 39
                "
                stroke="rgba(212,175,55,0.18)"
                strokeWidth="1"
              />
            </svg>

            {/* ===============================================
                01 — ORIGEM
            ================================================ */}

            <button
              type="button"
              onClick={() => setActiveRoute("origem")}
              className="
                absolute
                left-[3px]
                top-[15px]
                z-20
                flex
                cursor-pointer
                flex-col
                items-center
                text-center
              "
            >
              <span
                className={`
                  h-4
                  w-4
                  rounded-full
                  border
                  transition-all
                  duration-500

                  ${
                    activeIndex >= 0
                      ? "border-[#D4AF37] bg-[#D4AF37] shadow-[0_0_14px_rgba(212,175,55,0.28)]"
                      : "border-[#0B132B]/25 bg-[#F4F0E7]"
                  }
                `}
              />

              <span className="mt-2 text-[0.55rem] tracking-[0.25em] text-[#A78722]">
                01
              </span>

              <span
                className={`
                  mt-1 text-[0.68rem] transition-colors

                  ${
                    activeRoute === "origem"
                      ? "font-medium text-[#0B132B]"
                      : "text-[#0B132B]/40"
                  }
                `}
              >
                Origem
              </span>
            </button>

            {/* ===============================================
                02 — ESTRUTURA
            ================================================ */}

            <button
              type="button"
              onClick={() => setActiveRoute("estrutura")}
              className="
                absolute
                bottom-[0px]
                left-[65px]
                z-20
                flex
                cursor-pointer
                flex-col
                items-center
                text-center
              "
            >
              <span
                className={`
                  h-4
                  w-4
                  rounded-full
                  border
                  transition-all
                  duration-500

                  ${
                    activeIndex >= 1
                      ? "border-[#D4AF37] bg-[#D4AF37] shadow-[0_0_14px_rgba(212,175,55,0.28)]"
                      : "border-[#0B132B]/25 bg-[#F4F0E7]"
                  }
                `}
              />

              <span className="mt-2 text-[0.55rem] tracking-[0.25em] text-[#A78722]">
                02
              </span>

              <span
                className={`
                  mt-1 text-[0.68rem] transition-colors

                  ${
                    activeRoute === "estrutura"
                      ? "font-medium text-[#0B132B]"
                      : "text-[#0B132B]/40"
                  }
                `}
              >
                Estrutura
              </span>
            </button>

            {/* ===============================================
                03 — INTERFACE
            ================================================ */}

            <button
              type="button"
              onClick={() => setActiveRoute("interface")}
              className="
                absolute
                bottom-[0px]
                right-[65px]
                z-20
                flex
                cursor-pointer
                flex-col
                items-center
                text-center
              "
            >
              <span
                className={`
                  h-4
                  w-4
                  rounded-full
                  border
                  transition-all
                  duration-500

                  ${
                    activeIndex >= 2
                      ? "border-[#D4AF37] bg-[#D4AF37] shadow-[0_0_14px_rgba(212,175,55,0.28)]"
                      : "border-[#0B132B]/25 bg-[#F4F0E7]"
                  }
                `}
              />

              <span className="mt-2 text-[0.55rem] tracking-[0.25em] text-[#A78722]">
                03
              </span>

              <span
                className={`
                  mt-1 text-[0.68rem] transition-colors

                  ${
                    activeRoute === "interface"
                      ? "font-medium text-[#0B132B]"
                      : "text-[#0B132B]/40"
                  }
                `}
              >
                Interface
              </span>
            </button>

            {/* ===============================================
                04 — ENTREGA
            ================================================ */}

            <button
              type="button"
              onClick={() => setActiveRoute("entrega")}
              className="
                absolute
                right-[3px]
                top-[15px]
                z-20
                flex
                cursor-pointer
                flex-col
                items-center
                text-center
              "
            >
              <span
                className={`
                  h-4
                  w-4
                  rounded-full
                  border
                  transition-all
                  duration-500

                  ${
                    activeIndex >= 3
                      ? "border-[#D4AF37] bg-[#D4AF37] shadow-[0_0_14px_rgba(212,175,55,0.28)]"
                      : "border-[#0B132B]/25 bg-[#F4F0E7]"
                  }
                `}
              />

              <span className="mt-2 text-[0.55rem] tracking-[0.25em] text-[#A78722]">
                04
              </span>

              <span
                className={`
                  mt-1 text-[0.68rem] transition-colors

                  ${
                    activeRoute === "entrega"
                      ? "font-medium text-[#0B132B]"
                      : "text-[#0B132B]/40"
                  }
                `}
              >
                Entrega
              </span>
            </button>

          </div>
        </div>
      </div>

      {/* =====================================================
          ÓRBITA DESKTOP
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-[28px]
          top-[135px]
          z-[60]
          hidden
          h-[620px]
          w-[460px]
          lg:block
        "
      >

        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 460 620"
          fill="none"
          aria-hidden="true"
        >

          {/* TRAJETÓRIA COMPLETA */}
          <path
            d="
              M70 90
              C230 40 350 100 330 235
              C315 320 375 340 345 400
              C315 470 255 515 170 540
            "
            stroke="rgba(11,19,43,0.14)"
            strokeWidth="1.3"
            pathLength="100"
          />

          {/* RASTRO DOURADO */}
          <path
            d="
              M70 90
              C230 40 350 100 330 235
              C315 320 375 340 345 400
              C315 470 255 515 170 540
            "
            stroke="#D4AF37"
            strokeWidth="1.7"
            pathLength="100"
            strokeDasharray={`${orbitProgress} 100`}
            className="transition-all duration-700 ease-out"
          />

          {/* ÓRBITA SECUNDÁRIA */}
          <path
            d="
              M125 140
              C240 100 305 160 295 245
              C285 315 325 350 300 415
              C282 460 245 490 205 505
            "
            stroke="rgba(212,175,55,0.20)"
            strokeWidth="1"
          />

        </svg>

        {/* ===============================================
            01 — ORIGEM
        ================================================ */}

        <button
          type="button"
          aria-label="Abrir origem do projeto"
          onClick={() => setActiveRoute("origem")}
          className="
            pointer-events-auto
            absolute
            left-[58px]
            top-[74px]
            z-[80]
            flex
            cursor-pointer
            items-center
            gap-4
            text-left
          "
        >
          <span
            className={`
              h-4
              w-4
              shrink-0
              rounded-full
              border
              transition-all
              duration-500

              ${
                activeIndex >= 0
                  ? "border-[#D4AF37] bg-[#D4AF37] shadow-[0_0_16px_rgba(212,175,55,0.30)]"
                  : "border-[#0B132B]/25 bg-[#F4F0E7]"
              }
            `}
          />

          <span>
            <span className="block text-[0.6rem] tracking-[0.3em] text-[#A78722]">
              01
            </span>

            <span
              className={`
                mt-1
                block
                text-sm
                transition-colors
                duration-300

                ${
                  activeRoute === "origem"
                    ? "font-medium text-[#0B132B]"
                    : "text-[#0B132B]/40 hover:text-[#0B132B]"
                }
              `}
            >
              Origem
            </span>
          </span>
        </button>

        {/* ===============================================
            02 — ESTRUTURA
        ================================================ */}

        <button
          type="button"
          aria-label="Abrir estrutura do projeto"
          onClick={() => setActiveRoute("estrutura")}
          className="
            pointer-events-auto
            absolute
            left-[318px]
            top-[219px]
            z-[80]
            flex
            cursor-pointer
            items-center
            gap-4
            text-left
          "
        >
          <span
            className={`
              h-4
              w-4
              shrink-0
              rounded-full
              border
              transition-all
              duration-500

              ${
                activeIndex >= 1
                  ? "border-[#D4AF37] bg-[#D4AF37] shadow-[0_0_16px_rgba(212,175,55,0.30)]"
                  : "border-[#0B132B]/25 bg-[#F4F0E7]"
              }
            `}
          />

          <span>
            <span className="block text-[0.6rem] tracking-[0.3em] text-[#A78722]">
              02
            </span>

            <span
              className={`
                mt-1
                block
                text-sm
                transition-colors
                duration-300

                ${
                  activeRoute === "estrutura"
                    ? "font-medium text-[#0B132B]"
                    : "text-[#0B132B]/40 hover:text-[#0B132B]"
                }
              `}
            >
              Estrutura
            </span>
          </span>
        </button>

        {/* ===============================================
            03 — INTERFACE
        ================================================ */}

        <button
          type="button"
          aria-label="Abrir interface do projeto"
          onClick={() => setActiveRoute("interface")}
          className="
            pointer-events-auto
            absolute
            left-[333px]
            top-[384px]
            z-[80]
            flex
            cursor-pointer
            items-center
            gap-4
            text-left
          "
        >
          <span
            className={`
              h-4
              w-4
              shrink-0
              rounded-full
              border
              transition-all
              duration-500

              ${
                activeIndex >= 2
                  ? "border-[#D4AF37] bg-[#D4AF37] shadow-[0_0_16px_rgba(212,175,55,0.30)]"
                  : "border-[#0B132B]/25 bg-[#F4F0E7]"
              }
            `}
          />

          <span>
            <span className="block text-[0.6rem] tracking-[0.3em] text-[#A78722]">
              03
            </span>

            <span
              className={`
                mt-1
                block
                text-sm
                transition-colors
                duration-300

                ${
                  activeRoute === "interface"
                    ? "font-medium text-[#0B132B]"
                    : "text-[#0B132B]/40 hover:text-[#0B132B]"
                }
              `}
            >
              Interface
            </span>
          </span>
        </button>

        {/* ===============================================
            04 — ENTREGA
        ================================================ */}

        <button
          type="button"
          aria-label="Abrir entrega do projeto"
          onClick={() => setActiveRoute("entrega")}
          className="
            pointer-events-auto
            absolute
            left-[158px]
            top-[524px]
            z-[80]
            flex
            cursor-pointer
            items-center
            gap-4
            text-left
          "
        >
          <span
            className={`
              h-4
              w-4
              shrink-0
              rounded-full
              border
              transition-all
              duration-500

              ${
                activeIndex >= 3
                  ? "border-[#D4AF37] bg-[#D4AF37] shadow-[0_0_16px_rgba(212,175,55,0.30)]"
                  : "border-[#0B132B]/25 bg-[#F4F0E7]"
              }
            `}
          />

          <span>
            <span className="block text-[0.6rem] tracking-[0.3em] text-[#A78722]">
              04
            </span>

            <span
              className={`
                mt-1
                block
                text-sm
                transition-colors
                duration-300

                ${
                  activeRoute === "entrega"
                    ? "font-medium text-[#0B132B]"
                    : "text-[#0B132B]/40 hover:text-[#0B132B]"
                }
              `}
            >
              Entrega
            </span>
          </span>
        </button>

      </div>

      {/* =====================================================
          CONTEÚDO PRINCIPAL
      ====================================================== */}

      <section
        className="
          relative
          z-20
          mx-auto
          grid
          w-full
          max-w-[1500px]
          gap-12
          px-6
          pb-16
          pt-8
          md:px-10
          lg:min-h-[calc(100vh-96px)]
          lg:grid-cols-[0.9fr_1.1fr]
          lg:items-center
          lg:px-14
          lg:pb-12
          lg:pt-12
          lg:pr-[360px]
        "
      >

        {/* =================================================
            CONTEÚDO ESQUERDO
        ================================================== */}

        <div
          key={activeRoute}
          className="astrog-route-enter"
        >

          {/* ===============================================
              01 — ORIGEM
          ================================================ */}

          {activeRoute === "origem" && (
            <>
              <p className="text-xs uppercase tracking-[0.38em] text-[#A78722]">
                Rota 01 / Origem
              </p>

              <h1 className="mt-6 max-w-[650px] text-[3.25rem] font-semibold leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:mt-7 lg:text-[5.2rem]">
                BMaxy não começou

                <span className="block text-[#0B132B]/28">
                  pela interface.
                </span>
              </h1>

              <div className="mt-9 max-w-xl border-l border-[#D4AF37] pl-6 lg:mt-10">
                <p className="text-base leading-8 text-[#0B132B]/70 sm:text-lg">
                  Começou pela necessidade de organizar diferentes caminhos:
                  livros, consultoria, ghostwriting e curso dentro de uma
                  presença digital única.
                </p>
              </div>

              <div className="mt-10 grid max-w-xl grid-cols-3 gap-5 border-t border-[#0B132B]/15 pt-6 lg:mt-12 lg:gap-6">

                <div>
                  <p className="text-[0.55rem] uppercase tracking-[0.22em] text-[#0B132B]/35 sm:text-[0.6rem]">
                    Entrada
                  </p>

                  <p className="mt-2 text-sm">
                    Muitas intenções
                  </p>
                </div>

                <div>
                  <p className="text-[0.55rem] uppercase tracking-[0.22em] text-[#0B132B]/35 sm:text-[0.6rem]">
                    Direção
                  </p>

                  <p className="mt-2 text-sm">
                    Uma experiência
                  </p>
                </div>

                <div>
                  <p className="text-[0.55rem] uppercase tracking-[0.22em] text-[#0B132B]/35 sm:text-[0.6rem]">
                    Registro
                  </p>

                  <p className="mt-2 text-sm">
                    2026
                  </p>
                </div>

              </div>
            </>
          )}

          {/* ===============================================
              02 — ESTRUTURA
          ================================================ */}

          {activeRoute === "estrutura" && (
            <>
              <p className="text-xs uppercase tracking-[0.38em] text-[#A78722]">
                Rota 02 / Estrutura
              </p>

              <h1 className="mt-6 max-w-[650px] text-[3.15rem] font-semibold leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:mt-7 lg:text-[5rem]">
                Quatro caminhos.

                <span className="block text-[#0B132B]/28">
                  Uma mesma experiência.
                </span>
              </h1>

              <div className="mt-10 max-w-xl border-t border-[#0B132B]/15 lg:mt-12">

                {[
                  ["01", "Livros"],
                  ["02", "Consultoria"],
                  ["03", "Ghostwriting"],
                  ["04", "Curso"],
                ].map(([number, title]) => (
                  <div
                    key={number}
                    className="grid grid-cols-[50px_1fr] items-center border-b border-[#0B132B]/15 py-4 sm:grid-cols-[60px_1fr] sm:py-5"
                  >
                    <span className="text-xs text-[#A78722]">
                      {number}
                    </span>

                    <span className="text-lg font-medium sm:text-xl">
                      {title}
                    </span>
                  </div>
                ))}

              </div>
            </>
          )}

          {/* ===============================================
              03 — INTERFACE
          ================================================ */}

          {activeRoute === "interface" && (
            <>
              <p className="text-xs uppercase tracking-[0.38em] text-[#A78722]">
                Rota 03 / Interface
              </p>

              <h1 className="mt-6 max-w-[650px] text-[3.15rem] font-semibold leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:mt-7 lg:text-[5rem]">
                A interface não

                <span className="block text-[#0B132B]/28">
                  explica tudo.
                </span>
              </h1>

              <div className="mt-9 max-w-xl border-l border-[#D4AF37] pl-6 lg:mt-10">

                <p className="text-base leading-8 text-[#0B132B]/70 sm:text-lg">
                  Ela direciona. Hierarquia, contraste e ritmo ajudam o usuário
                  a identificar rapidamente o caminho que corresponde ao que
                  ele procura.
                </p>

              </div>

              <div className="mt-10 flex gap-10 border-t border-[#0B132B]/15 pt-6 lg:mt-12">

                <div>
                  <p className="text-[0.6rem] uppercase tracking-[0.25em] text-[#0B132B]/35">
                    Base
                  </p>

                  <p className="mt-2 text-sm">
                    Next.js
                  </p>
                </div>

                <div>
                  <p className="text-[0.6rem] uppercase tracking-[0.25em] text-[#0B132B]/35">
                    Linguagem
                  </p>

                  <p className="mt-2 text-sm">
                    TypeScript
                  </p>
                </div>

              </div>
            </>
          )}

          {/* ===============================================
              04 — ENTREGA
          ================================================ */}

          {activeRoute === "entrega" && (
            <>
              <p className="text-xs uppercase tracking-[0.38em] text-[#A78722]">
                Rota 04 / Entrega
              </p>

              <h1 className="mt-6 max-w-[680px] text-[3.1rem] font-semibold leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:mt-7 lg:text-[5rem]">
                Uma estrutura pronta

                <span className="block text-[#0B132B]/28">
                  para continuar evoluindo.
                </span>
              </h1>

              <div className="mt-9 max-w-xl border-l border-[#D4AF37] pl-6 lg:mt-10">

                <p className="text-base leading-8 text-[#0B132B]/70 sm:text-lg">
                  O projeto reúne os diferentes caminhos da BMaxy em uma
                  experiência única e preparada para receber novos conteúdos,
                  serviços e produtos.
                </p>

              </div>

              <Link
                href="/"
                className="
                  group
                  mt-10
                  inline-flex
                  items-center
                  gap-4
                  border-b
                  border-[#D4AF37]
                  pb-2
                  font-medium
                  lg:mt-12
                "
              >
                Voltar para AstroG

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </>
          )}

        </div>

        {/* =================================================
            ÁREA VISUAL
        ================================================== */}

        <div
          key={`visual-${activeRoute}`}
          className="astrog-route-enter relative"
        >

          {/* ORIGEM */}
          {activeRoute === "origem" && (
            <ProjectImage
              label="Primeira coordenada"
              counter="01 / 04"
            />
          )}

          {/* ESTRUTURA */}
          {activeRoute === "estrutura" && (
            <div>

              <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#0B132B]/30">
                Organização da experiência
              </p>

              <div className="grid grid-cols-2 border border-[#0B132B]/15">

                {[
                  ["01", "Livros"],
                  ["02", "Consultoria"],
                  ["03", "Ghostwriting"],
                  ["04", "Curso"],
                ].map(([number, title]) => (
                  <div
                    key={number}
                    className="flex min-h-[130px] flex-col justify-between border border-[#0B132B]/10 p-5 sm:min-h-[170px] sm:p-6"
                  >
                    <span className="text-xs text-[#A78722]">
                      {number}
                    </span>

                    <span className="text-base font-medium sm:text-xl">
                      {title}
                    </span>
                  </div>
                ))}

              </div>

              <div className="mt-4 flex items-center justify-between">

                <span className="text-xs uppercase tracking-[0.25em] text-[#0B132B]/35">
                  Mapa da estrutura
                </span>

                <span className="text-xs text-[#A78722]">
                  02 / 04
                </span>

              </div>

            </div>
          )}

          {/* INTERFACE */}
          {activeRoute === "interface" && (
            <ProjectImage
              label="Interface em operação"
              counter="03 / 04"
            />
          )}

          {/* ENTREGA */}
          {activeRoute === "entrega" && (
            <div>

              <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#0B132B]/30">
                Coordenada final
              </p>

              <div className="relative overflow-hidden bg-[#0B132B] px-6 py-8 text-white sm:px-8 sm:py-10">

                <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
                  BMaxy / 2026
                </p>

                <h2 className="mt-7 max-w-lg text-3xl font-semibold leading-[1] tracking-[-0.04em] sm:mt-8 sm:text-4xl">
                  Presença digital

                  <span className="block text-white/30">
                    construída para evoluir.
                  </span>
                </h2>

                <div className="mt-10 grid grid-cols-2 gap-6 border-t border-white/10 pt-6 sm:mt-12">

                  <div>
                    <p className="text-[0.6rem] uppercase tracking-[0.22em] text-white/25 sm:text-xs">
                      Entrega
                    </p>

                    <p className="mt-2 text-sm">
                      Website
                    </p>
                  </div>

                  <div>
                    <p className="text-[0.6rem] uppercase tracking-[0.22em] text-white/25 sm:text-xs">
                      Tecnologia
                    </p>

                    <p className="mt-2 text-sm">
                      Next.js · TypeScript
                    </p>
                  </div>

                </div>

              </div>

              <div className="mt-4 flex items-center justify-between">

                <span className="text-xs uppercase tracking-[0.25em] text-[#0B132B]/35">
                  Entrega
                </span>

                <span className="text-xs text-[#A78722]">
                  04 / 04
                </span>

              </div>

            </div>
          )}

        </div>

      </section>
    </main>
  );
}

/* =========================================================
   IMAGEM DO PROJETO
========================================================= */

function ProjectImage({
  label,
  counter,
}: {
  label: string;
  counter: string;
}) {
  return (
    <div>

      <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#0B132B]/30 lg:text-right">
        {label}
      </p>

      <div className="relative aspect-[16/10] overflow-hidden border border-[#0B132B]/10 bg-[#0B132B]/5 p-3">

        <div className="relative h-full w-full">

          <Image
            src="/images/bmaxy-home.png"
            alt="Interface do projeto BMaxy"
            fill
            priority
            sizes="(min-width: 1280px) 700px, 100vw"
            className="
              object-contain
              object-center
              transition-transform
              duration-700
              hover:scale-[1.01]
            "
          />

        </div>

      </div>

      <div className="mt-4 flex items-center justify-between">

        <span className="text-xs uppercase tracking-[0.25em] text-[#0B132B]/35">
          Vista do projeto
        </span>

        <span className="text-xs text-[#A78722]">
          {counter}
        </span>

      </div>

    </div>
  );
}