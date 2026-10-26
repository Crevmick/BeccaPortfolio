import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Rebecca Adewumi — Social Media Manager, Content Strategist and Content Creator";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const logoData = await readFile(join(process.cwd(), "public", "brand-logo.png"), "base64");
const logoSrc = `data:image/png;base64,${logoData}`;

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#F8F5EE",
          color: "#201D1A",
          padding: "64px 72px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ position: "absolute", width: 430, height: 430, borderRadius: 999, background: "#D3C5E9", right: -120, top: -180, display: "flex" }} />
        <div style={{ position: "absolute", width: 270, height: 270, borderRadius: 999, background: "#F7E078", right: 90, bottom: -170, display: "flex" }} />
        <div style={{ position: "absolute", width: 12, height: "100%", background: "#492A86", left: 0, top: 0, display: "flex" }} />

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
            <div style={{ width: 106, height: 106, borderRadius: 999, overflow: "hidden", border: "3px solid #492A86", background: "white", display: "flex" }}>
              <img src={logoSrc} width={106} height={106} alt="" style={{ objectFit: "cover" }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 34, fontWeight: 700 }}>Rebecca Adewumi</span>
              <span style={{ marginTop: 7, fontSize: 18, letterSpacing: 3, textTransform: "uppercase", color: "#492A86", fontFamily: "Arial, sans-serif", fontWeight: 700 }}>Your Online Growth Padi</span>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}>
            <span style={{ fontSize: 66, lineHeight: 1.05, fontWeight: 700, letterSpacing: -2 }}>Strategic content that turns attention into meaningful growth.</span>
            <span style={{ marginTop: 25, fontSize: 24, lineHeight: 1.4, color: "#57534E", fontFamily: "Arial, sans-serif" }}>Social Media Management · Content Strategy · Content Creation</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: "Arial, sans-serif", fontSize: 17, fontWeight: 700, color: "#492A86" }}>
            <span style={{ width: 36, height: 4, background: "#492A86", borderRadius: 99, display: "flex" }} />
            Helping schools and growing brands show up with clarity
          </div>
        </div>
      </div>
    ),
    size,
  );
}
