
import { DocCategory, CAT_COLOR } from "@/src/types/documents";


interface Props {
  category: DocCategory;
}

export const CategoryBadge = ({ category }: Props) => {
  const style = CAT_COLOR[category];
  
  return (
    <span style={{
      background: style.bg,
      border: `1px solid ${style.border}`,
      color: style.text,
      fontSize: 9,
      fontWeight: 700,
      padding: "1px 6px",
      borderRadius: 10,
      letterSpacing: 0.4,
      fontFamily: "'JetBrains Mono', monospace",
      whiteSpace: "nowrap",
    }}>
      {style.icon} {category}
    </span>
  );
};