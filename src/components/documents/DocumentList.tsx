import { DocumentItem as DocumentItemType } from "@/src/types/documents";
import { DocumentItem } from "./DocumentItem";

interface Props {
  documents: DocumentItemType[];
  selectedId: string;
  onSelect: (doc: DocumentItemType) => void;
}

export const DocumentList = ({ documents, selectedId, onSelect }: Props) => {
  const availableCount = documents.filter(d => d.status === "available").length;

  return (
    <div style={{
      width: 272,
      background: "#1a1a2a",
      borderRight: "1px solid #2a2a3a",
      display: "flex",
      flexDirection: "column",
      flexShrink: 0,
      overflow: "hidden",
    }}>
      <div style={{
        padding: "10px 14px 8px",
        fontSize: 10,
        fontWeight: 700,
        color: "#858585",
        letterSpacing: 1,
        textTransform: "uppercase",
        borderBottom: "1px solid #2a2a2a",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <span>DOCUMENTS — {documents.length}</span>
        <span style={{ color: "#27c93f", fontSize: 9 }}>
          {availableCount} disponibles
        </span>
      </div>

      <div style={{ flex: 1, overflowY: "auto", padding: "4px 0" }}>
        {documents.map((doc) => (
          <DocumentItem
            key={doc.id}
            document={doc}
            isActive={doc.id === selectedId}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
};