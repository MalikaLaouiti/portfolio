export const BOOT_LINES = [
  { delay: 0, text: `> sourcelang init portfolio.src`, type: "cmd" as const },
  { delay: 180, text: `  Parsing AST...`, type: "info" as const },
  { delay: 380, text: `  Resolving imports: about.ts`, type: "ok" as const },
  { delay: 520, text: `  Resolving imports: skills.ts`, type: "ok" as const },
  { delay: 660, text: `  Resolving imports: experience.ts`, type: "ok" as const },
  { delay: 800, text: `  Resolving imports: projects.ts`, type: "ok" as const },
  { delay: 940, text: `  Resolving imports: demos.tsx`, type: "ok" as const },
  { delay: 1080, text: `  Resolving imports: documents.ts`, type: "ok" as const },
  { delay: 1200, text: `  Transpiling → Next.js 15...`, type: "info" as const },
  { delay: 1500, text: `  Bundling: 6 components, 2842 lines`, type: "info" as const },
  { delay: 1750, text: `  Code generation: done ✓`, type: "ok" as const },
  { delay: 1950, text: `  Launching dev server on :3000`, type: "info" as const },
  { delay: 2200, text: `> Portfolio ready. Welcome, Malika. 🇹🇳`, type: "success" as const },
];

export const LINE_COLORS = {
  cmd: "#4fc1ff",
  info: "#858585",
  ok: "#6a9955",
  success: "#4ec9b0",
} as const;