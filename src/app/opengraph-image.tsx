import { ImageResponse } from "next/og";

export const alt =
  "AstroG — Business Intelligence & Soluções Digitais";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          position: "relative",
          display: "flex",
          overflow: "hidden",

          background:
            "linear-gradient(180deg, #030B22 0%, #020817 100%)",

          color: "#F5F7FA",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* =====================================================
            FUNDO
        ====================================================== */}

        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",

            background:
              "radial-gradient(circle at 82% 40%, rgba(32,61,131,0.32) 0%, rgba(3,11,34,0) 44%)",
          }}
        />

        {/* brilho secundário */}
        <div
          style={{
            position: "absolute",

            right: "-120px",
            top: "-120px",

            width: "700px",
            height: "700px",

            display: "flex",

            borderRadius: "50%",

            background:
              "radial-gradient(circle, rgba(41,76,160,0.25) 0%, rgba(3,11,34,0) 72%)",
          }}
        />

        {/* =====================================================
            MAPA DE ROTAS — DIREITA
        ====================================================== */}

        <div
          style={{
            position: "absolute",

            right: "10px",
            top: "40px",

            width: "560px",
            height: "550px",

            display: "flex",
          }}
        >
          <svg
            width="560"
            height="550"
            viewBox="0 0 560 550"
            fill="none"
          >
            {/* ===============================================
                ROTA PRINCIPAL
            ================================================ */}

            <path
              d="
                M65 145
                C170 65 315 72 390 165
                C455 245 420 330 480 382
                C505 405 520 442 500 485
              "
              stroke="#D4AF37"
              strokeWidth="2"
            />

            {/* trecho secundário */}
            <path
              d="
                M105 220
                C205 150 310 165 360 240
                C400 300 375 365 420 405
              "
              stroke="rgba(212,175,55,0.25)"
              strokeWidth="1.2"
            />

            {/* terceira trajetória */}
            <path
              d="
                M185 500
                C260 415 340 395 430 420
              "
              stroke="rgba(168,176,184,0.18)"
              strokeWidth="1"
            />

            {/* ===============================================
                PONTOS / COORDENADAS
            ================================================ */}

            {/* 01 */}
            <circle
              cx="65"
              cy="145"
              r="8"
              fill="#D4AF37"
            />

            <circle
              cx="65"
              cy="145"
              r="16"
              stroke="rgba(212,175,55,0.20)"
              strokeWidth="1"
            />

            {/* 02 */}
            <circle
              cx="390"
              cy="165"
              r="7"
              fill="#030B22"
              stroke="#D4AF37"
              strokeWidth="2"
            />

            {/* 03 */}
            <circle
              cx="480"
              cy="382"
              r="8"
              fill="#D4AF37"
            />

            {/* 04 */}
            <circle
              cx="500"
              cy="485"
              r="7"
              fill="#030B22"
              stroke="#D4AF37"
              strokeWidth="2"
            />

            {/* ===============================================
                PONTOS PEQUENOS
            ================================================ */}

            <circle
              cx="237"
              cy="93"
              r="4"
              fill="#D4AF37"
            />

            <circle
              cx="363"
              cy="285"
              r="4"
              fill="#D4AF37"
            />

            <circle
              cx="425"
              cy="405"
              r="3.5"
              fill="#D4AF37"
            />
          </svg>

          {/* =================================================
              LABEL 01
          ================================================== */}

          <div
            style={{
              position: "absolute",

              left: "88px",
              top: "112px",

              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",

                fontSize: "10px",
                letterSpacing: "4px",

                color: "#D4AF37",
              }}
            >
              01
            </div>

            <div
              style={{
                display: "flex",

                marginTop: "5px",

                fontSize: "15px",

                color: "rgba(245,247,250,0.80)",
              }}
            >
              Entender
            </div>
          </div>

          {/* =================================================
              LABEL 02
          ================================================== */}

          <div
            style={{
              position: "absolute",

              left: "414px",
              top: "130px",

              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",

                fontSize: "10px",
                letterSpacing: "4px",

                color: "#D4AF37",
              }}
            >
              02
            </div>

            <div
              style={{
                display: "flex",

                marginTop: "5px",

                fontSize: "15px",

                color: "rgba(245,247,250,0.55)",
              }}
            >
              Estruturar
            </div>
          </div>

          {/* =================================================
              LABEL 03
          ================================================== */}

          <div
            style={{
              position: "absolute",

              left: "385px",
              top: "350px",

              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <div
              style={{
                display: "flex",

                fontSize: "10px",
                letterSpacing: "4px",

                color: "#D4AF37",
              }}
            >
              03
            </div>

            <div
              style={{
                display: "flex",

                marginTop: "5px",

                fontSize: "15px",

                color: "rgba(245,247,250,0.55)",
              }}
            >
              Construir
            </div>
          </div>

          {/* =================================================
              LABEL 04
          ================================================== */}

          <div
            style={{
              position: "absolute",

              left: "375px",
              top: "465px",

              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <div
              style={{
                display: "flex",

                fontSize: "10px",
                letterSpacing: "4px",

                color: "#D4AF37",
              }}
            >
              04
            </div>

            <div
              style={{
                display: "flex",

                marginTop: "5px",

                fontSize: "15px",

                color: "rgba(245,247,250,0.55)",
              }}
            >
              Evoluir
            </div>
          </div>

          {/* =================================================
              LEGENDA SUPERIOR
          ================================================== */}

          <div
            style={{
              position: "absolute",

              right: "18px",
              top: "28px",

              display: "flex",
              alignItems: "center",

              gap: "12px",
            }}
          >
            <div
              style={{
                width: "52px",
                height: "1px",

                display: "flex",

                background: "rgba(212,175,55,0.35)",
              }}
            />

            <div
              style={{
                display: "flex",

                fontSize: "9px",

                textTransform: "uppercase",
                letterSpacing: "4px",

                color: "rgba(245,247,250,0.30)",
              }}
            >
              Rota AstroG
            </div>
          </div>
        </div>

        {/* =====================================================
            DEGRADÊ ENTRE TEXTO E ROTAS
        ====================================================== */}

        <div
          style={{
            position: "absolute",

            inset: 0,

            display: "flex",

            background:
              "linear-gradient(90deg, #030B22 0%, rgba(3,11,34,0.98) 34%, rgba(3,11,34,0.72) 50%, rgba(3,11,34,0.12) 68%, rgba(3,11,34,0) 82%)",
          }}
        />

        {/* =====================================================
            CONTEÚDO ESQUERDO
        ====================================================== */}

        <div
          style={{
            position: "relative",
        

            width: "720px",
            height: "100%",

            display: "flex",
            flexDirection: "column",
            justifyContent: "center",

            paddingLeft: "78px",
          }}
        >
          {/* =================================================
              ASTROG
          ================================================== */}

          <div
            style={{
              display: "flex",
              alignItems: "center",

              marginBottom: "24px",

              fontSize: "26px",
              fontWeight: 700,

              letterSpacing: "8px",
            }}
          >
            Astro

            <span
              style={{
                color: "#D4AF37",
              }}
            >
              G
            </span>
          </div>

          {/* =================================================
              EYEBROW
          ================================================== */}

          <div
            style={{
              display: "flex",

              marginBottom: "28px",

              fontSize: "12px",
              fontWeight: 500,

              textTransform: "uppercase",
              letterSpacing: "5px",

              color: "#D4AF37",
            }}
          >
            Business Intelligence & Soluções Digitais
          </div>

          {/* =================================================
              TÍTULO
          ================================================== */}

          <div
            style={{
              display: "flex",
              flexDirection: "column",

              fontSize: "54px",
              fontWeight: 700,

              lineHeight: 1.04,

              letterSpacing: "-2.6px",
            }}
          >
            <div style={{ display: "flex" }}>
              Transformamos dados
            </div>

            <div style={{ display: "flex" }}>
              e tecnologia em
            </div>

            <div style={{ display: "flex" }}>
              soluções que
            </div>

            <div style={{ display: "flex" }}>
              impulsionam negócios

              <span
                style={{
                  color: "#D4AF37",
                }}
              >
                .
              </span>
            </div>
          </div>

          {/* =================================================
              DESCRIÇÃO
          ================================================== */}

          <div
            style={{
              display: "flex",

              width: "555px",

              marginTop: "27px",

              fontSize: "17px",

              lineHeight: 1.55,

              color: "#A8B0B8",
            }}
          >
            Criamos soluções digitais, dashboards e experiências web
            pensadas para gerar valor, eficiência e crescimento.
          </div>

          {/* =================================================
              ASSINATURA
          ================================================== */}

          <div
            style={{
              display: "flex",
              alignItems: "center",

              gap: "13px",

              marginTop: "36px",
            }}
          >
            <div
              style={{
                width: "7px",
                height: "7px",

                display: "flex",

                borderRadius: "50%",

                background: "#D4AF37",
              }}
            />

            <div
              style={{
                display: "flex",

                fontSize: "10px",

                textTransform: "uppercase",
                letterSpacing: "4px",

                color: "#D4AF37",
              }}
            >
              01 / AstroG
            </div>

            <div
              style={{
                width: "72px",
                height: "1px",

                display: "flex",

                background:
                  "rgba(212,175,55,0.40)",
              }}
            />

            <div
              style={{
                display: "flex",

                fontSize: "10px",

                textTransform: "uppercase",
                letterSpacing: "4px",

                color:
                  "rgba(245,247,250,0.30)",
              }}
            >
              Em movimento
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}