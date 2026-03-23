"use client";
import { FileKey, FILES, FILE_KEYS } from "@/src/lib/files";

interface Props {
  current: FileKey;
  onSwitch: (k: FileKey) => void;
}

function FileIcon({ type }: { type: "ts" | "json" | "mdx" | "pdf" }) {
  if (type === "ts") {
    return (
      <svg width={14} height={14} viewBox="0 0 24 24" fill="#3178c6">
        <rect x="2" y="2" width="20" height="20" rx="3" />
        <text x="4.5" y="17" fill="white" fontSize="10" fontWeight="bold" fontFamily="monospace">TS</text>
      </svg>
    );
  }
  if (type === "mdx") {
    return (
      <svg width={14} height={14} viewBox="0 0 24 24" fill="#f9a825">
        <rect x="2" y="2" width="20" height="20" rx="3" />
        <text x="2" y="17" fill="white" fontSize="8" fontWeight="bold" fontFamily="monospace">JSX</text>
      </svg>
    );
  }
  if (type === "pdf") {
    return (
      <svg width={14} height={14} viewBox="0 0 24 24" fill="#e53935">
        <rect x="2" y="2" width="20" height="20" rx="3" />
        <text x="2" y="17" fill="white" fontSize="8" fontWeight="bold" fontFamily="monospace">PDF</text>
      </svg>
    );
  }
  return (
    <svg width={14} height={14} viewBox="0 0 24 24" fill="#e8a038">
      <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm7 13l4-4H9l3 4zm0-6 3-4H9l3 4z" />
    </svg>
  );
}

export default function Explorer({ current, onSwitch }: Props) {
  return (
    <div
      style={{
        width: 240,
        background: "#252526",
        borderRight: "1px solid #3c3c3c",
        display: "flex",
        flexDirection: "column",
        flexShrink: 0,
        overflow: "hidden",
        fontFamily: "'JetBrains Mono', monospace",
      }}
    >
      <div
        style={{
          padding: "10px 16px 6px",
          fontSize: 11,
          fontWeight: 700,
          color: "#bbb",
          letterSpacing: 1,
          textTransform: "uppercase",
        }}
      >
        Explorateur
      </div>

      {/* folder label */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 4,
          padding: "4px 8px 4px 12px",
          fontSize: 11,
          fontWeight: 700,
          color: "#ccc",
          textTransform: "uppercase",
          letterSpacing: 0.5,
          cursor: "pointer",
          userSelect: "none",
        }}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width={14} height={14}>
          <path d="M7 10l5 5 5-5z" />
        </svg>
        LAOUITI-PORTFOLIO
      </div>

      {/* files */}
      <div style={{ padding: "2px 0" }}>
        {FILE_KEYS.map((k) => {
          const f = FILES[k];
          const active = k === current;
          return (
            <div
              key={k}
              onClick={() => onSwitch(k)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "3px 8px 3px 28px",
                cursor: "pointer",
                fontSize: 13,
                color: active ? "#d4d4d4" : "#9d9d9d",
                background: active ? "#37373d" : "transparent",
                transition: "background 0.1s, color 0.1s",
                userSelect: "none",
              }}
              onMouseEnter={(e) => {
                if (!active) {
                  (e.currentTarget as HTMLElement).style.background = "#2a2d2e";
                  (e.currentTarget as HTMLElement).style.color = "#d4d4d4";
                }
              }}
              onMouseLeave={(e) => {
                if (!active) {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                  (e.currentTarget as HTMLElement).style.color = "#9d9d9d";
                }
              }}
            >
              <FileIcon type={f.icon} />
              {f.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}
