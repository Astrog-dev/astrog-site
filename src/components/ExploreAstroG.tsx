"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import ContactDrawer from "@/components/ContactDrawer";

type ExploreSection =
  | "sobre"
  | "servicos"
  | "processo"
  | "projeto";

type ProjectNeed =
  | "dados"
  | "web"
  | "personalizado"
  | null;

const navigation = [
  {
    id: "sobre" as ExploreSection,
    number: "01",
    label: "Sobre a AstroG",
    mobileLabel: "Sobre",
  },
  {
    id: "servicos" as ExploreSection,
    number: "02",
    label: "O que construímos",
    mobileLabel: "Construímos",
  },
  {
    id: "processo" as ExploreSection,
    number: "03",
    label: "Como pensamos",
    mobileLabel: "Pensamos",
  },
  {
    id: "projeto" as ExploreSection,
    number: "04",
    label: "Começar um projeto",
    mobileLabel: "Projeto",
  },
];

const projectNeeds = {
  dados: {
    eyebrow: "Business Intelligence",
    title: "Vamos começar pelos dados.",
    description:
      "Conte o que você acompanha hoje, onde estão as informações e o que você gostaria de enxergar com mais clareza. Não precisa chegar com indicadores ou ferramentas definidas.",
  },

  web: {
    eyebrow: "Desenvolvimento Web",
    title: "Vamos começar pela ideia.",
    description:
      "Conte o que você quer construir, para quem essa solução será feita e qual problema ela precisa resolver. Não é necessário saber qual tecnologia ou estrutura utilizar.",
  },

  personalizado: {
    eyebrow: "Solução sob medida",
    title: "Pode começar pelo problema.",
    description:
      "Se a necessidade ainda não cabe em uma categoria, descreva o cenário. A partir disso, entendemos juntos qual caminho faz mais sentido.",
  },
};

