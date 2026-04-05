"use client";
import { useEffect, useState } from "react";
import { FileKey } from "@/src/lib/files";
import { useLanguage } from "@/src/contexts/LanguageContext";

import TitleBar from "@/src/components/TitleBar";
import ActivityBar from "@/src/components/ActivityBar";
import Explorer from "@/src/components/Explorer";
import TabBar from "@/src/components/TabBar";
import CodeEditor from "@/src/components/CodeEditor";
import TerminalPanel from "@/src/components/TerminalPanel";
import StatusBar from "@/src/components/StatusBar";
import Notification from "@/src/components/Notification";
import Loading from "./loading"; 
import { useIsMobile } from "../hooks/use-mobile";

export default function Page() {
  const [current, setCurrent] = useState<FileKey>("about");
  const [openTabs, setOpenTabs] = useState<FileKey[]>(["about"]);
  const [explorerOpen, setExplorerOpen] = useState(true);
  
  const isMobile = useIsMobile();
  const { getFile, isSourceLang } = useLanguage();
  const currentFile = getFile(current);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5500); // 5.5 seconds minimum

    return () => clearTimeout(timer);
  }, []);

  const switchTab = (k: FileKey) => {
    setCurrent(k);
    setOpenTabs((prev) => (prev.includes(k) ? prev : [...prev, k]));
  };

  const closeTab = (k: FileKey) => {
    const next = openTabs.filter((t) => t !== k);
    if (!next.length) {
      const fallback: FileKey = "about";
      setOpenTabs([fallback]);
      setCurrent(fallback);
    } else {
      setOpenTabs(next);
      if (current === k) setCurrent(next[next.length - 1]);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  if (isMobile){
    setExplorerOpen(false);
  }
  
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        background: "#1e1e1e",
        color: "#d4d4d4",
      }}
    >
      <TitleBar />

      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        <ActivityBar
          explorerOpen={explorerOpen}
          onToggleExplorer={() => setExplorerOpen((v) => !v)}
          onSwitch={switchTab}
        />

        {explorerOpen && <Explorer current={current} onSwitch={switchTab} />}

        {/* Editor column */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
          <TabBar openTabs={openTabs} current={current} onSwitch={switchTab} onClose={closeTab} />

          {/* Breadcrumb */}
          <div
            style={{
              height: 24,
              display: "flex",
              alignItems: "center",
              padding: "0 14px",
              fontSize: 12,
              color: "#858585",
              borderBottom: "1px solid #2a2a2a",
              flexShrink: 0,
              gap: 4,
              background: "#1e1e1e",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            <span style={{ color: "#9d9d9d" }}>malika-laouiti-portfolio</span>
            <span style={{ color: "#555" }}>›</span>
            <span style={{ color: "#d4d4d4" }}>
              {currentFile.name}
              {isSourceLang && currentFile.lang === "SourceLang" && (
                <span style={{ marginLeft: 6, fontSize: 10, color: "#007acc" }}>
                  (SourceLang)
                </span>
              )}
            </span>
          </div>

          <CodeEditor fileKey={current} />
          <TerminalPanel />
        </div>
      </div>

      <StatusBar fileKey={current} />
      <Notification />
    </div>
  );
}