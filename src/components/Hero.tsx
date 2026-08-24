"use client";

import Image from "next/image";

type AstroGRoute =
  | "sobre"
  | "servicos"
  | "processo"
  | "projeto";

export default function Hero() {
  function goTo(section: AstroGRoute) {
    /*
      Avisa o ExploreAstroG qual rota deve abrir.
    */
    window.dispatchEvent(
      new CustomEvent("astrog:navigate", {
        detail: section,
      })
    );

    /*
      Depois leva o usuário suavemente
      até a segunda tela.
    */
    document
      .getElementById("explorar")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }

  return (
    <section
      id="inicio"
      className="relative min-h-[calc(100vh-96px)] overflow-hidden bg-[#030B22]"
    >
      {/* FUNDO */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#030B22_0%,#020817_100%)]" />

      {/* Brilho geral */}
      <div className="pointer-events-none absolute right-[8%] top-[10%] z-[1] hidden h-[700px] w-[700px] rounded-full bg-[#1B3470]/25 blur-[130px] lg:block" />

      {/* =====================================================
          PLANETA
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-[-4%]
          top-1/2
          z-[2]
          hidden
          h-[760px]
          w-[760px]
          -translate-y-1/2
          lg:block
          xl:right-[0%]
          xl:h-[820px]
          xl:w-[820px]
          2xl:right-[2%]
        "
      >
        <Image
          src="/images/hero-astrog.png"
          alt="Ilustração AstroG"
          fill
          priority
          sizes="(min-width: 1536px) 820px, 760px"
          className="object-contain"
        />
      </div>

      {/* =====================================================
          NUVENS SUPERIORES
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-[2%]
          top-[2%]
          z-[4]
          hidden
          h-[240px]
          w-[430px]
          opacity-70
          blur-[28px]
          mix-blend-screen
          lg:block
        "
        style={{
          background: `
            radial-gradient(
              ellipse at 25% 55%,
              rgba(73,120,220,0.34) 0%,
              transparent 48%
            ),
            radial-gradient(
              ellipse at 55% 40%,
              rgba(108,151,235,0.26) 0%,
              transparent 46%
            ),
            radial-gradient(
              ellipse at 82% 60%,
              rgba(212,175,55,0.20) 0%,
              transparent 42%
            )
          `,
        }}
      />

      {/* =====================================================
          NUVENS ATRÁS / LADO ESQUERDO DO PLANETA
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-[27%]
          top-[34%]
          z-[4]
          hidden
          h-[300px]
          w-[380px]
          opacity-60
          blur-[32px]
          mix-blend-screen
          lg:block
        "
        style={{
          background: `
            radial-gradient(
              ellipse at 30% 45%,
              rgba(65,108,205,0.34) 0%,
              transparent 48%
            ),
            radial-gradient(
              ellipse at 60% 55%,
              rgba(84,131,224,0.28) 0%,
              transparent 50%
            ),
            radial-gradient(
              ellipse at 82% 30%,
              rgba(142,178,240,0.18) 0%,
              transparent 42%
            )
          `,
        }}
      />

      {/* =====================================================
          NUVENS INFERIORES
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-[1%]
          right-[7%]
          z-[4]
          hidden
          h-[270px]
          w-[560px]
          opacity-65
          blur-[32px]
          mix-blend-screen
          lg:block
        "
        style={{
          background: `
            radial-gradient(
              ellipse at 20% 45%,
              rgba(56,100,200,0.32) 0%,
              transparent 48%
            ),
            radial-gradient(
              ellipse at 50% 55%,
              rgba(82,132,230,0.28) 0%,
              transparent 52%
            ),
            radial-gradient(
              ellipse at 78% 40%,
              rgba(212,175,55,0.18) 0%,
              transparent 42%
            )
          `,
        }}
      />

      {/* Pequenas luzes na névoa */}
      <div className="pointer-events-none absolute right-[22%] top-[19%] z-[5] hidden h-1.5 w-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_18px_5px_rgba(212,175,55,0.7)] lg:block" />

      <div className="pointer-events-none absolute bottom-[17%] right-[29%] z-[5] hidden h-1 w-1 rounded-full bg-[#D4AF37] shadow-[0_0_14px_4px_rgba(212,175,55,0.6)] lg:block" />

      {/* =====================================================
          DEGRADÊ DE INTEGRAÇÃO
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 z-[6] bg-[linear-gradient(90deg,#030B22_0%,rgba(3,11,34,0.98)_27%,rgba(3,11,34,0.74)_43%,rgba(3,11,34,0.18)_58%,rgba(3,11,34,0)_69%)]" />

      {/* =====================================================
          CONTEÚDO
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[calc(100vh-96px)]
          w-full
          max-w-7xl
          items-center
          px-6
          py-16
          md:px-10
          lg:px-12
        "
      >
        <div className="w-full max-w-[760px]">

          {/* Texto dourado */}
          <p className="mb-7 text-xs font-medium uppercase tracking-[0.42em] text-[#D4AF37] sm:text-sm">
            Business Intelligence &amp; Soluções Digitais
          </p>

          {/* TÍTULO */}
          <h1
            className="
              text-[2.8rem]
              font-bold
              leading-[1.06]
              tracking-[-0.045em]
              text-[#F5F7FA]
              sm:text-[3.3rem]
              lg:text-[3.8rem]
              xl:text-[4rem]
            "
          >
            <span className="block">
              Transformamos dados
            </span>

            <span className="block">
              e tecnologia em
            </span>

            <span className="block">
              soluções que
            </span>

            <span className="block">
              impulsionam negócios
              <span className="text-[#D4AF37]">
                .
              </span>
            </span>
          </h1>

          {/* DESCRIÇÃO */}
          <p className="mt-8 max-w-[620px] text-base leading-8 text-[#A8B0B8] sm:text-lg">
            Criamos soluções digitais, dashboards e experiências
            web pensadas para gerar valor, eficiência e crescimento.
          </p>

          {/* =================================================
              BOTÕES FUNCIONAIS
          ================================================== */}

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">

            {/* CONHEÇA NOSSOS SERVIÇOS */}
            <button
              type="button"
              onClick={() => goTo("servicos")}
              className="
                group
                inline-flex
                h-14
                items-center
                justify-center
                gap-5
                rounded-lg
                bg-[#D4AF37]
                px-7
                font-semibold
                text-[#071020]
                shadow-[0_0_25px_rgba(212,175,55,0.20)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:brightness-110
              "
            >
              Conheça nossos serviços

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>

            {/* FALE CONOSCO */}
            <button
              type="button"
              onClick={() => goTo("projeto")}
              className="
                group
                inline-flex
                h-14
                items-center
                justify-center
                gap-5
                rounded-lg
                border
                border-[#D4AF37]/50
                bg-transparent
                px-7
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-[#D4AF37]
                hover:bg-[#D4AF37]/10
              "
            >
              Fale conosco

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}