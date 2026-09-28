import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Satori can't parse woff2, so this deliberately uses the renderer's default
// sans rather than trying to load Clash Display / Satoshi.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0c",
          padding: "72px",
          position: "relative",
        }}
      >
        {/* Accent bloom, mirroring the site's atmosphere layer. */}
        <div
          style={{
            position: "absolute",
            top: -260,
            left: -160,
            width: 760,
            height: 760,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(59,79,216,0.55), rgba(10,10,12,0) 68%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -200,
            width: 640,
            height: 640,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(109,40,217,0.45), rgba(10,10,12,0) 68%)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              fontSize: 30,
              fontWeight: 700,
              color: "#f4f4f0",
              letterSpacing: "-0.02em",
            }}
          >
            Persian
          </div>
          {/* Drawn, not typed: the ★ glyph is absent from Satori's default
              font and would trigger a network font fetch. */}
          <svg width="26" height="26" viewBox="0 0 32 32" fill="#7b8fff">
            <path d="M16 6 L18.47 12.60 L25.51 12.91 L19.99 17.30 L21.88 24.09 L16 20.20 L10.12 24.09 L12.01 17.30 L6.49 12.91 L13.53 12.60 Z" />
          </svg>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#f4f4f0",
              lineHeight: 1.05,
              letterSpacing: "-0.035em",
              maxWidth: 940,
            }}
          >
            Web developer building AI products with front-end craft.
          </div>
          <div
            style={{
              marginTop: 32,
              fontSize: 28,
              color: "#a0a0a8",
              letterSpacing: "0.02em",
            }}
          >
            {`${site.name} — ${site.location}`}
          </div>
        </div>

        <div
          style={{
            height: 4,
            width: "100%",
            background: "linear-gradient(to right, #3b4fd8, rgba(59,79,216,0))",
          }}
        />
      </div>
    ),
    size,
  );
}
