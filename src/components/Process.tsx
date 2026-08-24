const steps = [
  {
    number: "01",
    title: "Entender",
    text: "Antes de propor qualquer solução, entendemos o negócio, o problema e o resultado que precisa ser alcançado.",
  },
  {
    number: "02",
    title: "Estruturar",
    text: "Organizamos prioridades, escopo e caminhos possíveis antes de começar a desenvolver.",
  },
  {
    number: "03",
    title: "Construir",
    text: "A solução ganha forma com decisões técnicas e visuais alinhadas ao objetivo do projeto.",
  },
  {
    number: "04",
    title: "Evoluir",
    text: "Entregamos, acompanhamos e identificamos novas possibilidades conforme o projeto e o negócio evoluem.",
  },
];

export default function Process() {
  return (
    <section className="relative overflow-hidden bg-[#F3F0E8] py-28 text-[#081126] lg:py-40">

      <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-12">

        {/* ABERTURA */}
        <div className="flex items-center justify-between border-b border-[#081126]/15 pb-5">
          <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#A78722]">
            Como trabalhamos
          </p>

          <span className="text-xs tracking-[0.25em] text-[#081126]/35">
            MÉTODO ASTROG
          </span>
        </div>

        {/* FRASE PRINCIPAL */}
        <div className="mt-20 max-w-5xl lg:mt-24">
          <h2 className="text-[2.8rem] font-semibold leading-[1.02] tracking-[-0.05em] sm:text-5xl lg:text-[5.3rem]">
            Entre uma necessidade
            <span className="block text-[#081126]/30">
              e uma solução,
            </span>
            <span className="block">
              existe um caminho.
            </span>
          </h2>
        </div>

        {/* TRAJETÓRIA */}
        <div className="relative mt-24 lg:mt-32">

          {/* linha principal */}
          <div className="absolute left-0 top-3 hidden h-px w-full bg-[#081126]/15 lg:block" />

          {/* linha dourada parcial */}
          <div className="absolute left-0 top-3 hidden h-px w-[72%] bg-[#D4AF37] lg:block" />

          <div className="grid gap-14 lg:grid-cols-4 lg:gap-10">
            {steps.map((step, index) => (
              <article
                key={step.number}
                className="relative border-t border-[#081126]/15 pt-8 lg:border-0 lg:pt-12"
              >
                {/* ponto da trajetória */}
                <div
                  className={`
                    absolute
                    top-0
                    hidden
                    h-2.5
                    w-2.5
                    -translate-y-[2px]
                    rounded-full
                    lg:block
                    ${
                      index < 3
                        ? "bg-[#D4AF37]"
                        : "border border-[#A78722] bg-[#F3F0E8]"
                    }
                  `}
                />

                <span className="text-xs tracking-[0.3em] text-[#A78722]">
                  {step.number}
                </span>

                <h3 className="mt-7 text-3xl font-semibold tracking-[-0.04em]">
                  {step.title}
                </h3>

                <p className="mt-5 max-w-[270px] text-sm leading-7 text-[#081126]/60">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* FECHAMENTO */}
        <div className="mt-28 grid gap-8 border-t border-[#081126]/15 pt-8 lg:grid-cols-2 lg:items-end">
          <p className="max-w-xl text-2xl leading-9 tracking-[-0.02em]">
            Não começamos escolhendo tecnologia.
            <span className="text-[#081126]/45">
              {" "}
              Começamos fazendo as perguntas certas.
            </span>
          </p>

          <p className="max-w-md text-sm leading-7 text-[#081126]/50 lg:justify-self-end">
            O processo muda conforme o projeto. A lógica permanece:
            entender antes de construir.
          </p>
        </div>

      </div>
    </section>
  );
}