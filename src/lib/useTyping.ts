"use client";
import { useState, useEffect, useRef, useCallback } from "react";

export function useTyping(lines: string[], fileKey: string) {
  const [visibleCount, setVisibleCount] = useState(0);
  const [done, setDone] = useState(false);
  const cache = useRef<Set<string>>(new Set());
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clear = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  useEffect(() => {
    clear();

    if (cache.current.has(fileKey)) {
      setVisibleCount(lines.length);
      setDone(true);
      return;
    }

    setVisibleCount(0);
    setDone(false);
    let i = 0;

    const tick = () => {
      if (i >= lines.length) {
        cache.current.add(fileKey);
        setDone(true);
        return;
      }
      setVisibleCount(i + 1);
      i++;
      const raw = lines[i - 1] ?? "";
      const isCmt = raw.includes("cmt-t");
      timerRef.current = setTimeout(tick, isCmt ? 20 : 9);
    };

    timerRef.current = setTimeout(tick, 50);
    return clear;
  }, [fileKey, lines, clear]);

  return { visibleCount, done };
}
