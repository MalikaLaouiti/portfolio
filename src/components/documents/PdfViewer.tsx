import { DocumentItem } from "@/src/types/documents";
import { RequestModal } from "./RequestModal";

interface Props {
  document: DocumentItem;
  pdfState: "loading" | "ok" | "missing";
  showRequest: boolean;
  onRequestClose: () => void;
  onPdfLoad: () => void;
  onPdfError: () => void;
}

export const PdfViewer = ({ 
  document, 
  pdfState, 
  showRequest, 
  onRequestClose, 
  onPdfLoad, 
  onPdfError 
}: Props) => {
  if (document.status === "on-request" && !showRequest) {
    return (
      <div style={{
        position: "absolute",
        inset: 0,
        zIndex: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#0d0d15",
        gap: 16,
      }}>
        <div style={{ fontSize: 48 }}>🔒</div>
        <div style={{ fontSize: 15, color: "#d4d4d4", fontWeight: 600 }}>
          {document.title}
        </div>
        <div style={{ fontSize: 12, color: "#858585", textAlign: "center", maxWidth: 320 }}>
          Ce document est disponible sur demande.
          <br />Cliquez sur <strong style={{ color: "#d4d4d4" }}>Demander</strong> pour contacter Malika.
        </div>
      </div>
    );
  }

  if (document.status === "on-request" && showRequest) {
    return <RequestModal document={document} onClose={onRequestClose} />;
  }

  if (pdfState === "loading") {
    return (
      <div style={{
        position: "absolute",
        inset: 0,
        zIndex: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#0d0d15",
        gap: 14,
        pointerEvents: "none",
      }}>
        <div style={{ fontSize: 36 }}>📄</div>
        <div style={{ fontSize: 12, color: "#495162" }}>
          Chargement du PDF...
        </div>
        <div style={{ width: 160, height: 2, background: "#1e1e2e", borderRadius: 2, overflow: "hidden" }}>
          <div style={{
            height: "100%",
            background: "linear-gradient(90deg,#007acc,#4fc1ff)",
            borderRadius: 2,
            animation: "pdfbar 1.2s ease-in-out infinite",
          }} />
        </div>
      </div>
    );
  }

  if (pdfState === "missing") {
    return (
      <div style={{
        position: "absolute",
        inset: 0,
        zIndex: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#0d0d15",
        gap: 16,
      }}>
        <div style={{ fontSize: 48 }}>📂</div>
        <div style={{ fontSize: 14, color: "#d4d4d4", fontWeight: 600 }}>
          {document.title}
        </div>
        <div style={{
          fontSize: 11,
          color: "#858585",
          textAlign: "center",
          maxWidth: 320,
          lineHeight: 1.6,
        }}>
          Le fichier PDF n&apos;a pas encore été déposé.<br />
          Placer le fichier dans :<br />
          <code style={{ color: "#4fc1ff", fontSize: 11 }}>
            /public{document.file}
          </code>
        </div>
      </div>
    );
  }

  return (
    <iframe
      key={document.id}
      src={`${document.file}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`}
      style={{
        width: "100%",
        height: "100%",
        border: "none",
        opacity: 1,
        transition: "opacity 0.3s",
      }}
      onLoad={onPdfLoad}
      onError={onPdfError}
    />
  );
};