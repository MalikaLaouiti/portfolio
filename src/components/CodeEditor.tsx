"use client";
import { useEffect, useRef } from "react";
import { FileKey } from "@/src/lib/files";
import { DEMO_PROJECTS } from "@/src/lib/demo-projects";
import { useTyping } from "@/src/lib/useTyping";
import { useLanguage } from "@/src/contexts/LanguageContext";
import DemosPanel from "./DemosPanel";

interface Props {
  fileKey: FileKey;
}

export default function CodeEditor({ fileKey }: Props) {
  const { getFile, isSourceLang } = useLanguage();
  const file = getFile(fileKey);
  const { visibleCount, done } = useTyping(file.lines, `${fileKey}-${isSourceLang ? "sl" : "ts"}`);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  }, [visibleCount]);

  // ── Demos tab gets the split iframe panel ──
  if (fileKey === "demos") {
    return (
      <DemosPanel
        demos={DEMO_PROJECTS}
        codeLines={file.lines}
      />
    );
  }

  const lineCount = Math.max(visibleCount, 1);

  return (
    <div
      className="fade-in"
      style={{ flex: 1, display: "flex", overflow: "hidden", background: "#1e1e1e" }}
    >
      {/* Line numbers */}
      <div
        style={{
          width: 56, padding: "16px 0", textAlign: "right",
          color: "#495162", fontSize: 13, lineHeight: "22px",
          userSelect: "none", flexShrink: 0,
          borderRight: "1px solid #2a2a2a", background: "#1e1e1e",
          fontFamily: "'JetBrains Mono', monospace", overflow: "hidden",
        }}
      >
        {Array.from({ length: lineCount }, (_, i) => (
          <div
            key={i}
            style={{ paddingRight: 14, color: i === lineCount - 1 ? "#c6c6c6" : "#495162" }}
          >
            {i + 1}
          </div>
        ))}
      </div>

      {/* Code content */}
      <div
        ref={contentRef}
        style={{
          flex: 1, padding: "16px 0 16px 16px",
          overflowY: "auto", overflowX: "auto",
          fontSize: 13, lineHeight: "22px",
          fontFamily: "'JetBrains Mono', monospace",
          whiteSpace: "pre",
        }}
      >
        {/* Language indicator */}
        {isSourceLang && (
          <div
            style={{
              position: "sticky",
              top: 0,
              right: 0,
              float: "right",
              background: "#2d2d2d",
              padding: "2px 8px",
              borderRadius: "4px",
              fontSize: 10,
              color: "#007acc",
              fontFamily: "monospace",
              marginBottom: 8,
              zIndex: 10,
            }}
          >
            ⚙️ SourceLang
          </div>
        )}
        {file.lines.slice(0, visibleCount).map((line, i) => (
          <div key={i} dangerouslySetInnerHTML={{ __html: line || " " }} />
        ))}
        {!done && <span className="cursor" />}
      </div>
    </div>
  );
}