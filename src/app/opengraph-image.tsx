import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Golden Heart Orphanage — Every child deserves a chance";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
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
          background: "linear-gradient(135deg, #0a1929 0%, #102a43 50%, #0a1929 100%)",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Background decorative circles */}
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -60,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(245, 158, 11, 0.08)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -100,
            left: -40,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "rgba(20, 184, 166, 0.08)",
          }}
        />

        {/* Logo circle */}
        <div
          style={{
            width: 100,
            height: 100,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #F59E0B, #B45309)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 28,
            boxShadow: "0 8px 32px rgba(245, 158, 11, 0.3)",
          }}
        >
          <div style={{ fontSize: 48, color: "white" }}>♥</div>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 52,
            fontWeight: 800,
            color: "white",
            letterSpacing: "-0.02em",
            marginBottom: 8,
          }}
        >
          Golden Heart Orphanage
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 22,
            color: "#9fb3c8",
            fontWeight: 500,
            marginBottom: 32,
          }}
        >
          Every child deserves a safe place to grow, learn, and dream.
        </div>

        {/* Stats bar */}
        <div
          style={{
            display: "flex",
            gap: 48,
            padding: "16px 40px",
            background: "rgba(255,255,255,0.06)",
            borderRadius: 16,
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ fontSize: 28, fontWeight: 700, color: "#fbbf24" }}>2,400+</div>
            <div style={{ fontSize: 13, color: "#829ab1", marginTop: 2 }}>Lives Transformed</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ fontSize: 28, fontWeight: 700, color: "#2dd4bf" }}>15</div>
            <div style={{ fontSize: 13, color: "#829ab1", marginTop: 2 }}>Communities</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ fontSize: 28, fontWeight: 700, color: "#fbbf24" }}>95%</div>
            <div style={{ fontSize: 13, color: "#829ab1", marginTop: 2 }}>To Children</div>
          </div>
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 24,
            fontSize: 14,
            color: "#627d98",
            letterSpacing: "0.05em",
          }}
        >
          goldenheartorphanage.org
        </div>
      </div>
    ),
    { ...size }
  );
}
