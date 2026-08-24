import { ImageResponse } from "next/og";

export const alt =
  "BMaxy — Projeto de Desenvolvimento Web pela AstroG";

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

          background: "#F4F0E7",
          color: "#0B132B",

          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* =====================================================
            LINHA SUPERIOR
        ====================================================== */}

        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: "84px",
            height: "1px",
            display: "flex",
            background: "rgba(11,19,43,0.12)",
          }}
        />

        {/* =====================================================
            CABEÇALHO
        ====================================================== */}

        <div
          style={{
            position: "absolute",
            left: "70px",
            right: "70px",
            top: "30px",

            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",

              fontSize: "14px",

              color: "rgba(11,19,43,0.50)",
            }}
          >
            <span
              style={{
                display: "flex",
                color: "#A78722",
              }}
            >
              ←
            </span>

            AstroG
          </div>

          <div
            style={{
              display: "flex",

              fontSize: "10px",

              textTransform: "uppercase",
              letterSpacing: "5px",

              color: "rgba(11,19,43,0.30)",
            }}
          >
            Arquivo 01 / BMaxy
          </div>
        </div>

        {/* =====================================================
            CONTEÚDO ESQUERDO
        ====================================================== */}

        <div
          style={{
            position: "relative",
            

            width: "710px",
            height: "100%",

            display: "flex",
            flexDirection: "column",
            justifyContent: "center",

            paddingLeft: "72px",
            paddingTop: "65px",
          }}
        >
          {/* ROTA */}
          <div
            style={{
              display: "flex",

              marginBottom: "28px",

              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "5px",

              color: "#A78722",
            }}
          >
            Rota 01 / Desenvolvimento Web
          </div>

          {/* TÍTULO */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",

              fontSize: "67px",
              fontWeight: 700,

              lineHeight: 0.96,
              letterSpacing: "-4px",
            }}
          >
            <span style={{ display: "flex" }}>
              BMaxy não
            </span>

            <span style={{ display: "flex" }}>
              começou
            </span>

            <span
              style={{
                display: "flex",
                color: "rgba(11,19,43,0.25)",
              }}
            >
              pela interface.
            </span>
          </div>

          {/* TEXTO */}
          <div
            style={{
              display: "flex",

              width: "520px",

              marginTop: "34px",
              paddingLeft: "20px",

              borderLeft:
                "1px solid #D4AF37",

              fontSize: "17px",
              lineHeight: 1.6,

              color: "rgba(11,19,43,0.68)",
            }}
          >
            Uma presença digital criada para organizar livros,
            consultoria, ghostwriting e curso em uma experiência única.
          </div>

          {/* =================================================
              INFORMAÇÕES
          ================================================== */}

          <div
            style={{
              width: "520px",

              display: "flex",

              marginTop: "38px",
              paddingTop: "20px",

              borderTop:
                "1px solid rgba(11,19,43,0.14)",
            }}
          >
            {/* ORIGEM */}
            <div
              style={{
                width: "175px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  display: "flex",

                  fontSize: "9px",
                  textTransform: "uppercase",
                  letterSpacing: "4px",

                  color:
                    "rgba(11,19,43,0.30)",
                }}
              >
                Origem
              </span>

              <span
                style={{
                  display: "flex",

                  marginTop: "8px",

                  fontSize: "13px",
                }}
              >
                Presença digital
              </span>
            </div>

            {/* BASE */}
            <div
              style={{
                width: "195px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  display: "flex",

                  fontSize: "9px",
                  textTransform: "uppercase",
                  letterSpacing: "4px",

                  color:
                    "rgba(11,19,43,0.30)",
                }}
              >
                Base
              </span>

              <span
                style={{
                  display: "flex",

                  marginTop: "8px",

                  fontSize: "13px",
                }}
              >
                Next.js · TypeScript
              </span>
            </div>

            {/* REGISTRO */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  display: "flex",

                  fontSize: "9px",
                  textTransform: "uppercase",
                  letterSpacing: "4px",

                  color:
                    "rgba(11,19,43,0.30)",
                }}
              >
                Registro
              </span>

              <span
                style={{
                  display: "flex",

                  marginTop: "8px",

                  fontSize: "13px",
                }}
              >
                2026
              </span>
            </div>
          </div>
        </div>

        {/* =====================================================
            ROTA / ÓRBITA DIREITA
        ====================================================== */}

        <div
          style={{
            position: "absolute",

            right: "-20px",
            top: "90px",

            width: "520px",
            height: "540px",

            display: "flex",
          }}
        >
          <svg
            width="520"
            height="540"
            viewBox="0 0 520 540"
            fill="none"
          >
            {/* CAMINHO BASE */}
            <path
              d="
                M65 90
                C235 40 390 105 370 235
                C355 330 415 345 385 420
                C360 480 305 505 235 520
              "
              stroke="rgba(11,19,43,0.13)"
              strokeWidth="1.3"
            />

            {/* CAMINHO DOURADO */}
            <path
              d="
                M65 90
                C235 40 390 105 370 235
                C355 330 415 345 385 420
              "
              stroke="#D4AF37"
              strokeWidth="2"
            />

            {/* ROTA SECUNDÁRIA */}
            <path
              d="
                M130 155
                C245 110 325 175 310 260
                C300 325 340 350 320 410
              "
              stroke="rgba(212,175,55,0.23)"
              strokeWidth="1"
            />

            {/* 01 */}
            <circle
              cx="65"
              cy="90"
              r="8"
              fill="#D4AF37"
            />

            {/* 02 */}
            <circle
              cx="370"
              cy="235"
              r="7"
              fill="#F4F0E7"
              stroke="#D4AF37"
              strokeWidth="2"
            />

            {/* 03 */}
            <circle
              cx="385"
              cy="420"
              r="8"
              fill="#D4AF37"
            />

            {/* 04 */}
            <circle
              cx="235"
              cy="520"
              r="7"
              fill="#F4F0E7"
              stroke="#D4AF37"
              strokeWidth="2"
            />
          </svg>

          {/* =================================================
              01
          ================================================== */}

          <div
            style={{
              position: "absolute",
              left: "88px",
              top: "66px",

              display: "flex",
              flexDirection: "column",
            }}
          >
            <span
              style={{
                display: "flex",

                fontSize: "9px",
                letterSpacing: "4px",

                color: "#A78722",
              }}
            >
              01
            </span>

            <span
              style={{
                display: "flex",

                marginTop: "5px",

                fontSize: "14px",
              }}
            >
              Origem
            </span>
          </div>

          {/* =================================================
              02
          ================================================== */}

          <div
            style={{
              position: "absolute",
              left: "395px",
              top: "210px",

              display: "flex",
              flexDirection: "column",
            }}
          >
            <span
              style={{
                display: "flex",

                fontSize: "9px",
                letterSpacing: "4px",

                color: "#A78722",
              }}
            >
              02
            </span>

            <span
              style={{
                display: "flex",

                marginTop: "5px",

                fontSize: "14px",

                color:
                  "rgba(11,19,43,0.48)",
              }}
            >
              Estrutura
            </span>
          </div>

          {/* =================================================
              03
          ================================================== */}

          <div
            style={{
              position: "absolute",
              left: "410px",
              top: "397px",

              display: "flex",
              flexDirection: "column",
            }}
          >
            <span
              style={{
                display: "flex",

                fontSize: "9px",
                letterSpacing: "4px",

                color: "#A78722",
              }}
            >
              03
            </span>

            <span
              style={{
                display: "flex",

                marginTop: "5px",

                fontSize: "14px",

                color:
                  "rgba(11,19,43,0.48)",
              }}
            >
              Interface
            </span>
          </div>

          {/* =================================================
              04
          ================================================== */}

          <div
            style={{
              position: "absolute",
              left: "258px",
              top: "495px",

              display: "flex",
              flexDirection: "column",
            }}
          >
            <span
              style={{
                display: "flex",

                fontSize: "9px",
                letterSpacing: "4px",

                color: "#A78722",
              }}
            >
              04
            </span>

            <span
              style={{
                display: "flex",

                marginTop: "5px",

                fontSize: "14px",

                color:
                  "rgba(11,19,43,0.48)",
              }}
            >
              Entrega
            </span>
          </div>
        </div>

        {/* =====================================================
            DETALHE INFERIOR
        ====================================================== */}

        <div
          style={{
            position: "absolute",

            right: "64px",
            bottom: "30px",

            display: "flex",
            alignItems: "center",

            gap: "12px",
          }}
        >
          <div
            style={{
              display: "flex",

              fontSize: "9px",

              textTransform: "uppercase",
              letterSpacing: "4px",

              color:
                "rgba(11,19,43,0.28)",
            }}
          >
            AstroG / Arquivo 01
          </div>

          <div
            style={{
              width: "7px",
              height: "7px",

              display: "flex",

              borderRadius: "50%",

              background: "#D4AF37",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}