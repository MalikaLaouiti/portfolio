import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LAOUITI Malika — Portfolio",
  description: "Développeuse Fullstack & Systèmes — Monastir, Tunisie",
  icons: {
    icon: './favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body style={{ height: "100vh", overflow: "hidden" }}>{children}</body>
    </html>
  );
}
