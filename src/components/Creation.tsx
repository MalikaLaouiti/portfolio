"use client";
import { useEffect, useState } from "react";

export default function Creation() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setVisible(true), 800);
    const t2 = setTimeout(() => setVisible(false), 4800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="notification-enter"
      style={{
        position: "fixed",
        bottom: 36,
        right: 16,
        background: "#252526",
        border: "1px solid #454545",
        borderLeft: "3px solid #007acc",
        padding: "10px 14px",
        fontSize: 12,
        maxWidth: 300,
        borderRadius: 3,
        boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
        zIndex: 200,
        fontFamily: "'JetBrains Mono', monospace",
      }}
    >
      <div style={{ fontWeight: 600, color: "#d4d4d4", marginBottom: 2 }}>💡 Portfolio inspiration</div>
      <div style={{ color: "#9d9d9d" }}> 
        Driven by my vision, with Claude AI as a supporting tool.
      </div>
    </div>
  );
}
