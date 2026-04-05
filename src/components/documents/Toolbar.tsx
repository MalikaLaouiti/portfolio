import { DocumentItem, CAT_COLOR } from "@/src/types/documents";


interface Props {
  selectedDocument: DocumentItem;
  showRequest: boolean;
  onRequestToggle: () => void;
}

export const Toolbar = ({ 
  selectedDocument,
  showRequest,
  onRequestToggle
}: Props) => {
  const cat = CAT_COLOR[selectedDocument.category];
  const isAvailable = selectedDocument.status === "available";
  const codeLines = selectedDocument.file.split('\n');

  return (
    <div style={{
      height: 38,
      display: "flex",
      alignItems: "center",
      padding: "0 14px",
      gap: 8,
      background: "#1e1e2e",
      borderBottom: "1px solid #2a2a3a",
      flexShrink: 0,
    }}>
      {/* View toggle */}
      <div style={{
        display: "flex",
        background: "#141420",
        borderRadius: 4,
        border: "1px solid #2a2a3a",
        overflow: "hidden",
      }}>
        {
          <button
            style={{
              padding: "3px 10px",
              fontSize: 11,
              cursor: "pointer",
              background: "#007acc" ,
              color:  "#fff" ,
              border: "none",
              fontFamily: "'JetBrains Mono', monospace",
              transition: "background 0.15s",
            }}
          >
            {"📄 Visionner" }
          </button>
        }
      </div>

      {/* Path bar */}
      <div style={{
        flex: 1,
        background: "#141420",
        border: "1px solid #2a2a3a",
        borderRadius: 4,
        padding: "3px 10px",
        fontSize: 11,
        color: "#4a4a6a",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        gap: 6,
      }}>
        <span style={{ color: "#e53935", flexShrink: 0 }}>📁</span>
        <span style={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          color: cat.text,
        }}>
          {selectedDocument.file}
        </span>
      </div>

      {/* Actions */}
      {isAvailable ? (
        <>
          <a
            href={selectedDocument.file}
            target="_blank"
            rel="noreferrer"
            style={{
              padding: "3px 10px",
              fontSize: 11,
              background: "#0d1f3d",
              color: "#4fc1ff",
              border: "1px solid #4fc1ff",
              borderRadius: 4,
              textDecoration: "none",
              fontFamily: "'JetBrains Mono', monospace",
              flexShrink: 0,
            }}
          >
            ↗ Ouvrir
          </a>
          <a
            href={selectedDocument.file}
            download
            style={{
              padding: "3px 10px",
              fontSize: 11,
              background: "#0d3d0d",
              color: "#27c93f",
              border: "1px solid #27c93f",
              borderRadius: 4,
              textDecoration: "none",
              fontFamily: "'JetBrains Mono', monospace",
              flexShrink: 0,
            }}
          >
            ↓ Télécharger
          </a>
        </>
      ) : (
        <button
          onClick={onRequestToggle}
          style={{
            padding: "3px 12px",
            fontSize: 11,
            background: showRequest ? "#2a2a3a" : "#1a1a2a",
            color: "#858585",
            border: "1px solid #3a3a4a",
            borderRadius: 4,
            cursor: "pointer",
            fontFamily: "'JetBrains Mono', monospace",
            flexShrink: 0,
          }}
        >
          📩 Demander
        </button>
      )}
    </div>
  );
};