import { DocumentItem, EMAIL } from "@/src/types/documents";
import { useClipboard } from "@/src/hooks/useClipboard";


interface Props {
  document: DocumentItem;
  onClose: () => void;
}

export const RequestModal = ({ document, onClose }: Props) => {
  const { copied, copyToClipboard } = useClipboard();

  const mailtoLink = `mailto:${EMAIL}?subject=Demande de document : ${encodeURIComponent(document.title)}&body=Bonjour Malika,%0A%0AJe souhaiterais obtenir le document suivant :%0A${encodeURIComponent(document.title)}%0A%0ACordialement,`;

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
      gap: 14,
    }}>
      <div style={{ fontSize: 32 }}>📩</div>
      <div style={{ fontSize: 14, color: "#d4d4d4", fontWeight: 600 }}>
        Demander : {document.title}
      </div>

      <div style={{
        background: "#1a1a2a",
        border: "1px solid #2a2a3a",
        borderRadius: 6,
        padding: 20,
        width: 340,
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}>
        <div style={{ fontSize: 11, color: "#858585" }}>
          Envoyer un email à :
        </div>

        <div style={{
          display: "flex",
          gap: 8,
          alignItems: "center",
          background: "#0d0d15",
          border: "1px solid #2a2a3a",
          borderRadius: 4,
          padding: "8px 12px",
        }}>
          <span style={{ flex: 1, fontSize: 12, color: "#4fc1ff" }}>
            {EMAIL}
          </span>
          <button
            onClick={() => copyToClipboard(EMAIL)}
            style={{
              padding: "2px 8px",
              fontSize: 10,
              background: copied ? "#0d3d0d" : "#1a2a3a",
              color: copied ? "#27c93f" : "#9d9d9d",
              border: `1px solid ${copied ? "#27c93f" : "#2a2a3a"}`,
              borderRadius: 3,
              cursor: "pointer",
              fontFamily: "'JetBrains Mono', monospace",
              transition: "all 0.2s",
            }}
          >
            {copied ? "✓ Copié" : "Copier"}
          </button>
        </div>

        <div style={{ fontSize: 11, color: "#4a4a6a", lineHeight: 1.5 }}>
          Mentionner le document souhaité :<br />
          <span style={{ color: "#858585" }}>"{document.title}"</span>
        </div>

        <div style={{ display: "flex", gap: 8 }}>
          <a
            href={mailtoLink}
            style={{
              flex: 1,
              padding: "7px 0",
              fontSize: 11,
              background: "#007acc",
              color: "#fff",
              border: "none",
              borderRadius: 4,
              textDecoration: "none",
              textAlign: "center",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            ✉ Ouvrir dans la messagerie
          </a>
          <button
            onClick={onClose}
            style={{
              padding: "7px 14px",
              fontSize: 11,
              background: "transparent",
              color: "#858585",
              border: "1px solid #2a2a3a",
              borderRadius: 4,
              cursor: "pointer",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
};