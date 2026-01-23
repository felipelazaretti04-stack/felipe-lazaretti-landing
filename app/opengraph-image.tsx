import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background:
            "radial-gradient(900px 500px at 20% 10%, rgba(59,130,246,0.25), transparent 60%), radial-gradient(900px 500px at 80% 0%, rgba(16,185,129,0.22), transparent 55%), linear-gradient(180deg, #06070a 0%, #070914 60%, #06070a 100%)",
          color: "white"
        }}
      >
        <div style={{ fontSize: 56, fontWeight: 700, letterSpacing: -1 }}>
          Felipe Lazaretti
        </div>
        <div style={{ fontSize: 34, marginTop: 16, opacity: 0.92 }}>
          Sites profissionais, rápidos e sob medida.
        </div>
        <div style={{ fontSize: 22, marginTop: 22, opacity: 0.78 }}>
          Design limpo • copy clara • presença online forte
        </div>
      </div>
    ),
    size
  );
}
