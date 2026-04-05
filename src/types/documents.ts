export type DocStatus = "available" | "on-request";

export type DocCategory =
  | "CV"
  | "Attestation de Stage"
  | "Certificat"
  | "Diplôme"
  | "Baccalauréat"
  | "Relevé de notes";

export interface DocumentItem {
  id: string;
  category: DocCategory;
  title: string;
  file: string;
  status: DocStatus;
  year?: number;
  company?: string;
  issuer?: string;
  mention?: string;
  grade?: number;
}

export interface CategoryStyle {
  bg: string;
  border: string;
  text: string;
  icon: string;
}

export const DOCUMENTS: DocumentItem[] = [
  {
    id: "cv",
    category: "CV",
    title: "Curriculum Vitæ — LAOUITI Malika",
    file: "/documents/CV-MalikaLaouiti.pdf",
    year: 2025,
    status: "available",
  },
  {
    id: "attest-yotta",
    category: "Attestation de Stage",
    title: "Attestation — YottaByte",
    company: "YottaByte, Monastir · Juil–Août 2025",
    file: "/documents/attestation-yottabyte-2025.pdf",
    status: "available",
  },
  {
    id: "attest-webpro",
    category: "Attestation de Stage",
    title: "Attestation — WebProSoft",
    company: "WebProSoft, Monastir · Juin–Juil 2024",
    file: "/documents/attestation-webprosoft-2024.pdf",
    status: "available",
  },
  {
    id: "ccna",
    category: "Certificat",
    title: "CCNA 1 — Introduction to Networks",
    issuer: "Cisco Networking Academy",
    file: "/documents/certificat-ccna1.pdf",
    status: "available",
  },
  {
    id: "licence",
    category: "Diplôme",
    title: "Licence GL & SI — ISIMM Monastir",
    mention: "Excellent · FYP: SourceLang",
    year: 2025,
    file: "/documents/diplome-licence-isimm-2025.pdf",
    status: "available",
  },
  {
    id: "bac",
    category: "Baccalauréat",
    title: "Bac Technologique — Ibn Khaldoun Jemmel",
    grade: 15.73,
    year: 2022,
    file: "/documents/baccalaureat-2022.pdf",
    status: "available",
  },
  {
    id: "releve",
    category: "Relevé de notes",
    title: "Relevé de notes — Licence ISIMM (2022–2025)",
    file: "/documents/releve-notes-licence.pdf",
    status: "on-request",
  },
];


export const CAT_COLOR: Record<DocCategory, { bg: string; border: string; text: string; icon: string }> = {
  "CV":                   { bg: "#0d1f3d", border: "#4fc1ff", text: "#4fc1ff",  icon: "👤" },
  "Attestation de Stage": { bg: "#0d3d0d", border: "#27c93f", text: "#27c93f",  icon: "🏢" },
  "Certificat":           { bg: "#3d2200", border: "#d7ba7d", text: "#d7ba7d",  icon: "🏅" },
  "Diplôme":              { bg: "#2a0d3d", border: "#c586c0", text: "#c586c0",  icon: "🎓" },
  "Baccalauréat":         { bg: "#2a0d3d", border: "#c586c0", text: "#c586c0",  icon: "🎓" },
  "Relevé de notes":      { bg: "#1a1a2a", border: "#858585", text: "#858585",  icon: "📋" },
};

export const EMAIL = "laouiti.malika@yahoo.com";