"use client";
import { FileKey, FILES } from "@/src/lib/files";

interface Props {
  openTabs: FileKey[];
  current: FileKey;
  onSwitch: (k: FileKey) => void;
  onClose: (k: FileKey) => void;
}

function TabIcon({ type }: { type: "ts" | "json" | "mdx" | "pdf" }) {
  const colors: Record<string, string> = { ts: "#3178c6", json: "#e8a038", mdx: "#f9a825", pdf: "#e53935" };
  const labels: Record<string, string> = { ts: "TS", json: "{}", mdx: "JSX", pdf: "PDF" };
  return (
    <svg width={13} height={13} viewBox="0 0 24 24" fill={colors[type]}>
      <rect x="2" y="2" width="20" height="20" rx="3" />
      <text x="3" y="16" fill="white" fontSize="8" fontWeight="bold" fontFamily="monospace">
        {labels[type]}
      </text>
    </svg>
  );
}

export default function TabBar({ openTabs, current, onSwitch, onClose }: Props) {
  return (
    <div
      style={{
        height: 36,
        display: "flex",
        background: "#2d2d2d",
        borderBottom: "1px solid #3c3c3c",
        overflowX: "auto",
        flexShrink: 0,
        scrollbarWidth: "none",
      }}
    >
      {openTabs.map((k) => {
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
              padding: "0 12px",
              fontSize: 13,
              cursor: "pointer",
              borderRight: "1px solid #3c3c3c",
              borderTop: active ? "1px solid #007acc" : "1px solid transparent",
              borderBottom: active ? "1px solid #1e1e1e" : "none",
              marginBottom: active ? -1 : 0,
              background: active ? "#1e1e1e" : "#2d2d2d",
              color: active ? "#d4d4d4" : "#9d9d9d",
              whiteSpace: "nowrap",
              minWidth: 120,
              flexShrink: 0,
              userSelect: "none",
              fontFamily: "'JetBrains Mono', monospace",
            }}
            onMouseEnter={(e) => {
              if (!active) (e.currentTarget as HTMLElement).style.background = "#2a2d2e";
            }}
            onMouseLeave={(e) => {
              if (!active) (e.currentTarget as HTMLElement).style.background = "#2d2d2d";
            }}
          >
            <TabIcon type={f.icon} />
            {f.name}
            <span
              onClick={(e) => { e.stopPropagation(); onClose(k); }}
              style={{
                marginLeft: "auto",
                width: 16,
                height: 16,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 3,
                fontSize: 14,
                lineHeight: 1,
                color: "transparent",
                cursor: "pointer",
                transition: "background 0.1s, color 0.1s",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = "#fff";
                (e.target as HTMLElement).style.background = "#555";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = "transparent";
                (e.target as HTMLElement).style.background = "transparent";
              }}
              className="tab-close-x"
            >
              ×
            </span>
          </div>
        );
      })}
    </div>
  );
}
