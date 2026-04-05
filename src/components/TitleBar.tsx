"use client";
import { useIsMobile } from "@/src/hooks/use-mobile";

export default function TitleBar() {
  const isMobile = useIsMobile();
  const menus = ["File", "Edit", "View", "Go", "Run", "Terminal", "Help"];

  if (isMobile) {
    return (
      <div
        style={{
          height:        38,           
          background:    "#323233",
          display:       "flex",
          alignItems:    "center",
          padding:       "0 12px",
          borderBottom:  "1px solid #1a1a1a",
          flexShrink:    0,
          userSelect:    "none",
        }}
      >
        <div style={{ display: "flex", gap: 5 }}>
          {["#ff5f56", "#ffbd2e", "#27c93f"].map((c) => (
            <div
              key={c}
              style={{
                width:        10,
                height:       10,
                borderRadius: "50%",
                background:   c,
              }}
            />
          ))}
        </div>
        <div
          style={{
            flex:          1,
            textAlign:     "center",
            fontSize:      11,
            color:         "#9d9d9d",
            letterSpacing: 0.3,
            overflow:      "hidden",
            textOverflow:  "ellipsis",
            whiteSpace:    "nowrap",
            padding:       "0 8px",
          }}
        >
          Malika Laouiti — Portfolio
        </div>
        <span style={{ fontSize: 13, color: "#3a3a3a" }}>⬡</span>
      </div>
    );
  }
  return (
    <div
      style={{
        height:       30,
        background:   "#323233",
        display:      "flex",
        alignItems:   "center",
        padding:      "0 12px",
        borderBottom: "1px solid #1a1a1a",
        gap:          8,
        flexShrink:   0,
        userSelect:   "none",
      }}
    >
      <div style={{ display: "flex", gap: 6 }}>
        {["#ff5f56", "#ffbd2e", "#27c93f"].map((c) => (
          <div
            key={c}
            style={{
              width:        12,
              height:       12,
              borderRadius: "50%",
              background:   c,
              cursor:       "pointer",
            }}
          />
        ))}
      </div>

      <div style={{ display: "flex", gap: 2 }}>
        {menus.map((m) => (
          <span
            key={m}
            style={{
              fontSize:     12,
              color:        "#ccc",
              cursor:       "pointer",
              padding:      "2px 6px",
              borderRadius: 3,
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.background = "rgba(255,255,255,0.08)")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.background = "transparent")
            }
          >
            {m}
          </span>
        ))}
      </div>

      <div
        style={{
          flex:          1,
          textAlign:     "center",
          fontSize:      12,
          color:         "#9d9d9d",
          letterSpacing: 0.3,
        }}
      >
        Malika-Laouiti-Portfolio — Visual Studio Code
      </div>
    </div>
  );
}