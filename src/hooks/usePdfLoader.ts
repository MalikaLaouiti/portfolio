import { useState, useEffect } from "react";

export const usePdfLoader = (file: string, isAvailable: boolean) => {
  const [pdfState, setPdfState] = useState<"loading" | "ok" | "missing">("loading");

  useEffect(() => {
    if (!isAvailable) return;
    
    setPdfState("loading");
    
    // Vérifier si le PDF existe
    const checkPdf = async () => {
      try {
        const response = await fetch(file, { method: 'HEAD' });
        setPdfState(response.ok ? "ok" : "missing");
      } catch {
        setPdfState("missing");
      }
    };
    
    checkPdf();
  }, [file, isAvailable]);

  return { pdfState, setPdfState };
};