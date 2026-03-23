"use client";
import { useState } from "react";

const INIT_LINES = [
  { prompt: "malika@portfolio", path: "~/klimowicz-portfolio", cmd: "cat README.md" },
];

export default function TerminalPanel() {
  const [input, setInput] = useState("");
  const [lines, setLines] = useState<{ type: "cmd" | "out" | "err"; text: string }[]>([
    { type: "out", text: "# Portfolio de LAOUITI Malika — Développeuse Fullstack & Systèmes" },
    { type: "out", text: "✔ Licence GL & SI — ISIMM Monastir (2025)" },
    { type: "out", text: "✔ Disponible immédiatement — Stage développement" },
  ]);

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    const cmd = input.trim();
    if (!cmd) return;

    const newLines = [...lines, { type: "cmd" as const, text: `$ ${cmd}` }];

    if (cmd === "help") {
      newLines.push({ type: "out", text: "Commandes: about, skills, experience, projects, contact, clear" });
    } else if (cmd === "clear") {
      setLines([]);
      setInput("");
      return;
    } else if (cmd === "about") {
      newLines.push({ type: "out", text: "LAOUITI Malika — Développeuse Fullstack & Systèmes" });
      newLines.push({ type: "out", text: "Monastir 5020 🇹🇳" });
    } else if (cmd === "skills") {
      newLines.push({ type: "out", text: "C, Java, SQL, Python, TypeScript, JavaScript, C#" });
      newLines.push({ type: "out", text: "Next.js 15, Express.js, PyQt5, Flex/Bison, Azure AI" });
    } else if (cmd === "contact") {
      newLines.push({ type: "out", text: "📧 Laouiti.malika@yahoo.com" });
      newLines.push({ type: "out", text: "📱 +216 25 731 613" });
      newLines.push({ type: "out", text: "🐙 github.com/MalikaLaouiti" });
    } else {
      newLines.push({ type: "err", text: `commande introuvable: ${cmd}` });
    }

    setLines(newLines);
    setInput("");
  };

  return (
    <div
      style={{
        height: 130,
        background: "#252526",
        borderTop: "1px solid #3c3c3c",
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        fontFamily: "'JetBrains Mono', monospace",
      }}
    >
      {/* Panel tabs */}
      <div style={{ display: "flex", background: "#2d2d2d", borderBottom: "1px solid #3c3c3c", height: 28, flexShrink: 0 }}>
        {["TERMINAL", "PROBLÈMES", "SORTIE"].map((t, i) => (
          <div
            key={t}
            style={{
              padding: "0 12px",
              fontSize: 12,
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              color: i === 0 ? "#d4d4d4" : "#9d9d9d",
              borderBottom: i === 0 ? "1px solid #007acc" : "1px solid transparent",
            }}
          >
            {t}
          </div>
        ))}
      </div>

      {/* Terminal output */}
      <div style={{ flex: 1, padding: "4px 14px", overflowY: "auto", fontSize: 12, lineHeight: "20px" }}>
        {lines.map((l, i) => (
          <div
            key={i}
            style={{
              color:
                l.type === "cmd" ? "#4fc1ff" :
                l.type === "err" ? "#f44747" :
                "#ccc",
            }}
          >
            {l.text}
          </div>
        ))}
        {/* Input line */}
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <span style={{ color: "#4ec9b0" }}>malika@portfolio</span>
          <span style={{ color: "#9d9d9d" }}>:</span>
          <span style={{ color: "#4fc1ff" }}>~/malika-portfolio</span>
          <span style={{ color: "#9d9d9d" }}>$</span>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            style={{
              flex: 1,
              background: "transparent",
              border: "none",
              outline: "none",
              color: "#d4d4d4",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12,
            }}
            placeholder="type 'help'..."
          />
        </div>
      </div>
    </div>
  );
}
