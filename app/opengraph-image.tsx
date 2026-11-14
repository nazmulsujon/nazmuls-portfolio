import { ImageResponse } from "next/og";

export const alt = "Nazmul Hoque: websites that rank on Google and get cited by AI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px",
          background: "linear-gradient(135deg, #060B1E 0%, #0E2A6B 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, color: "#38BDF8", letterSpacing: 4, textTransform: "uppercase", display: "flex" }}>
          AI-powered web developer and SEO specialist
        </div>
        <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.08, marginTop: 24, display: "flex", flexDirection: "column" }}>
          <span>Websites that rank on Google</span>
          <span style={{ color: "#38BDF8" }}>&amp; get cited by AI.</span>
        </div>
        <div style={{ fontSize: 32, marginTop: 36, color: "#C9D4F2", display: "flex" }}>Next.js - WordPress - SEO - AEO - GEO - Google and Meta Ads</div>
        <div style={{ fontSize: 30, marginTop: 28, color: "#6EE7B7", display: "flex" }}>Nazmul Hoque | nazmuls-portfolio.vercel.app</div>
      </div>
    ),
    size,
  );
}
