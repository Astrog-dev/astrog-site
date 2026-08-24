"use client";

import { FormEvent, useEffect, useState } from "react";

type ContactDrawerProps = {
  open: boolean;
  onClose: () => void;
  routeName: string;
};

const WHATSAPP_NUMBER = "5521983332112";

export default function ContactDrawer({
  open,
  onClose,
  routeName,
}: ContactDrawerProps) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [scenario, setScenario] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    contact: "",
    scenario: "",
  });

  const formIsReady =
    name.trim() !== "" &&
    contact.trim() !== "" &&
    scenario.trim() !== "";

  /* =====================================================
     COMPORTAMENTO DO PAINEL
  ====================================================== */

  useEffect(() => {
    if (!open) return;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [open, onClose]);

  /* =====================================================
     VALIDAÇÃO
  ====================================================== */

  function validateForm() {
    const newErrors = {
      name: "",
      contact: "",
      scenario: "",
    };

    if (!name.trim()) {
      newErrors.name =
        "Como podemos chamar você?";
    }

    if (!contact.trim()) {
      newErrors.contact =
        "Informe um WhatsApp ou e-mail.";
    }

    if (!scenario.trim()) {
      newErrors.scenario =
        "Conte brevemente o que você precisa resolver.";
    }

    setErrors(newErrors);

    return (
      !newErrors.name &&
      !newErrors.contact &&
      !newErrors.scenario
    );
  }

  /* =====================================================
     ENVIO PARA WHATSAPP
  ====================================================== */

  function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const valid = validateForm();

    if (!valid) {
      return;
    }

    const message = `
Olá, AstroG! 

Quero conversar sobre um projeto.

*Ponto de partida*
${routeName}

*Nome*
${name}

*Meu contato*
${contact}

*Cenário*
${scenario}
    `.trim();

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        message
      )}`;

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <>
      {/* =====================================================
          FUNDO ESCURECIDO
      ====================================================== */}

      <div
        onClick={onClose}
        aria-hidden="true"
        className={`
          fixed
          inset-0
          z-[90]
          bg-[#030B22]/55
          backdrop-blur-[3px]
          transition-opacity
          duration-500

          ${
            open
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      />

      {/* =====================================================
          PAINEL
      ====================================================== */}

      <aside
        aria-hidden={!open}
        className={`
          fixed
          right-0
          top-0
          z-[100]
          h-screen
          w-full
          max-w-[520px]
          bg-[#F4F0E7]
          text-[#0B132B]
          shadow-[-20px_0_60px_rgba(3,11,34,0.16)]
          transition-transform
          duration-500
          ease-out

          ${
            open
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        <form
          onSubmit={handleSubmit}
          className="flex h-full flex-col overflow-y-auto px-8 py-8 sm:px-12"
        >
          {/* TOPO */}

          <div className="flex items-center justify-between border-b border-[#0B132B]/15 pb-5">
            <p className="text-xs uppercase tracking-[0.35em] text-[#A78722]">
              Vamos conversar
            </p>

            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar painel de contato"
              className="
                text-2xl
                font-light
                text-[#0B132B]/45
                transition-all
                duration-300
                hover:rotate-90
                hover:text-[#0B132B]
              "
            >
              ×
            </button>
          </div>

          {/* ROTA */}

          <div className="mt-10">
            <p className="text-xs uppercase tracking-[0.25em] text-[#0B132B]/35">
              Seu ponto de partida
            </p>

            <p className="mt-3 text-lg font-medium">
              {routeName}
            </p>
          </div>

          {/* INTRODUÇÃO */}

          <h2 className="mt-10 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl">
            Conte um pouco

            <span className="block text-[#0B132B]/30">
              sobre o cenário.
            </span>
          </h2>

          <p className="mt-6 max-w-md text-sm leading-7 text-[#0B132B]/55">
            Não precisa chegar com escopo, tecnologia
            ou estrutura definidos. Comece pelo que
            você precisa resolver.
          </p>

          {/* CAMPOS */}

          <div className="mt-12 space-y-9">

            {/* NOME */}
            <div>
              <label
                htmlFor="nome"
                className="text-xs uppercase tracking-[0.25em] text-[#0B132B]/40"
              >
                Seu nome
              </label>

              <input
                id="nome"
                type="text"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);

                  if (errors.name) {
                    setErrors((previous) => ({
                      ...previous,
                      name: "",
                    }));
                  }
                }}
                autoComplete="name"
                className="
                  mt-3
                  w-full
                  border-b
                  border-[#0B132B]/20
                  bg-transparent
                  pb-3
                  text-base
                  outline-none
                  transition-colors
                  duration-300
                  focus:border-[#D4AF37]
                "
              />

              {errors.name && (
                <p className="mt-2 text-xs text-[#9A5B45]">
                  {errors.name}
                </p>
              )}
            </div>

            {/* CONTATO */}
            <div>
              <label
                htmlFor="contato"
                className="text-xs uppercase tracking-[0.25em] text-[#0B132B]/40"
              >
                Como podemos falar com você?
              </label>

              <input
                id="contato"
                type="text"
                value={contact}
                onChange={(event) => {
                  setContact(event.target.value);

                  if (errors.contact) {
                    setErrors((previous) => ({
                      ...previous,
                      contact: "",
                    }));
                  }
                }}
                placeholder="WhatsApp ou e-mail"
                className="
                  mt-3
                  w-full
                  border-b
                  border-[#0B132B]/20
                  bg-transparent
                  pb-3
                  text-base
                  outline-none
                  placeholder:text-[#0B132B]/25
                  transition-colors
                  duration-300
                  focus:border-[#D4AF37]
                "
              />

              {errors.contact && (
                <p className="mt-2 text-xs text-[#9A5B45]">
                  {errors.contact}
                </p>
              )}
            </div>

            {/* CENÁRIO */}
            <div>
              <label
                htmlFor="cenario"
                className="text-xs uppercase tracking-[0.25em] text-[#0B132B]/40"
              >
                Conte o cenário
              </label>

              <textarea
                id="cenario"
                rows={3}
                value={scenario}
                onChange={(event) => {
                  setScenario(event.target.value);

                  if (errors.scenario) {
                    setErrors((previous) => ({
                      ...previous,
                      scenario: "",
                    }));
                  }
                }}
                placeholder="O que você gostaria de criar, melhorar ou resolver?"
                className="
                  mt-3
                  w-full
                  resize-none
                  border-b
                  border-[#0B132B]/20
                  bg-transparent
                  pb-3
                  text-base
                  leading-7
                  outline-none
                  placeholder:text-[#0B132B]/25
                  transition-colors
                  duration-300
                  focus:border-[#D4AF37]
                "
              />

              {errors.scenario && (
                <p className="mt-2 text-xs text-[#9A5B45]">
                  {errors.scenario}
                </p>
              )}
            </div>
          </div>

          {/* CONTINUAR */}

          <div className="mt-auto pt-12">
            <button
              type="submit"
              className={`
                group
                flex
                w-full
                items-center
                justify-between
                border-t
                pt-5
                text-lg
                font-medium
                transition-all
                duration-300

                ${
                  formIsReady
                    ? "border-[#D4AF37] text-[#0B132B]"
                    : "border-[#0B132B]/30 text-[#0B132B]/55"
                }
              `}
            >
              <span>
                Continuar no WhatsApp
              </span>

              <span
                className={`
                  transition-all
                  duration-300

                  ${
                    formIsReady
                      ? "text-[#A78722] group-hover:translate-x-1"
                      : "text-[#0B132B]/30"
                  }
                `}
              >
                →
              </span>
            </button>
          </div>
        </form>
      </aside>
    </>
  );
}