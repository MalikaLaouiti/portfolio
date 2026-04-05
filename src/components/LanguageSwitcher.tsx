"use client";

import { useLanguage } from "@/src/contexts/LanguageContext";

export default function LanguageSwitch() {
  const { isSourceLang, setMode } = useLanguage();

  const toggleLanguage = () => {
    setMode(isSourceLang ? "ts" : "sourcelang");
  };

  return (
    <button
      onClick={toggleLanguage}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "6px",
        padding: "2px 8px",
        background: isSourceLang ? "#d79fe0" : "#0d1f3d",
        border: `1px solid ${isSourceLang ? "#9717ad" : "#4fc1ff"}`,
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "11px",
        fontFamily: "'JetBrains Mono', monospace",
        color: isSourceLang ? "#9717ad" : "#4fc1ff",
        transition: "all 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.opacity = "0.8";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.opacity = "1";
      }}
    >
      <img 
        src={isSourceLang ? "/sourcelang-icon.ico" : "/ts-icon.ico"}
        alt={isSourceLang ? "SourceLang " : "TypeScript "}
        style={{ width: "14px", height: "14px" }}
      />
      <span>{isSourceLang ? "SourceLang 🔄" : "TypeScript 🔄"}</span>
    </button>
  );
}