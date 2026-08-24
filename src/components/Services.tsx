const services = [
  {
    number: "01",
    eyebrow: "Dados",
    title: "Business Intelligence",
    description:
      "Transformamos dados dispersos em uma visão clara do negócio, criando dashboards e indicadores que ajudam a acompanhar resultados e tomar decisões.",
    deliverables: "Dashboards · Indicadores · Visualização de dados",
  },
  {
    number: "02",
    eyebrow: "Produto digital",
    title: "Desenvolvimento Web",
    description:
      "Criamos experiências digitais a partir da necessidade de cada projeto — da estrutura e experiência até o desenvolvimento e publicação.",
    deliverables: "Sites · Sistemas · Aplicações web",
  },
  {
    number: "03",
    eyebrow: "Estrutura",
    title: "Soluções Digitais",
    description:
      "Desenhamos soluções para processos que precisam ganhar organização, eficiência ou uma nova forma de funcionar dentro do negócio.",
    deliverables: "Processos · Integrações · Soluções sob medida",
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      className="relative overflow-hidden bg-[#030B22] py-28 text-white lg:py-40"
    >
      {/* LINHA DE TRAJETÓRIA DA ASTROG */}
      <svg
        className="pointer-events-none absolute left-1/2 top-[18%] hidden h-[72%] w-[180px] -translate-x-1/2 opacity-40 lg:block"
        viewBox="0 0 180 900"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M90 0C25 130 160 220 90 350C25 480 160 570 90 700C55 765 55 835 90 900"
          stroke="#D4AF37"
          strokeWidth="1"
        />

        <circle cx="90" cy="350" r="4" fill="#D4AF37" />
        <circle cx="90" cy="700" r="4" fill="#D4AF37" />
      </svg>

      <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-12">

        {/* ABERTURA */}
        <div className="flex items-end justify-between border-b border-white/10 pb-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.4em] text-[#D4AF37]">
              O que construímos
            </p>
          </div>

          <p className="hidden max-w-sm text-right text-sm leading-6 text-white/40 md:block">
            Cada entrega começa pelo contexto do projeto, não por uma solução
            pré-definida.
          </p>
        </div>

        {/* SERVIÇOS */}
        <div className="mt-20 space-y-28 lg:mt-28 lg:space-y-40">
          {services.map((service, index) => {
            const reverse = index === 1;

            return (
              <article
                key={service.number}
                className={`
                  grid gap-10
                  lg:grid-cols-2
                  lg:items-center
                  lg:gap-24
                `}
              >
                {/* TÍTULO */}
                <div
                  className={
                    reverse
                      ? "lg:order-2 lg:pl-14"
                      : "lg:order-1 lg:pr-14"
                  }
                >
                  <div className="flex items-center gap-5">
                    <span className="text-xs tracking-[0.3em] text-[#D4AF37]">
                      {service.number}
                    </span>

                    <span className="h-px w-10 bg-[#D4AF37]/60" />

                    <span className="text-xs uppercase tracking-[0.3em] text-white/35">
                      {service.eyebrow}
                    </span>
                  </div>

                  <h3
                    className="
                      mt-7
                      text-[2.8rem]
                      font-semibold
                      leading-[0.95]
                      tracking-[-0.05em]
                      text-white
                      sm:text-5xl
                      lg:text-[4.7rem]
                    "
                  >
                    {service.title}
                  </h3>
                </div>

                {/* TEXTO */}
                <div
                  className={
                    reverse
                      ? "lg:order-1 lg:pr-14"
                      : "lg:order-2 lg:pl-14"
                  }
                >
                  <p className="max-w-xl text-lg leading-8 text-[#D6DAE3]">
                    {service.description}
                  </p>

                  <div className="mt-8 border-t border-white/10 pt-5">
                    <p className="text-xs uppercase tracking-[0.25em] text-white/30">
                      Entregas
                    </p>

                    <p className="mt-3 text-sm text-white/65">
                      {service.deliverables}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* FECHAMENTO */}
        <div className="mt-32 border-t border-white/10 pt-8 lg:mt-40">
          <p className="max-w-3xl text-2xl leading-10 text-white/75 lg:text-3xl">
            A tecnologia entra depois.
            <span className="text-white">
              {" "}
              Primeiro entendemos o que precisa funcionar.
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}