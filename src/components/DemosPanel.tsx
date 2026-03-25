"use client";
import { useState, useRef } from "react";
import { DemoProject } from "@/src/lib/demo-projects";

interface Props {
  demos: DemoProject[];
  codeLines: string[];
}

function BadgePill({ badge }: { badge: "LIVE" | "GitHub" | "WIP" }) {
  const colors = {
    LIVE:   { bg: "#0d3d0d", border: "#27c93f", text: "#27c93f" },
    GitHub: { bg: "#0d1f3d", border: "#4fc1ff", text: "#4fc1ff" },
    WIP:    { bg: "#3d2700", border: "#d7ba7d", text: "#d7ba7d" },
  };
  const c = colors[badge];
  return (
    <span style={{
      background: c.bg, border: `1px solid ${c.border}`,
      color: c.text, fontSize: 10, fontWeight: 700,
      padding: "1px 7px", borderRadius: 10, letterSpacing: 0.5,
      // width: badge === "LIVE" ? 65 : 55, textAlign: "center",
      fontFamily: "'JetBrains Mono', monospace",
    }}>
      {badge === "LIVE" ? "● LIVE" : badge}
    </span>
  );
}

function StackTag({ label }: { label: string }) {
  return (
    <span style={{
      background: "#2a2a3a", border: "1px solid #3c3c5a",
      color: "#9cdcfe", fontSize: 10,
      padding: "1px 6px", borderRadius: 4,
      fontFamily: "'JetBrains Mono', monospace",
    }}>
      {label}
    </span>
  );
}

