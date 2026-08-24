export default function About() {
  return (
    <section
      id="sobre"
      className="relative overflow-hidden bg-[#050B18] py-28 text-white lg:py-40"
    >
      {/* detalhe orbital exclusivo da seção */}
      <svg
        className="pointer-events-none absolute -right-40 top-[18%] h-[520px] w-[900px] opacity-60"
        viewBox="0 0 900 520"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M70 430C250 120 570 50 850 200"
          stroke="#D4AF37"
          strokeWidth="1"
        />

        <path
          d="M180 480C360 230 610 160 820 245"
          stroke="rgba(212,175,55,0.20)"
          strokeWidth="1"
        />

        <circle cx="585" cy="102" r="4" fill="#D4AF37" />
      </svg>

      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-12">

        {/* TOPO */}
        <div className="flex items-center justify-between border-b border-white/10 pb-5">
          <p className="text-xs font-medium uppercase tracking-[0.4em] text-[#D4AF37]">
            Sobre a AstroG
          </p>

          <span className="text-xs tracking-[0.25em] text-white/35">
            01 / MANIFESTO
          </span>
        </div>

        {/* FRASE PRINCIPAL */}
        <div className="mt-20 lg:mt-28">
          <p className="max-w-5xl text-[2.8rem] font-medium leading-[1.02] tracking-[-0.045em] text-white sm:text-5xl lg:text-[5.4rem]">
            O ponto de partida
            <span className="block text-white/35">
              não é a tecnologia.
            </span>

            <span className="mt-3 block">
              É o problema que
            </span>

            <span className="block">
              precisa ser resolvido
              <span className="text-[#D4AF37]">.</span>
            </span>
          </p>
        </div>

        {/* BLOCO INFERIOR */}
        <div className="mt-24 grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-end">

          {/* assinatura visual */}
          <div className="relative hidden min-h-[230px] lg:block">
            <div className="absolute bottom-0 left-0 h-px w-[75%] bg-white/10" />

            <div className="absolute bottom-[-3px] left-[74%] h-2 w-2 rounded-full bg-[#D4AF37]" />

            <p className="absolute bottom-7 left-0 text-xs uppercase tracking-[0.32em] text-white/30">
              Estratégia · Dados · Desenvolvimento
            </p>
          </div>

          {/* TEXTO */}
          <div className="max-w-xl lg:justify-self-end">
            <p className="text-xl leading-9 text-[#F5F7FA]">
              A AstroG transforma necessidades reais em soluções digitais
              pensadas para funcionar no dia a dia do negócio.
            </p>

            <p className="mt-7 text-base leading-8 text-[#A8B0B8]">
              Antes de desenvolver, entendemos o contexto. Antes de escolher
              tecnologia, entendemos o objetivo. O resultado é uma solução
              construída para aquele projeto — não uma estrutura pronta
              adaptada depois.
            </p>

            {/* áreas sem formato de cards */}
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-6">
              <span className="text-sm text-white/70">
                Business Intelligence
              </span>

              <span className="text-[#D4AF37]">•</span>

              <span className="text-sm text-white/70">
                Desenvolvimento Web
              </span>

              <span className="text-[#D4AF37]">•</span>

              <span className="text-sm text-white/70">
                Soluções Digitais
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}