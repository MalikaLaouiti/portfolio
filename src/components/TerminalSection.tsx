import { forwardRef } from "react";
import { BOOT_LINES, LINE_COLORS } from "@/src/lib/bootLines";

interface TerminalSectionProps {
  visibleLines: number[];
  cursorBlink: boolean;
}

export const TerminalSection = forwardRef<HTMLDivElement, TerminalSectionProps>(
  ({ visibleLines, cursorBlink }, ref) => {
    return (
      <>
        {/* IDE Title Bar */}
        <div
          style={{
            background: "#1a1a1a",
            border: "1px solid #2a2a2a",
            borderBottom: "none",
            borderRadius: "6px 6px 0 0",
            padding: "8px 14px",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <div style={{ display: "flex", gap: 6 }}>
            {["#ff5f56", "#ffbd2e", "#27c93f"].map((color) => (
              <div
                key={color}
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: color,
                }}
              />
            ))}
          </div>
          <span
            style={{
              flex: 1,
              textAlign: "center",
              fontSize: 11,
              color: "#4a4a4a",
            }}
          >
            malika-laouiti-portfolio — SourceLang Compiler v1.0
          </span>
          <span style={{ fontSize: 10, color: "#3a3a3a" }}>⬡</span>
        </div>

        {/* Terminal Body */}
        <div
          ref={ref}
          style={{
            background: "#111",
            border: "1px solid #2a2a2a",
            padding: "16px 18px",
            height: 220,
            overflowY: "auto",
            overflowX: "hidden",
            scrollbarWidth: "none",
          }}
        >
          {BOOT_LINES.map((line, i) =>
            visibleLines.includes(i) ? (
              <div
                key={i}
                style={{
                  fontSize: 12,
                  lineHeight: "22px",
                  color: LINE_COLORS[line.type],
                  animation: "lineIn 0.2s ease",
                }}
              >
                {line.text}
              </div>
            ) : null
          )}
          <div
            style={{
              fontSize: 12,
              lineHeight: "22px",
              color: "#4fc1ff",
            }}
          >
            {cursorBlink ? "█" : " "}
          </div>
        </div>
      </>
    );
  }
);

TerminalSection.displayName = "TerminalSection";