export default function DemosPanel({ demos, codeLines }: Props) {
  const [selected, setSelected] = useState<DemoProject>(demos[0]);
  const [viewMode, setViewMode] = useState<"iframe" | "code">("iframe");
  const [iframeLoading, setIframeLoading] = useState(true);
  const [iframeError, setIframeError] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const isLive = selected.badge === "LIVE";

  const handleSelect = (d: DemoProject) => {
    setSelected(d);
    setIframeLoading(true);
    setIframeError(false);
  };

  return (
    <div style={{ flex: 1, display: "flex", overflow: "hidden", fontFamily: "'JetBrains Mono', monospace" }}>

      <div style={{
        width: 280, background: "#1e1e2e", borderRight: "1px solid #2a2a3a",
        display: "flex", flexDirection: "column", flexShrink: 0, overflow: "hidden",
      }}>
        <div style={{
          padding: "10px 14px 6px", fontSize: 10, fontWeight: 700,
          color: "#858585", letterSpacing: 1, textTransform: "uppercase",
          borderBottom: "1px solid #2a2a2a",
        }}>
          DÉMOS — {demos.length} projets
        </div>

        <div style={{ flex: 1, overflowY: "auto", padding: "6px 0" }}>
          {demos.map((d) => {
            const active = d.id === selected.id;
            return (
              <div
                key={d.id}
                onClick={() => handleSelect(d)}
                style={{
                  padding: "10px 14px",
                  cursor: "pointer",
                  background: active ? "#2a2a3a" : "transparent",
                  borderLeft: `3px solid ${active ? "#007acc" : "transparent"}`,
                  transition: "background 0.1s",
                }}
                onMouseEnter={(e) => { if (!active) (e.currentTarget as HTMLElement).style.background = "#252535"; }}
                onMouseLeave={(e) => { if (!active) (e.currentTarget as HTMLElement).style.background = "transparent"; }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
                  <span style={{ fontSize: 12, color: active ? "#d4d4d4" : "#9d9d9d", fontWeight: 500,width: "70%" }}>
                    {d.title}
                  </span>
                  <BadgePill badge={d.badge} />
                </div>
                <div style={{ fontSize: 11, color: "#6a6a8a", lineHeight: 1.4, marginBottom: 6 }}>
                  {d.desc}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
                  {d.stack.map((s) => <StackTag key={s} label={s} />)}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>

        <div style={{
          height: 36, display: "flex", alignItems: "center",
          padding: "0 14px", gap: 8, background: "#252526",
          borderBottom: "1px solid #2a2a2a", flexShrink: 0,
        }}>
          <div style={{ display: "flex", background: "#1e1e1e", borderRadius: 4, border: "1px solid #3c3c3c", overflow: "hidden" }}>
            {(["iframe", "code"] as const).map((m) => (
              <button key={m} onClick={() => setViewMode(m)} style={{
                padding: "3px 10px", fontSize: 11, cursor: "pointer",
                background: viewMode === m ? "#007acc" : "transparent",
                color: viewMode === m ? "#fff" : "#9d9d9d",
                border: "none", fontFamily: "'JetBrains Mono', monospace",
                transition: "background 0.15s",
              }}>
                {m === "iframe" ? "⬡ Preview" : "{ } Code"}
              </button>
            ))}
          </div>


          <div style={{
            flex: 1, background: "#1e1e1e", border: "1px solid #3c3c3c",
            borderRadius: 4, padding: "3px 10px", fontSize: 11,
            color: "#6a9955", display: "flex", alignItems: "center", gap: 6,
            overflow: "hidden",
          }}>
            <span style={{ color: "#495162", flexShrink: 0 }}>🔗</span>
            <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {selected.url}
            </span>
          </div>


          <a
            href={selected.url}
            target="_blank"
            rel="noreferrer"
            style={{
              padding: "3px 10px", fontSize: 11, cursor: "pointer",
              background: isLive ? "#0d3d0d" : "#0d1f3d",
              color: isLive ? "#27c93f" : "#4fc1ff",
              border: `1px solid ${isLive ? "#27c93f" : "#4fc1ff"}`,
              borderRadius: 4, textDecoration: "none", fontFamily: "'JetBrains Mono', monospace",
              flexShrink: 0,
            }}
          >
            {isLive ? "↗ Ouvrir" : "⎔ GitHub"}
          </a>
          <a
            href={selected.repo}
            target="_blank"
            rel="noreferrer"
            style={{
              padding: "3px 10px", fontSize: 11, cursor: "pointer",
              background: "transparent", color: "#9d9d9d",
              border: "1px solid #3c3c3c",
              borderRadius: 4, textDecoration: "none", fontFamily: "'JetBrains Mono', monospace",
              flexShrink: 0,
            }}
          >
            ⎔ Repo
          </a>
        </div>

        {viewMode === "iframe" ? (
          <div style={{ flex: 1, position: "relative", background: "#0d0d0d" }}>

            {iframeLoading && !iframeError && (
              <div style={{
                position: "absolute", inset: 0, zIndex: 10,
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center",
                background: "#0d0d0d", gap: 16,
              }}>
                <div style={{ fontSize: 32 }}>{selected.title.split(" ")[0]}</div>
                <div style={{ fontSize: 12, color: "#495162" }}>Chargement de la démo...</div>
                <div style={{
                  width: 200, height: 2, background: "#2a2a2a", borderRadius: 2, overflow: "hidden",
                }}>
                  <div style={{
                    height: "100%", background: "#007acc", borderRadius: 2,
                    animation: "loadbar 1.5s ease-in-out infinite",
                  }} />
                </div>
              </div>
            )}

            {iframeError && (
              <div style={{
                position: "absolute", inset: 0, zIndex: 10,
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center",
                background: "#0d0d0d", gap: 20,
              }}>
                <div style={{ fontSize: 48 }}>{selected.title.split(" ")[0]}</div>
                <div style={{ fontSize: 14, color: "#d4d4d4", textAlign: "center", maxWidth: 340 }}>
                  {selected.title.replace(/^[^\s]+\s/, "")}
                </div>
                <div style={{ fontSize: 11, color: "#6a6a8a", textAlign: "center", maxWidth: 340, lineHeight: 1.6 }}>
                  {selected.desc}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 4, justifyContent: "center" }}>
                  {selected.stack.map((s) => <StackTag key={s} label={s} />)}
                </div>
                <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                  <a href={selected.url} target="_blank" rel="noreferrer" style={{
                    padding: "7px 18px", fontSize: 12, borderRadius: 4,
                    background: "#007acc", color: "#fff", textDecoration: "none",
                    fontFamily: "'JetBrains Mono', monospace",
                  }}>
                    ↗ Ouvrir le projet
                  </a>
                  <a href={selected.repo} target="_blank" rel="noreferrer" style={{
                    padding: "7px 18px", fontSize: 12, borderRadius: 4,
                    background: "transparent", color: "#9d9d9d",
                    border: "1px solid #3c3c3c", textDecoration: "none",
                    fontFamily: "'JetBrains Mono', monospace",
                  }}>
                    ⎔ GitHub
                  </a>
                </div>
                <div style={{ fontSize: 10, color: "#3c3c3c", marginTop: 4 }}>
                  (iframe bloqué par la politique de sécurité du site)
                </div>
              </div>
            )}

            {isLive && (
              <iframe
                ref={iframeRef}
                key={selected.id}
                src={selected.url}
                style={{
                  width: "100%", height: "100%",
                  border: "none",
                  opacity: iframeLoading || iframeError ? 0 : 1,
                  transition: "opacity 0.3s",
                }}
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                onLoad={() => setIframeLoading(false)}
                onError={() => { setIframeLoading(false); setIframeError(true); }}
              />
            )}

            {!isLive && !iframeError && setTimeout(() => { setIframeLoading(false); setIframeError(true); }, 0) as unknown as null}

          </div>
        ) : (
          <div style={{
            flex: 1, display: "flex", overflow: "hidden",
          }}>
            <div style={{
              width: 48, padding: "16px 0", textAlign: "right",
              color: "#495162", fontSize: 13, lineHeight: "22px",
              userSelect: "none", flexShrink: 0,
              borderRight: "1px solid #2a2a2a",
              fontFamily: "'JetBrains Mono', monospace",
            }}>
              {codeLines.map((_, i) => (
                <div key={i} style={{ paddingRight: 12 }}>{i + 1}</div>
              ))}
            </div>
            <div style={{
              flex: 1, padding: "16px 0 16px 16px",
              overflowY: "auto", overflowX: "auto",
              fontSize: 13, lineHeight: "22px",
              fontFamily: "'JetBrains Mono', monospace",
              whiteSpace: "pre",
            }}>
              {codeLines.map((line, i) => (
                <div key={i} dangerouslySetInnerHTML={{ __html: line || " " }} />
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes loadbar {
          0%   { width: 0%; margin-left: 0; }
          50%  { width: 60%; margin-left: 20%; }
          100% { width: 0%; margin-left: 100%; }
        }
      `}</style>
    </div>
  );
}
