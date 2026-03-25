"use client";
import { useEffect, useState, useRef } from "react";
import { TerminalSection } from "@/src/components/TerminalSection";
import { ProgressSection } from "@/src/components/ProgressSection";
import { DeveloperSection } from "@/src/components/DeveloperSection";
import { VisualEffects } from "@/src/components/VisualEffects";
import { BOOT_LINES } from "@/src/lib/bootLines";
import "./animation.css";

export default function Loading() {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [progress, setProgress] = useState(0);
  const [cursorBlink, setCursorBlink] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const termRef = useRef<HTMLDivElement>(null);

  // Boot lines appear one by one
  useEffect(() => {
    const timers = BOOT_LINES.map((line, i) =>
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, i]);
        if (termRef.current) {
          termRef.current.scrollTop = termRef.current.scrollHeight;
        }
      }, line.delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  // Progress bar animation
  useEffect(() => {
    const total = 2500;
    const start = performance.now();
    let raf: number;
    
    const tick = (now: number) => {
      const pct = Math.min(100, ((now - start) / total) * 100);
      setProgress(pct);
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setFadeOut(true), 300);
      }
    };
    
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Cursor blink
  useEffect(() => {
    const id = setInterval(() => setCursorBlink((v) => !v), 530);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#0d0d0d",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'JetBrains Mono', monospace",
        overflow: "hidden",
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 0.5s ease",
        pointerEvents: fadeOut ? "none" : "all",
      }}
    >
      <VisualEffects />
      
      <div
        style={{
          position: "relative",
          zIndex: 3,
          width: "100%",
          maxWidth: 640,
          padding: "0 24px",
        }}
      >
        <TerminalSection
          ref={termRef}
          visibleLines={visibleLines}
          cursorBlink={cursorBlink}
        />
        
        <ProgressSection progress={progress} />
        
        <DeveloperSection />
      </div>
    </div>
  );
}