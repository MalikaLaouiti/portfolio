"use client";
import { FileKey } from "@/src/lib/files";
import { useLanguage } from "@/src/contexts/LanguageContext";

interface Props {
  explorerOpen: boolean;
  onToggleExplorer: () => void;
  onSwitch: (k: FileKey) => void;
}

const BTN_ICONS = [
  {
    label: "Explorateur",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width={22} height={22}>
        <path d="M17.5 0h-9L7 1.5v5H2L0 8v14.07L1.5 24h12.07L15 22.07V17h4.93L21 15.5V4.5L17.5 0zm0 2.121L18.879 3.5H17.5V2.121zM13.5 22.5h-12l-.5-.43V8.5H13l.5.5v13.5zm1.5-7H15V8l-1.5-1.5H8.5v-5h7.5V5h-2v2h2v1.5h2v9H15zm2-8.5v-1h1v1h-1z" />
      </svg>
    ),
    action: "explorer",
  },
  {
    label: "Compétences",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width={22} height={22}>
        <path d="M1 6l11-6 11 6v12l-11 6L1 18V6zm2 1.17v9.66l9 4.9 9-4.9V7.17l-9-4.9-9 4.9z" />
      </svg>
    ),
    action: "skills",
  },
  {
    label: "Projets",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width={22} height={22}>
        <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z" />
      </svg>
    ),
    action: "projects",
  },
  {
    label: "Démos",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width={22} height={22}>
        <path d="M8 5v14l11-7z" />
      </svg>
    ),
    action: "demos",
  },
  {
    label: "Contact",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width={22} height={22}>
        <path d="M22 4H2C.9 4 0 4.9 0 6v12c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-10 6.25L2 8V6l10 6.25L22 6v2z" />
      </svg>
    ),
    action: "contact",
  },
] as const;

export default function ActivityBar({ explorerOpen, onToggleExplorer, onSwitch }: Props) {
  const { mode, setMode, isSourceLang } = useLanguage();

  const handle = (action: string) => {
    if (action === "explorer") {
      onToggleExplorer();
      return;
    }
    onSwitch(action as FileKey);
  };

  const toggleLanguage = () => {
    setMode(isSourceLang ? "ts" : "sourcelang");
  };

  return (
    <div
      style={{
        width: 52,
        background: "#333",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 8,
        gap: 2,
        borderRight: "1px solid #1a1a1a",
        flexShrink: 0,
      }}
    >
      {BTN_ICONS.map((b, i) => (
        <button
          key={b.label}
          title={b.label}
          onClick={() => handle(b.action)}
          style={{
            width: 40,
            height: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            background: "transparent",
            border: "none",
            borderLeft: i === 0 && explorerOpen ? "2px solid #007acc" : "2px solid transparent",
            color: i === 0 && explorerOpen ? "#d4d4d4" : "#858585",
            borderRadius: 4,
            transition: "color 0.15s",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#d4d4d4")}
          onMouseLeave={(e) => {
            const active = i === 0 && explorerOpen;
            (e.currentTarget as HTMLElement).style.color = active ? "#d4d4d4" : "#858585";
          }}
        >
          {b.svg}
        </button>
      ))}
      
      <button
        title={isSourceLang ? "Switch to TypeScript" : "Switch to SourceLang"}
        onClick={toggleLanguage}
        style={{
          width: 40,
          height: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          color: isSourceLang ? "#d4d4d4" : "#858585",
          borderRadius: 4,
          transition: "color 0.15s",
          marginTop: "auto",
          marginBottom: 8,
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#d4d4d4")}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.color = isSourceLang ? "#d4d4d4" : "#858585";
        }}
      >
        {isSourceLang ? (
          <svg viewBox="0 0 24 24" fill="currentColor" width={22} height={22}>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="currentColor" width={22} height={22}>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
          </svg>
        )}
      </button>

      <div style={{ marginBottom: 8 }}>
        <button
          title="Paramètres"
          style={{
            width: 40,
            height: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            color: "#858585",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#d4d4d4")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#858585")}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width={22} height={22}>
            <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
          </svg>
        </button>
      </div>
    </div>
  );
}