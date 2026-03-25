import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/src/contexts/LanguageContext";
import { JetBrains_Mono } from "next/font/google";
import { cn } from "@/lib/utils";

const jetbrainsMono = JetBrains_Mono({subsets:['latin'],variable:'--font-mono'});

export const metadata: Metadata = {
  title: "LAOUITI Malika — Portfolio",
  description: "Développeuse Fullstack & Systèmes — Monastir, Tunisie",
  icons: {
    icon: './favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={cn("font-mono", jetbrainsMono.variable)}>
      <body style={{ height: "100vh", overflow: "hidden" }}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
