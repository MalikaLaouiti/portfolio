import { CAT_COLOR, DocumentItem as DocumentItemType } from "@/src/types/documents";
import { CategoryBadge } from "./CategoryBadge";
import { StatusDot } from "./StatusDot";

interface Props {
  document: DocumentItemType;
  isActive: boolean;
  onSelect: (doc: DocumentItemType) => void;
}

export const DocumentItem = ({ document, isActive, onSelect }: Props) => {
  const style = {
    padding: "10px 14px",
    cursor: "pointer",
    background: isActive ? "#22223a" : "transparent",
    borderLeft: `3px solid ${isActive ? CAT_COLOR[document.category].border : "transparent"}`,
    transition: "background 0.1s",
  };

  return (
    <div
      style={style}
      onClick={() => onSelect(document)}
      onMouseEnter={(e) => {
        if (!isActive) (e.currentTarget as HTMLElement).style.background = "#1e1e30";
      }}
      onMouseLeave={(e) => {
        if (!isActive) (e.currentTarget as HTMLElement).style.background = "transparent";
      }}
    >
      <div style={{ marginBottom: 5 }}>
        <CategoryBadge category={document.category} />
      </div>

      <div style={{
        fontSize: 12,
        color: isActive ? "#d4d4d4" : "#9d9d9d",
        fontWeight: 500,
        lineHeight: 1.3,
        marginBottom: 4,
      }}>
        {document.title}
      </div>

      {(document.company || document.issuer || document.mention) && (
        <div style={{ fontSize: 10, color: "#4a4a6a", marginBottom: 4, lineHeight: 1.4 }}>
          {document.company || document.issuer || document.mention}
        </div>
      )}

      {document.grade && (
        <div style={{ fontSize: 10, color: "#d7ba7d", marginBottom: 4 }}>
          Note: {document.grade} / 20
        </div>
      )}

      {document.year && (
        <div style={{ fontSize: 10, color: "#4a4a6a", marginBottom: 4 }}>
          {document.year}
        </div>
      )}

      <StatusDot status={document.status} />
    </div>
  );
};