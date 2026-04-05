"use client";
import { useState } from "react";
import { DocumentList } from "../components/documents/DocumentList";
import { Toolbar } from "../components/documents/Toolbar";
import { PdfViewer } from "../components/documents/PdfViewer";
import { useDocuments } from "@/src/hooks/useDocuments";
import { usePdfLoader } from "@/src/hooks/usePdfLoader";
import CodeEditor from "./CodeEditor";

interface Props {
  codeLines: string[];
}

export default function DocumentsPanel({ codeLines }: Props) {
  const { documents, selected, showRequest, handleSelect, closeRequest, openRequest } = useDocuments();
  const { pdfState, setPdfState } = usePdfLoader(selected.file, selected.status === "available");

  const handlePdfLoad = () => setPdfState("ok");
  const handlePdfError = () => setPdfState("missing");


  return (
    <div style={{
      flex: 1,
      display: "flex",
      overflow: "hidden",
      fontFamily: "'JetBrains Mono', monospace",
    }}>
      <DocumentList
        documents={documents}
        selectedId={selected.id}
        onSelect={handleSelect}
      />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <Toolbar
          selectedDocument={selected}
          showRequest={showRequest}
          onRequestToggle={openRequest}
        />

        <div style={{ flex: 1, position: "relative", background: "#0d0d15", overflow: "hidden" }}>
            <PdfViewer
              document={selected}
              pdfState={pdfState}
              showRequest={showRequest}
              onRequestClose={closeRequest}
              onPdfLoad={handlePdfLoad}
              onPdfError={handlePdfError}
            />
        </div>
      </div>

      <style>{`
        @keyframes pdfbar {
          0%   { width: 0%;   margin-left: 0; }
          50%  { width: 70%;  margin-left: 15%; }
          100% { width: 0%;   margin-left: 100%; }
        }
      `}</style>
    </div>
  );
}