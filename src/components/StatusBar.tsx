"use client";
import { FileKey } from "@/src/lib/files";
import { useLanguage } from "@/src/contexts/LanguageContext";

interface Props {
  fileKey: FileKey;
}

export default function StatusBar({ fileKey }: Props) {
  const { getFile, isSourceLang } = useLanguage();
  const f = getFile(fileKey);
  
  return (
    <div
      style={{
        height: 24,
        background: "#007acc",
        display: "flex",
        alignItems: "center",
        padding: "0 8px",
        fontSize: 11.5,
        color: "#fff",
        gap: 12,
        flexShrink: 0,
        userSelect: "none",
        fontFamily: "'JetBrains Mono', monospace",
      }}
    >
      {/* Left */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 4, cursor: "pointer", padding: "0 4px" }}>
          {/* git branch icon */}
          <svg viewBox="0 0 24 24" fill="currentColor" width={13} height={13}>
            <path d="M6 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm12 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM6 18a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm0-8v6M18 6v2a6 6 0 0 1-6 6H8" />
          </svg>
          main
        </div>
        <div style={{ cursor: "pointer", padding: "0 4px" }}>0 ⚠ 0 ✗</div>
      </div>

      {/* Right */}
      <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 12 }}>
        <span style={{ cursor: "pointer", padding: "0 4px" }}>{f.name}</span>
        <span style={{ cursor: "pointer", padding: "0 4px" }}>Ln 1, Col 1</span>
        <span style={{ cursor: "pointer", padding: "0 4px" }}>UTF-8</span>
        <span style={{ cursor: "pointer", padding: "0 4px" }}>
          {isSourceLang ? "SourceLang" : f.lang}
        </span>
        <span style={{ cursor: "pointer", padding: "0 4px" }}>💼 Stage disponible — Monastir 🇹🇳</span>
      </div>
    </div>
  );
}