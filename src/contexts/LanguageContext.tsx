// contexts/LanguageContext.tsx
"use client";

import React, { createContext, useContext, useState } from "react";
import { LanguageMode, FILES_TS, FILES_SOURCELANG, FileKey, FileData } from "@/src/lib/files";

interface LanguageContextType {
  mode: LanguageMode;
  setMode: (mode: LanguageMode) => void;
  getFile: (key: FileKey) => FileData;
  isSourceLang: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<LanguageMode>("ts");

  const getFile = (key: FileKey): FileData => {
    return mode === "ts" ? FILES_TS[key] : FILES_SOURCELANG[key];
  };

  return (
    <LanguageContext.Provider
      value={{
        mode,
        setMode,
        getFile,
        isSourceLang: mode === "sourcelang",
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}