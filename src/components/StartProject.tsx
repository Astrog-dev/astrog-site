const paths = [
  {
    number: "01",
    title: "Preciso entender melhor meus dados",
    detail: "Business Intelligence",
  },
  {
    number: "02",
    title: "Preciso criar um site ou sistema",
    detail: "Desenvolvimento Web",
  },
  {
    number: "03",
    title: "Tenho uma necessidade diferente",
    detail: "Solução sob medida",
  },
];

export default function StartProject() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-[#050B18] py-28 text-white lg:py-40"
    >
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-12">

        {/* CABEÇALHO */}
        <div className="flex items-center justify-between border-b border-white/10 pb-5">
          <p className="text-xs font-medium uppercase tracking-[0.4em] text-[#D4AF37]">
            Começar um projeto
          </p>

          <span className="text-xs tracking-[0.25em] text-white/30">
            O PRÓXIMO PONTO
          </span>
        </div>

        {/* PERGUNTA */}
        <div className="mt-20 lg:mt-24">
          <p className="text-sm uppercase tracking-[0.25em] text-white/35">
            Qual é o seu ponto de partida?
          </p>

          <h2 className="mt-5 max-w-4xl text-[3rem] font-semibold leading-[1.02] tracking-[-0.05em] sm:text-5xl lg:text-[5.2rem]">
            Não começamos pela solução.
            <span className="block text-white/30">
              Começamos pelo que você precisa resolver.
            </span>
          </h2>
        </div>

        {/* CAMINHOS */}
        <div className="mt-24 border-t border-white/10">
          {paths.map((path) => (
            <a
              key={path.number}
              href="#fale-com-a-gente"
              className="
                group
                grid
                gap-4
                border-b
                border-white/10
                py-8
                transition-colors
                duration-300
                hover:border-[#D4AF37]/60
                md:grid-cols-[70px_1fr_auto_auto]
                md:items-center
              "
            >
              <span className="text-xs tracking-[0.25em] text-[#D4AF37]">
                {path.number}
              </span>

              <h3
                className="
                  text-2xl
                  font-medium
                  tracking-[-0.03em]
                  transition-transform
                  duration-300
                  group-hover:translate-x-2
                  sm:text-3xl
                "
              >
                {path.title}
              </h3>

              <span className="text-sm text-white/35">
                {path.detail}
              </span>

              <span
                className="
                  text-xl
                  text-white/40
                  transition-all
                  duration-300
                  group-hover:translate-x-1
                  group-hover:text-[#D4AF37]
                "
              >
                →
              </span>
            </a>
          ))}
        </div>

        {/* FINAL */}
        <div
          id="fale-com-a-gente"
          className="mt-24 grid gap-10 border-t border-white/10 pt-10 lg:grid-cols-2 lg:items-end"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
              Nenhuma dessas opções?
            </p>

            <p className="mt-5 max-w-xl text-3xl font-medium leading-tight tracking-[-0.03em]">
              Conte o cenário.
              <span className="block text-white/40">
                A gente começa por aí.
              </span>
            </p>
          </div>

          <div className="lg:justify-self-end">
            <a
              href="mailto:SEUEMAILAQUI"
              className="
                group
                inline-flex
                items-center
                gap-5
                border-b
                border-[#D4AF37]
                pb-2
                text-lg
                font-medium
              "
            >
              Falar com a AstroG

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}