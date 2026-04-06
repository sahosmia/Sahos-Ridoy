// app/api/og/route.tsx
import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    // ডাইনামিক প্যারামিটার
    const title = searchParams.get("title") || "Sahos Mia";
    const description = searchParams.get("description") || "Creative Developer & UI/UX Designer";
    const type = searchParams.get("type") || "website";

    // ফন্ট লোড করুন (অপশনাল)
    const fontData = await fetch(
      new URL("https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap"),
    ).then((res) => res.text());

    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            background: "linear-gradient(135deg, #0A0A0A 0%, #1A1A2E 100%)",
            fontFamily: "Inter, sans-serif",
          }}
        >
          {/* Background Pattern */}
          <svg
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              opacity: 0.05,
            }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="#fe4e59" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>

          {/* Gradient Orbs */}
          <div
            style={{
              position: "absolute",
              top: -100,
              right: -100,
              width: 400,
              height: 400,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(254,78,89,0.3) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -100,
              left: -100,
              width: 400,
              height: 400,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(131,106,240,0.3) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />

          {/* Main Content */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              padding: "40px 60px",
              position: "relative",
              zIndex: 10,
            }}
          >
            {/* Logo / Badge */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "40px",
                padding: "8px 20px",
                borderRadius: "100px",
                background: "rgba(254,78,89,0.1)",
                border: "1px solid rgba(254,78,89,0.3)",
              }}
            >
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#fe4e59",
                }}
              />
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#fe4e59",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                }}
              >
                {type === "website" ? "Portfolio" : type === "article" ? "Blog Post" : "Project"}
              </span>
            </div>

            {/* Title */}
            <h1
              style={{
                fontSize: "64px",
                fontWeight: 800,
                background: "linear-gradient(135deg, #FFFFFF 0%, #fe4e59 100%)",
                backgroundClip: "text",
                color: "transparent",
                textAlign: "center",
                marginBottom: "24px",
                lineHeight: 1.2,
                maxWidth: "80%",
              }}
            >
              {title}
            </h1>

            {/* Description */}
            <p
              style={{
                fontSize: "28px",
                fontWeight: 400,
                color: "#A1A1AA",
                textAlign: "center",
                marginBottom: "48px",
                maxWidth: "70%",
                lineHeight: 1.4,
              }}
            >
              {description}
            </p>

            {/* Divider */}
            <div
              style={{
                width: "80px",
                height: "4px",
                background: "linear-gradient(90deg, #fe4e59, #836AF0)",
                borderRadius: "2px",
                marginBottom: "48px",
              }}
            />

            {/* Footer */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #fe4e59, #836AF0)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span style={{ fontSize: "24px" }}>👨‍💻</span>
                </div>
                <div>
                  <div style={{ fontSize: "16px", fontWeight: 600, color: "#FFFFFF" }}>
                    Sahos Mia
                  </div>
                  <div style={{ fontSize: "14px", color: "#71717A" }}>
                    Full Stack Developer
                  </div>
                </div>
              </div>

              <div
                style={{
                  width: "1px",
                  height: "40px",
                  background: "#27272A",
                }}
              />

              <div>
                <div style={{ fontSize: "16px", fontWeight: 600, color: "#FFFFFF" }}>
                  sah-os.com
                </div>
                <div style={{ fontSize: "14px", color: "#71717A" }}>
                  Available for work
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Decoration */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "4px",
              background: "linear-gradient(90deg, #fe4e59, #836AF0, #1CBE59, #fe4e59)",
            }}
          />
        </div>
      ),
      {
        width: 1200,
        height: 630,
        headers: {
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      }
    );
  } catch (error) {
    console.error("OG Image generation failed:", error);

    // Fallback OG Image
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#0A0A0A",
            color: "#fe4e59",
            fontSize: "48px",
            fontWeight: "bold",
          }}
        >
          Sahos Mia Portfolio
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  }
}