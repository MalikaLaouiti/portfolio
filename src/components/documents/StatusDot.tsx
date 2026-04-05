import { DocStatus } from "@/src/types/documents";

interface Props {
  status: DocStatus;
}

export const StatusDot = ({ status }: Props) => {
  const isAvailable = status === "available";
  
  return (
    <span style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      fontSize: 10,
      color: isAvailable ? "#27c93f" : "#858585",
      fontFamily: "'JetBrains Mono', monospace",
    }}>
      <span style={{
        width: 6,
        height: 6,
        borderRadius: "50%",
        background: isAvailable ? "#27c93f" : "#555",
        boxShadow: isAvailable ? "0 0 5px #27c93f" : "none",
        display: "inline-block",
      }} />
      {isAvailable ? "Disponible" : "Sur demande"}
    </span>
  );
};