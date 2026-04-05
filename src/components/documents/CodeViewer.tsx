"use client";
import { useState, useRef, useCallback } from "react";

interface Props {
  codeLines: string[];
  language?: "typescript" | "sourceLang";
}

const ROW_HEIGHT = 22;
const VISIBLE_ROWS = 50;

export const CodeViewer = ({ codeLines, language = "typescript" }: Props) => {
  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  }, []);

  const startIndex = Math.floor(scrollTop / ROW_HEIGHT);
  const endIndex = Math.min(startIndex + VISIBLE_ROWS, codeLines.length);
  const visibleLines = codeLines.slice(startIndex, endIndex);
  const offsetY = startIndex * ROW_HEIGHT;

  return (
    <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
      {/* Line numbers */}
      <div style={{
        width: 48,
        padding: "16px 0",
        textAlign: "right",
        color: "#495162",
        fontSize: 13,
        lineHeight: `${ROW_HEIGHT}px`,
        userSelect: "none",
        flexShrink: 0,
        borderRight: "1px solid #2a2a2a",
        background: "#0d0d15",
        fontFamily: "'JetBrains Mono', monospace",
      }}>
        {codeLines.map((_, i) => (
          <div 
            key={i} 
            style={{ 
              paddingRight: 12, 
              color: i === codeLines.length - 1 ? "#c6c6c6" : "#495162",
              height: ROW_HEIGHT,
              lineHeight: `${ROW_HEIGHT}px`,
            }}
          >
            {i + 1}
          </div>
        ))}
      </div>

      {/* Code content with virtual scrolling */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        style={{
          flex: 1,
          overflowY: "auto",
          overflowX: "auto",
          fontSize: 13,
          fontFamily: "'JetBrains Mono', monospace",
          background: "#0d0d15",
          position: "relative",
        }}
      >
        <div style={{ height: codeLines.length * ROW_HEIGHT, position: "relative" }}>
          <div style={{ position: "absolute", top: offsetY, left: 0, right: 0 }}>
            {visibleLines.map((line, idx) => (
              <div
                key={startIndex + idx}
                style={{
                  padding: `0 0 0 16px`,
                  height: ROW_HEIGHT,
                  lineHeight: `${ROW_HEIGHT}px`,
                  whiteSpace: "pre",
                  color: "#d4d4d4",
                }}
              >
                {line || " "}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};