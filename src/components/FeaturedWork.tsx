import Image from "next/image";

export default function FeaturedWork() {
  return (
    <section
      id="projetos"
      className="relative overflow-hidden bg-[#F3F0E8] py-24 text-[#081126] lg:py-32"
    >
      {/* LINHA ORBITAL DA ASTROG */}
      <svg
        className="pointer-events-none absolute -right-40 top-10 h-[420px] w-[720px] opacity-70"
        viewBox="0 0 720 420"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M40 350C190 90 460 20 690 150"
          stroke="#D4AF37"
          strokeWidth="1.2"
        />

        <circle cx="522" cy="72" r="4" fill="#D4AF37" />
      </svg>

      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-12">

        {/* CABEÇALHO DO CASE */}
        <div className="flex items-center justify-between border-b border-[#081126]/15 pb-5">
          <p className="text-xs font-semibold uppercase tracking-[0.34em]">
            Trabalho em destaque
          </p>

          <span className="text-sm text-[#081126]/55">
            01
          </span>
        </div>

        {/* TÍTULO */}
        <div className="mt-14 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.32em] text-[#A78722]">
              BMaxy
            </p>

            <h2 className="max-w-[760px] text-5xl font-semibold leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Uma presença digital construída com propósito.
            </h2>
          </div>

          <div className="max-w-md lg:justify-self-end">
            <p className="text-base leading-7 text-[#081126]/65">
              Desenvolvimento de uma experiência web pensada para organizar
              conteúdo, fortalecer a apresentação da marca e criar uma navegação
              clara para o usuário.
            </p>
          </div>
        </div>

        {/* IMAGEM DO PROJETO */}
        <div className="relative mt-16 overflow-hidden border border-[#081126]/15 bg-[#081126]">
          <div className="flex h-10 items-center gap-2 border-b border-white/10 px-4">
            <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
          </div>

          <div className="relative aspect-[16/9]">
            <Image
              src="/images/bmaxy-home.png"
              alt="Projeto BMaxy desenvolvido pela AstroG"
              fill
              sizes="(min-width: 1280px) 1180px, 100vw"
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* INFORMAÇÕES DO PROJETO */}
        <div className="mt-8 grid gap-8 border-t border-[#081126]/15 pt-7 md:grid-cols-3">

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#081126]/45">
              Entrega
            </p>

            <p className="mt-2 font-medium">
              Desenvolvimento Web
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#081126]/45">
              Tecnologia
            </p>

            <p className="mt-2 font-medium">
              Next.js · TypeScript
            </p>
          </div>

          <div className="md:text-right">
            <a
              href="#"
              className="group inline-flex items-center gap-3 font-medium"
            >
              Ver projeto

              <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}