export default function ExploreAstroG() {
  const [activeSection, setActiveSection] =
    useState<ExploreSection>("sobre");

  const [selectedNeed, setSelectedNeed] =
    useState<ProjectNeed>(null);

  const [contactOpen, setContactOpen] =
    useState(false);

  const activeIndex = navigation.findIndex(
    (item) => item.id === activeSection
  );

  const currentNeed =
    selectedNeed !== null
      ? projectNeeds[selectedNeed]
      : null;

  /*
    Progresso usado na órbita mobile.

    01 = 0%
    02 = 33%
    03 = 66%
    04 = 100%
  */
  const routeProgress =
    (activeIndex / (navigation.length - 1)) * 100;

  /* =====================================================
     COMUNICAÇÃO COM O HEADER E HERO
  ====================================================== */

  useEffect(() => {
    function handleNavigation(event: Event) {
      const customEvent =
        event as CustomEvent<ExploreSection>;

      setActiveSection(customEvent.detail);
    }

    window.addEventListener(
      "astrog:navigate",
      handleNavigation
    );

    return () => {
      window.removeEventListener(
        "astrog:navigate",
        handleNavigation
      );
    };
  }, []);

  return (
    <section
      id="explorar"
      className="relative min-h-screen overflow-hidden bg-[#F4F0E7] text-[#0B132B]"
    >

      {/* =====================================================
          ASSINATURA VISUAL ASTROG
      ====================================================== */}

      {/* ÓRBITA SUPERIOR DIREITA */}
      <svg
        className="pointer-events-none absolute -right-[32rem] -top-24 h-[520px] w-[820px] opacity-60 sm:-right-80 lg:-right-52"
        viewBox="0 0 820 520"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M80 420C260 90 570 10 790 170"
          stroke="#D4AF37"
          strokeWidth="1.2"
        />

        <path
          d="M220 470C390 210 625 150 800 240"
          stroke="rgba(212,175,55,0.24)"
          strokeWidth="1"
        />

        <circle
          cx="585"
          cy="82"
          r="4"
          fill="#D4AF37"
        />
      </svg>

      {/* ÓRBITA INFERIOR ESQUERDA */}
      <svg
        className="pointer-events-none absolute -bottom-44 -left-64 h-[500px] w-[760px] opacity-35"
        viewBox="0 0 760 500"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M20 360C190 120 470 80 730 250"
          stroke="#D4AF37"
          strokeWidth="1"
        />

        <circle
          cx="420"
          cy="115"
          r="3.5"
          fill="#D4AF37"
        />
      </svg>

      {/* =====================================================
          CONTEÚDO
      ====================================================== */}

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-14 md:px-10 md:py-20 lg:px-12">

        {/* =================================================
            TOPO
        ================================================== */}

        <div className="flex items-center justify-between border-b border-[#0B132B]/15 pb-5">

          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#A78722]">
            AstroG
          </p>

          <span className="text-[0.6rem] uppercase tracking-[0.22em] text-[#0B132B]/30 sm:text-xs sm:tracking-[0.25em]">
            Escolha uma rota
          </span>

        </div>

        <div className="grid flex-1 gap-10 py-10 lg:grid-cols-[320px_1fr] lg:items-center lg:gap-16 lg:py-16">

          {/* =================================================
              NAVEGAÇÃO / TRAJETÓRIA ASTROG
          ================================================== */}

          <aside className="relative">

            {/* =================================================
                MINI ÓRBITA — MOBILE
            ================================================== */}

            <div className="lg:hidden">

              <div className="mb-3 flex items-center justify-between">

                <p className="text-[0.58rem] uppercase tracking-[0.28em] text-[#A78722]">
                  Rota AstroG
                </p>

                <p className="text-[0.58rem] uppercase tracking-[0.25em] text-[#0B132B]/30">
                  {String(activeIndex + 1).padStart(2, "0")} / 04
                </p>

              </div>

              <div className="relative mx-auto h-[170px] w-full max-w-[350px]">

                {/* =============================================
                    DESENHO DA ÓRBITA
                ============================================== */}

                <svg
                  className="pointer-events-none absolute inset-0 h-full w-full"
                  viewBox="0 0 350 170"
                  fill="none"
                  aria-hidden="true"
                >

                  {/* CAMINHO COMPLETO */}
                  <path
                    d="
                      M39 38
                      C52 73 70 101 98 116
                      C140 138 210 138 252 116
                      C280 101 298 73 311 38
                    "
                    stroke="rgba(11,19,43,0.14)"
                    strokeWidth="1.2"
                    pathLength="100"
                  />

                  {/* RASTRO DOURADO */}
                  <path
                    d="
                      M39 38
                      C52 73 70 101 98 116
                      C140 138 210 138 252 116
                      C280 101 298 73 311 38
                    "
                    stroke="#D4AF37"
                    strokeWidth="1.7"
                    pathLength="100"
                    strokeDasharray={`${routeProgress} 100`}
                    className="transition-all duration-700 ease-out"
                  />

                  {/* ÓRBITA SECUNDÁRIA */}
                  <path
                    d="
                      M72 42
                      C98 74 119 93 146 101
                      C177 111 212 103 238 85
                      C255 72 267 55 276 39
                    "
                    stroke="rgba(212,175,55,0.18)"
                    strokeWidth="1"
                  />

                </svg>

                {/* =============================================
                    01 — SOBRE
                ============================================== */}

                <button
                  type="button"
                  onClick={() =>
                    setActiveSection("sobre")
                  }
                  className="
                    absolute
                    left-0
                    top-[13px]
                    z-20
                    flex
                    w-[78px]
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
                      mt-1
                      text-[0.68rem]
                      transition-colors

                      ${
                        activeSection === "sobre"
                          ? "font-medium text-[#0B132B]"
                          : "text-[#0B132B]/40"
                      }
                    `}
                  >
                    Sobre
                  </span>
                </button>

                {/* =============================================
                    02 — O QUE CONSTRUÍMOS
                ============================================== */}

                <button
                  type="button"
                  onClick={() =>
                    setActiveSection("servicos")
                  }
                  className="
                    absolute
                    bottom-0
                    left-[56px]
                    z-20
                    flex
                    w-[84px]
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
                      mt-1
                      text-[0.68rem]
                      transition-colors

                      ${
                        activeSection === "servicos"
                          ? "font-medium text-[#0B132B]"
                          : "text-[#0B132B]/40"
                      }
                    `}
                  >
                    Construímos
                  </span>
                </button>

                {/* =============================================
                    03 — COMO PENSAMOS
                ============================================== */}

                <button
                  type="button"
                  onClick={() =>
                    setActiveSection("processo")
                  }
                  className="
                    absolute
                    bottom-0
                    right-[56px]
                    z-20
                    flex
                    w-[84px]
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
                      mt-1
                      text-[0.68rem]
                      transition-colors

                      ${
                        activeSection === "processo"
                          ? "font-medium text-[#0B132B]"
                          : "text-[#0B132B]/40"
                      }
                    `}
                  >
                    Pensamos
                  </span>
                </button>

                {/* =============================================
                    04 — COMEÇAR UM PROJETO
                ============================================== */}

                <button
                  type="button"
                  onClick={() =>
                    setActiveSection("projeto")
                  }
                  className="
                    absolute
                    right-0
                    top-[13px]
                    z-20
                    flex
                    w-[78px]
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
                      mt-1
                      text-[0.68rem]
                      transition-colors

                      ${
                        activeSection === "projeto"
                          ? "font-medium text-[#0B132B]"
                          : "text-[#0B132B]/40"
                      }
                    `}
                  >
                    Projeto
                  </span>
                </button>

              </div>
            </div>

            {/* =================================================
                NAVEGAÇÃO DESKTOP
            ================================================== */}

            <div className="relative hidden lg:block">

              {/* LINHA BASE */}
              <div
                className="
                  absolute
                  left-[7px]
                  top-[29px]
                  h-[258px]
                  w-px
                  bg-[#0B132B]/15
                "
              />

              {/* RASTRO DOURADO */}
              <div
                className="
                  pointer-events-none
                  absolute
                  left-[7px]
                  top-[29px]
                  z-10
                  w-px
                  bg-[#D4AF37]
                  transition-[height]
                  duration-500
                  ease-out
                "
                style={{
                  height: `${activeIndex * 86}px`,
                }}
              />

              {/* PONTO DOURADO MÓVEL */}
              <span
                className="
                  pointer-events-none
                  absolute
                  left-0
                  top-[22px]
                  z-20
                  h-[15px]
                  w-[15px]
                  rounded-full
                  bg-[#D4AF37]
                  shadow-[0_0_18px_rgba(212,175,55,0.30)]
                  transition-transform
                  duration-500
                  ease-out
                "
                style={{
                  transform: `translateY(${activeIndex * 86}px)`,
                }}
              />

              {/* ROTAS */}
              <div className="space-y-7">

                {navigation.map((item) => {
                  const active =
                    activeSection === item.id;

                  return (
                    <button
                      type="button"
                      key={item.id}
                      onClick={() =>
                        setActiveSection(item.id)
                      }
                      className="
                        group
                        flex
                        h-[58px]
                        w-full
                        items-center
                        gap-6
                        text-left
                      "
                    >

                      {/* PONTO FIXO */}
                      <span
                        className="
                          relative
                          z-10
                          h-[15px]
                          w-[15px]
                          shrink-0
                          rounded-full
                          border
                          border-[#0B132B]/25
                          bg-[#F4F0E7]
                        "
                      />

                      {/* TEXTO */}
                      <div>

                        <span
                          className={`
                            text-[0.65rem]
                            tracking-[0.3em]
                            transition-colors
                            duration-300

                            ${
                              active
                                ? "text-[#A78722]"
                                : "text-[#0B132B]/30"
                            }
                          `}
                        >
                          {item.number}
                        </span>

                        <p
                          className={`
                            mt-1
                            text-lg
                            transition-all
                            duration-300

                            ${
                              active
                                ? "translate-x-1 font-medium text-[#0B132B]"
                                : "text-[#0B132B]/45 group-hover:translate-x-1 group-hover:text-[#0B132B]/75"
                            }
                          `}
                        >
                          {item.label}
                        </p>

                      </div>

                    </button>
                  );
                })}

              </div>

            </div>

          </aside>

          {/* =================================================
              ÁREA INTERATIVA
          ================================================== */}

          <div
            key={activeSection}
            className="astrog-route-enter relative min-h-0 lg:min-h-[520px]"
          >

            {/* =================================================
                01 — SOBRE A ASTROG
            ================================================== */}

            {activeSection === "sobre" && (
              <div>

                <p className="text-xs uppercase tracking-[0.3em] text-[#0B132B]/35">
                  01 / Manifesto
                </p>

                <h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-5xl lg:text-6xl">

                  O ponto de partida

                  <span className="block text-[#0B132B]/30">
                    não é a tecnologia.
                  </span>

                  <span className="mt-2 block">
                    É o problema que precisa ser resolvido
                    <span className="text-[#D4AF37]">
                      .
                    </span>
                  </span>

                </h2>

                <div className="mt-10 grid gap-7 border-t border-[#0B132B]/15 pt-7 md:mt-12 md:grid-cols-2 md:gap-8 md:pt-8">

                  <p className="text-lg leading-8 text-[#0B132B]">
                    A AstroG transforma necessidades reais em
                    soluções digitais pensadas para funcionar
                    no dia a dia do negócio.
                  </p>

                  <p className="text-base leading-8 text-[#0B132B]/60">
                    Antes de desenvolver, entendemos o contexto.
                    Antes de escolher tecnologia, entendemos o
                    objetivo. Cada projeto parte de uma
                    necessidade específica.
                  </p>

                </div>

              </div>
            )}

            {/* =================================================
                02 — O QUE CONSTRUÍMOS
            ================================================== */}

            {activeSection === "servicos" && (
              <div>

                <p className="text-xs uppercase tracking-[0.3em] text-[#0B132B]/35">
                  02 / O que construímos
                </p>

                <div className="mt-5 grid gap-7 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-8">

                  <h2 className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-5xl lg:text-6xl">

                    Ideias ganham valor

                    <span className="block text-[#0B132B]/30">
                      quando ganham forma.
                    </span>

                  </h2>

                  <p className="max-w-md text-sm leading-7 text-[#0B132B]/55 lg:justify-self-end">
                    Projetos construídos a partir de uma
                    necessidade real, com decisões visuais
                    e técnicas pensadas para aquele contexto.
                  </p>

                </div>

                {/* =============================================
                    PROJETO BMAXY
                ============================================== */}

                <div className="mt-9 border-t border-[#0B132B]/15 pt-5 lg:mt-10">

                  <div className="flex items-end justify-between">

                    <div>

                      <p className="text-xs uppercase tracking-[0.28em] text-[#A78722]">
                        Projeto em destaque
                      </p>

                      <h3 className="mt-2 text-3xl font-semibold tracking-[-0.04em]">
                        BMaxy
                      </h3>

                    </div>

                    <span className="text-xs text-[#0B132B]/35">
                      2026
                    </span>

                  </div>

                  {/* IMAGEM */}
                  <div className="group relative mt-5 overflow-hidden bg-[#0B132B]">

                    <div className="relative aspect-[16/9] sm:aspect-[16/8] lg:aspect-[16/7]">

                      <Image
                        src="/images/bmaxy-home.png"
                        alt="Projeto BMaxy desenvolvido pela AstroG"
                        fill
                        sizes="(min-width: 1024px) 850px, 100vw"
                        className="
                          object-cover
                          object-top
                          transition-transform
                          duration-700
                          ease-out
                          group-hover:scale-[1.015]
                        "
                      />

                    </div>

                  </div>

                  {/* INFORMAÇÕES */}
                  <div className="mt-5 grid gap-5 border-b border-[#0B132B]/15 pb-5 md:grid-cols-[1fr_1fr_auto] md:items-end">

                    <div>

                      <p className="text-xs uppercase tracking-[0.25em] text-[#0B132B]/35">
                        Entrega
                      </p>

                      <p className="mt-2 text-sm font-medium">
                        Desenvolvimento Web
                      </p>

                    </div>

                    <div>

                      <p className="text-xs uppercase tracking-[0.25em] text-[#0B132B]/35">
                        Tecnologia
                      </p>

                      <p className="mt-2 text-sm font-medium">
                        Next.js · TypeScript
                      </p>

                    </div>

                    <a
                      href="/projetos/bmaxy"
                      className="group/link inline-flex items-center gap-3 text-sm font-medium"
                    >
                      Ver projeto

                      <span className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1">
                        ↗
                      </span>

                    </a>

                  </div>

                </div>

              </div>
            )}

            {/* =================================================
                03 — COMO PENSAMOS
            ================================================== */}

            {activeSection === "processo" && (
              <div>

                <p className="text-xs uppercase tracking-[0.3em] text-[#0B132B]/35">
                  03 / Como pensamos
                </p>

                <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">

                  Antes de construir,

                  <span className="block text-[#0B132B]/30">
                    precisamos entender.
                  </span>

                </h2>

                <div className="mt-11 grid gap-8 sm:grid-cols-2 lg:mt-16 lg:gap-10">

                  <div className="border-t border-[#0B132B]/15 pt-5">

                    <span className="text-xs text-[#A78722]">
                      01
                    </span>

                    <p className="mt-3 text-2xl font-medium">
                      Entender
                    </p>

                    <p className="mt-3 max-w-sm text-sm leading-7 text-[#0B132B]/55">
                      Começamos pelo cenário, pela necessidade
                      e pelo resultado que precisa ser alcançado.
                    </p>

                  </div>

                  <div className="border-t border-[#0B132B]/15 pt-5">

                    <span className="text-xs text-[#A78722]">
                      02
                    </span>

                    <p className="mt-3 text-2xl font-medium">
                      Estruturar
                    </p>

                    <p className="mt-3 max-w-sm text-sm leading-7 text-[#0B132B]/55">
                      Organizamos prioridades, caminhos possíveis
                      e o que realmente faz sentido para o projeto.
                    </p>

                  </div>

                  <div className="border-t border-[#0B132B]/15 pt-5">

                    <span className="text-xs text-[#A78722]">
                      03
                    </span>

                    <p className="mt-3 text-2xl font-medium">
                      Construir
                    </p>

                    <p className="mt-3 max-w-sm text-sm leading-7 text-[#0B132B]/55">
                      Desenvolvimento e decisões visuais caminham
                      juntos para transformar a ideia em uma solução real.
                    </p>

                  </div>

                  <div className="border-t border-[#0B132B]/15 pt-5">

                    <span className="text-xs text-[#A78722]">
                      04
                    </span>

                    <p className="mt-3 text-2xl font-medium">
                      Evoluir
                    </p>

                    <p className="mt-3 max-w-sm text-sm leading-7 text-[#0B132B]/55">
                      A entrega não precisa ser o fim. O projeto
                      pode evoluir conforme novas necessidades aparecem.
                    </p>

                  </div>

                </div>

              </div>
            )}

            {/* =================================================
                04 — COMEÇAR UM PROJETO
            ================================================== */}

            {activeSection === "projeto" && (
              <div>

                <p className="text-xs uppercase tracking-[0.3em] text-[#0B132B]/35">
                  04 / Próximo ponto
                </p>

                {/* =============================================
                    ESCOLHA DA NECESSIDADE
                ============================================== */}

                {selectedNeed === null && (
                  <div>

                    <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">

                      O que você precisa

                      <span className="block text-[#0B132B]/30">
                        colocar em movimento?
                      </span>

                    </h2>

                    <div className="mt-10 border-t border-[#0B132B]/15 lg:mt-14">

                      {/* DADOS */}
                      <button
                        type="button"
                        onClick={() =>
                          setSelectedNeed("dados")
                        }
                        className="group flex w-full items-center justify-between gap-4 border-b border-[#0B132B]/15 py-6 text-left"
                      >

                        <div className="flex min-w-0 items-start gap-4 sm:gap-6">

                          <span className="mt-1 shrink-0 text-xs text-[#A78722]">
                            01
                          </span>

                          <span className="text-base font-medium sm:text-xl">
                            Quero entender melhor meus dados
                          </span>

                        </div>

                        <span className="shrink-0 text-[#A78722] transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>

                      </button>

                      {/* WEB */}
                      <button
                        type="button"
                        onClick={() =>
                          setSelectedNeed("web")
                        }
                        className="group flex w-full items-center justify-between gap-4 border-b border-[#0B132B]/15 py-6 text-left"
                      >

                        <div className="flex min-w-0 items-start gap-4 sm:gap-6">

                          <span className="mt-1 shrink-0 text-xs text-[#A78722]">
                            02
                          </span>

                          <span className="text-base font-medium sm:text-xl">
                            Quero criar um site ou sistema
                          </span>

                        </div>

                        <span className="shrink-0 text-[#A78722] transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>

                      </button>

                      {/* PERSONALIZADO */}
                      <button
                        type="button"
                        onClick={() =>
                          setSelectedNeed("personalizado")
                        }
                        className="group flex w-full items-center justify-between gap-4 border-b border-[#0B132B]/15 py-6 text-left"
                      >

                        <div className="flex min-w-0 items-start gap-4 sm:gap-6">

                          <span className="mt-1 shrink-0 text-xs text-[#A78722]">
                            03
                          </span>

                          <span className="text-base font-medium sm:text-xl">
                            Tenho outra necessidade
                          </span>

                        </div>

                        <span className="shrink-0 text-[#A78722] transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>

                      </button>

                    </div>

                  </div>
                )}

                {/* =============================================
                    NECESSIDADE SELECIONADA
                ============================================== */}

                {selectedNeed !== null &&
                  currentNeed && (
                    <div className="astrog-route-enter">

                      <p className="mt-5 text-xs uppercase tracking-[0.3em] text-[#A78722]">
                        Rota selecionada /{" "}
                        {currentNeed.eyebrow}
                      </p>

                      <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.04] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                        {currentNeed.title}
                      </h2>

                      <div className="mt-10 grid gap-8 border-t border-[#0B132B]/15 pt-8 md:mt-12 md:grid-cols-[1.1fr_0.9fr] md:gap-10">

                        <div>

                          <p className="max-w-xl text-lg leading-8 text-[#0B132B]/70">
                            {currentNeed.description}
                          </p>

                        </div>

                        <div className="md:justify-self-end">

                          <p className="text-xs uppercase tracking-[0.25em] text-[#0B132B]/35">
                            Próximo passo
                          </p>

                          <button
                            type="button"
                            onClick={() =>
                              setContactOpen(true)
                            }
                            className="
                              group
                              mt-5
                              inline-flex
                              items-center
                              gap-4
                              border-b
                              border-[#D4AF37]
                              pb-2
                              text-lg
                              font-medium
                            "
                          >
                            Falar com a AstroG

                            <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                              ↗
                            </span>

                          </button>

                        </div>

                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          setSelectedNeed(null)
                        }
                        className="
                          mt-10
                          text-sm
                          text-[#0B132B]/45
                          transition-colors
                          hover:text-[#0B132B]
                          lg:mt-12
                        "
                      >
                        ← Escolher outra rota
                      </button>

                    </div>
                  )}

              </div>
            )}

          </div>

        </div>

      </div>

      {/* =====================================================
          PAINEL LATERAL DE CONTATO
      ====================================================== */}

      <ContactDrawer
        open={contactOpen}
        onClose={() =>
          setContactOpen(false)
        }
        routeName={
          currentNeed?.eyebrow ??
          "Projeto AstroG"
        }
      />

    </section>
  );
}