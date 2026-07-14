import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Alvor Energia — Orçamento de Energia Solar";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #059669 0%, #0891b2 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
          padding: "60px",
        }}
      >
        <div
          style={{
            fontSize: 48,
            fontWeight: 700,
            marginBottom: 16,
          }}
        >
          Alvor Energia
        </div>
        <div
          style={{
            fontSize: 28,
            opacity: 0.9,
            textAlign: "center",
            maxWidth: 800,
          }}
        >
          Orçamento Grátis de Energia Solar
        </div>
        <div
          style={{
            fontSize: 20,
            opacity: 0.75,
            marginTop: 24,
          }}
        >
          Proposta personalizada em até 24 horas
        </div>
      </div>
    ),
    { ...size }
  );
}
