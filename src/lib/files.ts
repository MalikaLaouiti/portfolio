export type FileKey =
  | "about"
  | "skills"
  | "experience"
  | "projects"
  | "demos"
  | "contact"
  | "config";

export interface DemoProject {
  id: string;
  title: string;
  desc: string;
  url: string;          
  repo: string;         
  stack: string[];
  badge: "LIVE" | "GitHub" | "WIP";
  thumb?: string;       
}

export interface FileData {
  name: string;
  lang: string;
  icon: "ts" | "json" | "mdx" | "pdf";
  lines: string[];
  demos?: DemoProject[]; 
}

// ─── DEMO PROJECTS DATA ─────────────────────────────────────────────────────
export const DEMO_PROJECTS: DemoProject[] = [
  {
    id: "opendash",
    title: "🌐 Open-Dash",
    desc: "Live dashboard — météo, cartes Leaflet, données géo temps réel",
    url: "https://opendash.vercel.app",
    repo: "https://github.com/MalikaLaouiti",
    stack: ["Next.js 15", "Leaflet", "Chart.js", "Express API"],
    badge: "LIVE",
  },
  {
    id: "sourcelang",
    title: "⚙️ SourceLang",
    desc: "Transpilateur custom — mon propre langage de programmation FullStack (PFE 2025)",
    url: "https://sourcelang.vercel.app",
    repo: "https://github.com/MalikaLaouiti",
    stack: ["C", "Flex", "Bison", "AST"],
    badge: "LIVE",
  },
  {
    id: "exceldash",
    title: "📊 Dashboard d'Analyse Stage Académique",
    desc: "Upload Excel, parsing, filtrage, export JSON — pipeline data visuel",
    url: "https://pfe-internship-isimm.netlify.app/dashboard",
    repo: "https://github.com/MalikaLaouiti",
    stack: ["Next.js", "TypeScript", "MongoDB"],
    badge: "LIVE",
  },
  {
    id: "imgrecog",
    title: "🤖 Image Recognition",
    desc: "App Desktop/Web C#.NET — reconnaissance d'images Azure AI temps réel",
    url: "https://github.com/MalikaLaouiti",
    repo: "https://github.com/MalikaLaouiti",
    stack: [".NET C#", "HTML/JS", "Azure AI"],
    badge: "GitHub",
  },
];

export const FILES: Record<FileKey, FileData> = {

  about: {
    name: "about.ts",
    lang: "SourceLang",
    icon: "ts",
    lines: [
      `<span class="str-t">"component"</span><span class="punc-t">;</span>`,
      ``,
      `<span class="kw2">import</span> <span class="punc-t">{</span> <span class="type-t">Developer</span> <span class="punc-t">}</span> <span class="kw2">from</span> <span class="str-t">"sourcelang/types"</span><span class="punc-t">;</span>`,
      ``,
      `<span class="kw">component</span> <span class="fn-t">About</span><span class="punc-t">():</span> <span class="type-t">Developer</span> <span class="punc-t">{</span>`,
      `  <span class="kw2">return</span> <span class="punc-t">(</span>`,
      `    <span class="punc-t">&lt;</span><span class="type-t">section</span><span class="punc-t">&gt;</span>`,
      ``,
      `      <span class="punc-t">&lt;</span><span class="type-t">h1</span><span class="punc-t">&gt;</span>LAOUITI Malika<span class="punc-t">&lt;/</span><span class="type-t">h1</span><span class="punc-t">&gt;</span>`,
      `      <span class="punc-t">&lt;</span><span class="type-t">h2</span><span class="punc-t">&gt;</span>Développeuse Fullstack <span class="op-t">&</span> Systèmes<span class="punc-t">&lt;/</span><span class="type-t">h2</span><span class="punc-t">&gt;</span>`,
      ``,
      `      <span class="punc-t">&lt;</span><span class="type-t">div</span> <span class="prop-t">class</span><span class="op-t">=</span><span class="str-t">"formation"</span><span class="punc-t">&gt;</span>`,
      `        <span class="punc-t">&lt;</span><span class="type-t">p</span><span class="punc-t">&gt;</span>🎓 Licence GL <span class="op-t">&</span> SI — ISIMM Monastir <span class="punc-t">(</span><span class="num-t">2025</span><span class="punc-t">)&lt;/</span><span class="type-t">p</span><span class="punc-t">&gt;</span>`,
      `        <span class="punc-t">&lt;</span><span class="type-t">p</span><span class="punc-t">&gt;</span>🏫 Bac Technologique — Ibn Khaldoun Jemmel <span class="punc-t">(</span><span class="num-t">15.73</span><span class="op-t">/</span><span class="num-t">20</span><span class="punc-t">)&lt;/</span><span class="type-t">p</span><span class="punc-t">&gt;</span>`,
      `      <span class="punc-t">&lt;/</span><span class="type-t">div</span><span class="punc-t">&gt;</span>`,
      ``,
      `      <span class="punc-t">&lt;</span><span class="type-t">div</span> <span class="prop-t">class</span><span class="op-t">=</span><span class="str-t">"status"</span><span class="punc-t">&gt;</span>`,
      `        <span class="punc-t">&lt;</span><span class="type-t">p</span><span class="punc-t">&gt;</span>💼 Recherche un <span class="kw">stage</span> — développement logiciel <span class="op-t">/</span> web <span class="op-t">/</span> systèmes<span class="punc-t">&lt;/</span><span class="type-t">p</span><span class="punc-t">&gt;</span>`,
      `        <span class="punc-t">&lt;</span><span class="type-t">p</span><span class="punc-t">&gt;</span>📍 Monastir <span class="num-t">5020</span> 🇹🇳<span class="punc-t">&lt;/</span><span class="type-t">p</span><span class="punc-t">&gt;</span>`,
      `        <span class="punc-t">&lt;</span><span class="type-t">p</span><span class="punc-t">&gt;</span>⚡ Disponible <span class="bool-t">immédiatement</span> — motivée pour apprendre et contribuer<span class="punc-t">&lt;/</span><span class="type-t">p</span><span class="punc-t">&gt;</span>`,
      `      <span class="punc-t">&lt;/</span><span class="type-t">div</span><span class="punc-t">&gt;</span>`,
      ``,
      `    <span class="punc-t">&lt;/</span><span class="type-t">section</span><span class="punc-t">&gt;</span>`,
      `  <span class="punc-t">);</span>`,
      `<span class="punc-t">}</span>`,
    ],
  },

  // ── skills.ts ─────────────────────────────────────────────────────────────
  skills: {
    name: "skills.ts",
    lang: "SourceLang",
    icon: "ts",
    lines: [
      `<span class="str-t">"server"</span><span class="punc-t">;</span>`,
      ``,
      `<span class="kw">export</span> <span class="kw">fn</span> <span class="fn-t">skills</span><span class="punc-t">():</span> <span class="kw">void</span> <span class="punc-t">{</span>`,
      ``,
      `  <span class="cmt-t">// ── Langages de programmation ──────────────────</span>`,
      `  <span class="fn-t">printf</span><span class="punc-t">(</span><span class="str-t">"Languages:  Python, C, Java, C#, SQL, PL/SQL"</span><span class="punc-t">);</span>`,
      `  <span class="fn-t">printf</span><span class="punc-t">(</span><span class="str-t">"            JavaScript, TypeScript"</span><span class="punc-t">);</span>`,
      ``,
      `  <span class="cmt-t">// ── Web ────────────────────────────────────────</span>`,
      `  <span class="fn-t">printf</span><span class="punc-t">(</span><span class="str-t">"Web:        HTML, CSS, Tailwind"</span><span class="punc-t">);</span>`,
      `  <span class="fn-t">printf</span><span class="punc-t">(</span><span class="str-t">"            Next.js 15, Express.js, Vercel"</span><span class="punc-t">);</span>`,
      ``,
      `  <span class="cmt-t">// ── Bases de données ───────────────────────────</span>`,
      `  <span class="fn-t">printf</span><span class="punc-t">(</span><span class="str-t">"Databases:  MySQL, PostgreSQL"</span><span class="punc-t">);</span>`,
      ``,
      `  <span class="cmt-t">// ── Desktop ────────────────────────────────────</span>`,
      `  <span class="fn-t">printf</span><span class="punc-t">(</span><span class="str-t">"Desktop:    .NET / C#, PyQt5"</span><span class="punc-t">);</span>`,
      ``,
      `  <span class="cmt-t">// ── Outils spéciaux — mon PFE ──────────────────</span>`,
      `  <span class="fn-t">printf</span><span class="punc-t">(</span><span class="str-t">"Compilers:  Flex, Bison → AST generation"</span><span class="punc-t">);</span>`,
      `  <span class="fn-t">printf</span><span class="punc-t">(</span><span class="str-t">"AI:         Azure AI Vision (image recognition)"</span><span class="punc-t">);</span>`,
      `  <span class="fn-t">printf</span><span class="punc-t">(</span><span class="str-t">"Tools:      Git, GitHub"</span><span class="punc-t">);</span>`,
      ``,
      `<span class="punc-t">}</span>`,
    ],
  },

  // ── experience.ts ─────────────────────────────────────────────────────────
  experience: {
    name: "experience.ts",
    lang: "SourceLang",
    icon: "ts",
    lines: [
      `<span class="str-t">"server"</span><span class="punc-t">;</span>`,
      ``,
      `<span class="kw">export</span> <span class="kw">fn</span> <span class="fn-t">experience</span><span class="punc-t">():</span> <span class="kw">void</span> <span class="punc-t">{</span>`,
      ``,
      `  <span class="cmt-t">// ── Stage — YottaByte ──────────────────────────</span>`,
      `  <span class="fn-t">printf</span><span class="punc-t">(</span><span class="str-t">"[Stage]     YottaByte — Monastir, Tunisie"</span><span class="punc-t">);</span>`,
      `  <span class="fn-t">printf</span><span class="punc-t">(</span><span class="str-t">"[Période]   Juillet 2025 – Août 2025"</span><span class="punc-t">);</span>`,
      `  <span class="fn-t">printf</span><span class="punc-t">(</span><span class="str-t">"[Mission]   App web intégrant 6-10 API externes"</span><span class="punc-t">);</span>`,
      `  <span class="fn-t">printf</span><span class="punc-t">(</span><span class="str-t">"[Stack]     Next.js 15, Express.js, TypeScript"</span><span class="punc-t">);</span>`,
      `  <span class="fn-t">printf</span><span class="punc-t">(</span><span class="str-t">"[Tâches]    UI tableau de bord personnalisable"</span><span class="punc-t">);</span>`,
      `  <span class="fn-t">printf</span><span class="punc-t">(</span><span class="str-t">"            Backend Express — intégration API publiques"</span><span class="punc-t">);</span>`,
      ``,
      `  <span class="cmt-t">// ── PFE — ISIMM Monastir ───────────────────────</span>`,
      `  <span class="fn-t">printf</span><span class="punc-t">(</span><span class="str-t">"[PFE]       ISIMM Monastir — Tunisie"</span><span class="punc-t">);</span>`,
      `  <span class="fn-t">printf</span><span class="punc-t">(</span><span class="str-t">"[Période]   Janvier 2025 – Juin 2025"</span><span class="punc-t">);</span>`,
      `  <span class="fn-t">printf</span><span class="punc-t">(</span><span class="str-t">"[Mission]   Langage de programmation FullStack dédié web"</span><span class="punc-t">);</span>`,
      `  <span class="fn-t">printf</span><span class="punc-t">(</span><span class="str-t">"[Stack]     C, Flex, Bison, AST generation"</span><span class="punc-t">);</span>`,
      `  <span class="fn-t">printf</span><span class="punc-t">(</span><span class="str-t">"[Tâches]    Transpilateur Flex/Bison → AST → code web"</span><span class="punc-t">);</span>`,
      ``,
      `  <span class="cmt-t">// ── Stage — WebProSoft ─────────────────────────</span>`,
      `  <span class="fn-t">printf</span><span class="punc-t">(</span><span class="str-t">"[Stage]     WebProSoft — Monastir, Tunisie"</span><span class="punc-t">);</span>`,
      `  <span class="fn-t">printf</span><span class="punc-t">(</span><span class="str-t">"[Période]   Juin 2024 – Juillet 2024"</span><span class="punc-t">);</span>`,
      `  <span class="fn-t">printf</span><span class="punc-t">(</span><span class="str-t">"[Mission]   Plateforme Desktop/Web reconnaissance d'images"</span><span class="punc-t">);</span>`,
      `  <span class="fn-t">printf</span><span class="punc-t">(</span><span class="str-t">"[Stack]     .NET C#, HTML/JS, Azure AI Models"</span><span class="punc-t">);</span>`,
      `  <span class="fn-t">printf</span><span class="punc-t">(</span><span class="str-t">"[Tâches]    Interface intuitive + Azure AI Vision"</span><span class="punc-t">);</span>`,
      ``,
      `  <span class="cmt-t">// ── Freelance ──────────────────────────────────</span>`,
      `  <span class="fn-t">printf</span><span class="punc-t">(</span><span class="str-t">"[Freelance] Client indépendant — Remote, Tunisie"</span><span class="punc-t">);</span>`,
      `  <span class="fn-t">printf</span><span class="punc-t">(</span><span class="str-t">"[Période]   Janvier 2024 – Mars 2024"</span><span class="punc-t">);</span>`,
      `  <span class="fn-t">printf</span><span class="punc-t">(</span><span class="str-t">"[Mission]   Application desktop — gestion d'entreprise"</span><span class="punc-t">);</span>`,
      `  <span class="fn-t">printf</span><span class="punc-t">(</span><span class="str-t">"[Stack]     Python, PyQt5, MySQL"</span><span class="punc-t">);</span>`,
      ``,
      `  <span class="cmt-t">// ── Projet académique — ISIMM ──────────────────</span>`,
      `  <span class="fn-t">printf</span><span class="punc-t">(</span><span class="str-t">"[Académique] ISIMM Monastir — Tunisie"</span><span class="punc-t">);</span>`,
      `  <span class="fn-t">printf</span><span class="punc-t">(</span><span class="str-t">"[Période]    Janvier 2023 – Mars 2023"</span><span class="punc-t">);</span>`,
      `  <span class="fn-t">printf</span><span class="punc-t">(</span><span class="str-t">"[Mission]    App gestion des maladies — archivage patients"</span><span class="punc-t">);</span>`,
      `  <span class="fn-t">printf</span><span class="punc-t">(</span><span class="str-t">"[Stack]      Python, PyQt5, MySQL, SQL"</span><span class="punc-t">);</span>`,
      ``,
      `<span class="punc-t">}</span>`,
    ],
  },

  // ── projects.ts ───────────────────────────────────────────────────────────
  projects: {
    name: "projects.ts",
    lang: "SourceLang",
    icon: "ts",
    lines: [
      `<span class="str-t">"server"</span><span class="punc-t">;</span>`,
      ``,
      `<span class="kw">export</span> <span class="kw">fn</span> <span class="fn-t">projects</span><span class="punc-t">():</span> <span class="kw">void</span> <span class="punc-t">{</span>`,
      ``,
      `  <span class="cmt-t">// ── Open-Dash — Stage YottaByte ────────────────</span>`,
      `  <span class="fn-t">printf</span><span class="punc-t">(</span><span class="str-t">"🌐 Open-Dash (Live Data Platform)"</span><span class="punc-t">);</span>`,
      `  <span class="fn-t">printf</span><span class="punc-t">(</span><span class="str-t">"[Contexte]  Stage — YottaByte, Monastir"</span><span class="punc-t">);</span>`,
      `  <span class="fn-t">printf</span><span class="punc-t">(</span><span class="str-t">"[Période]   Juillet – Août 2025"</span><span class="punc-t">);</span>`,
      `  <span class="fn-t">printf</span><span class="punc-t">(</span><span class="str-t">"[Stack]     Next.js 15, Leaflet, Chart.js, Express"</span><span class="punc-t">);</span>`,
      `  <span class="fn-t">printf</span><span class="punc-t">(</span><span class="str-t">"[Demo]      https://opendash.vercel.app"</span><span class="punc-t">);</span>`,
      ``,
      `  <span class="cmt-t">// ── SourceLang — PFE ISIMM ─────────────────────</span>`,
      `  <span class="fn-t">printf</span><span class="punc-t">(</span><span class="str-t">"⚙️  SourceLang (mon propre langage)"</span><span class="punc-t">);</span>`,
      `  <span class="fn-t">printf</span><span class="punc-t">(</span><span class="str-t">"[Contexte]  PFE — ISIMM Monastir"</span><span class="punc-t">);</span>`,
      `  <span class="fn-t">printf</span><span class="punc-t">(</span><span class="str-t">"[Période]   Janvier – Juin 2025"</span><span class="punc-t">);</span>`,
      `  <span class="fn-t">printf</span><span class="punc-t">(</span><span class="str-t">"[Stack]     C, Flex, Bison, AST → génération code web"</span><span class="punc-t">);</span>`,
      `  <span class="fn-t">printf</span><span class="punc-t">(</span><span class="str-t">"[Note]      Ce fichier est écrit en SourceLang !"</span><span class="punc-t">);</span>`,
      `  <span class="fn-t">printf</span><span class="punc-t">(</span><span class="str-t">"[Documentation] https://sourcelang.vercel.app"</span><span class="punc-t">);</span>`,
      ``,
      `  <span class="cmt-t">// ── Excel Dashboard — Projet perso ─────────────</span>`,
      `  <span class="fn-t">printf</span><span class="punc-t">(</span><span class="str-t">"📊 Dashboard d'Analyse Stage Académique"</span><span class="punc-t">);</span>`,
      `  <span class="fn-t">printf</span><span class="punc-t">(</span><span class="str-t">"[Contexte]  Projet personnel"</span><span class="punc-t">);</span>`,
      `  <span class="fn-t">printf</span><span class="punc-t">(</span><span class="str-t">"[Stack]     Next.js, TypeScript, MongoDB"</span><span class="punc-t">);</span>`,
      `  <span class="fn-t">printf</span><span class="punc-t">(</span><span class="str-t">"[Features]  Upload Excel, Parse, Filter, Export JSON, Visualisation, Analyse Donnees"</span><span class="punc-t">);</span>`,
            `  <span class="fn-t">printf</span><span class="punc-t">(</span><span class="str-t">"[Demo]      https://pfe-internship-isimm.netlify.app/dashboard"</span><span class="punc-t">);</span>`,
      ``,
      `  <span class="cmt-t">// ── Image Recognition — Stage WebProSoft ───────</span>`,
      `  <span class="fn-t">printf</span><span class="punc-t">(</span><span class="str-t">"🤖 Image Recognition Platform"</span><span class="punc-t">);</span>`,
      `  <span class="fn-t">printf</span><span class="punc-t">(</span><span class="str-t">"[Contexte]  Stage — WebProSoft, Monastir"</span><span class="punc-t">);</span>`,
      `  <span class="fn-t">printf</span><span class="punc-t">(</span><span class="str-t">"[Période]   Juin – Juillet 2024"</span><span class="punc-t">);</span>`,
      `  <span class="fn-t">printf</span><span class="punc-t">(</span><span class="str-t">"[Stack]     .NET C#, HTML/JS, Azure AI Models"</span><span class="punc-t">);</span>`,
      ``,
      `  <span class="cmt-t">// ── GitHub ─────────────────────────────────────</span>`,
      `  <span class="fn-t">printf</span><span class="punc-t">(</span><span class="str-t">"🔗 github.com/MalikaLaouiti"</span><span class="punc-t">);</span>`,
      ``,
      `<span class="punc-t">}</span>`,
    ],
  },

  demos: {
    name: "demos.tsx",
    lang: "SourceLang",
    icon: "mdx",
    demos: DEMO_PROJECTS, 
    lines: [
      `<span class="str-t">"component"</span><span class="punc-t">;</span>`,
      ``,
      `<span class="kw2">import</span> <span class="type-t">DemoCard</span> <span class="kw2">from</span> <span class="str-t">"sourcelang/ui"</span><span class="punc-t">;</span>`,
      ``,
      `<span class="cmt-t">/**</span>`,
      `<span class="cmt-t"> * DÉMOS EN LIGNE</span>`,
      `<span class="cmt-t"> * Projets déployés — cliquer pour prévisualiser ou ouvrir</span>`,
      `<span class="cmt-t"> */</span>`,
      ``,
      `<span class="kw">component</span> <span class="fn-t">DemosPage</span><span class="punc-t">() {</span>`,
      `  <span class="kw2">return</span> <span class="punc-t">(</span>`,
      `    <span class="punc-t">&lt;</span><span class="type-t">main</span><span class="punc-t">&gt;</span>`,
      ``,
      `      <span class="cmt-t">{/* ─── LIVE — Open-Dash ─── */}</span>`,
      `      <span class="punc-t">&lt;</span><span class="type-t">DemoCard</span>`,
      `        <span class="prop-t">title</span><span class="op-t">=</span><span class="str-t">"🌐 Open-Dash"</span>`,
      `        <span class="prop-t">url</span><span class="op-t">=</span><span class="str-t">"https://opendash.vercel.app"</span>`,
      `        <span class="prop-t">badge</span><span class="op-t">=</span><span class="str-t">"LIVE"</span>`,
      `      <span class="punc-t">/&gt;</span>`,
      ``,
      `      <span class="cmt-t">{/* ─── LIVE — SourceLang ─── */}</span>`,
      `      <span class="punc-t">&lt;</span><span class="type-t">DemoCard</span>`,
      `        <span class="prop-t">title</span><span class="op-t">=</span><span class="str-t">"⚙️  SourceLang"</span>`,
      `        <span class="prop-t">url</span><span class="op-t">=</span><span class="str-t">"https://sourcelang.vercel.app"</span>`,
      `        <span class="prop-t">badge</span><span class="op-t">=</span><span class="str-t">"LIVE"</span>`,
      `      <span class="punc-t">/&gt;</span>`,
      ``,
      `      <span class="cmt-t">{/* ─── LIVE — Excel Dashboard ─── */}</span>`,
      `      <span class="punc-t">&lt;</span><span class="type-t">DemoCard</span>`,
      `        <span class="prop-t">title</span><span class="op-t">=</span><span class="str-t">"📊 Dashboard d'Analyse Stage Académique"</span>`,
      `        <span class="prop-t">url</span><span class="op-t">=</span><span class="str-t">"https://pfe-internship-isimm.netlify.app/dashboard"</span>`,
      `        <span class="prop-t">badge</span><span class="op-t">=</span><span class="str-t">"LIVE"</span>`,
      `      <span class="punc-t">/&gt;</span>`,
      ``,
      `      <span class="cmt-t">{/* ─── GitHub — Image Recognition ─── */}</span>`,
      `      <span class="punc-t">&lt;</span><span class="type-t">DemoCard</span>`,
      `        <span class="prop-t">title</span><span class="op-t">=</span><span class="str-t">"🤖 Image Recognition (Azure AI)"</span>`,
      `        <span class="prop-t">url</span><span class="op-t">=</span><span class="str-t">"https://github.com/MalikaLaouiti"</span>`,
      `        <span class="prop-t">badge</span><span class="op-t">=</span><span class="str-t">"GitHub"</span>`,
      `      <span class="punc-t">/&gt;</span>`,
      ``,
      `    <span class="punc-t">&lt;/</span><span class="type-t">main</span><span class="punc-t">&gt;</span>`,
      `  <span class="punc-t">);</span>`,
      `<span class="punc-t">}</span>`,
    ],
  },


  // ── contact.ts ────────────────────────────────────────────────────────────
  contact: {
    name: "contact.ts",
    lang: "SourceLang",
    icon: "ts",
    lines: [
      `<span class="str-t">"server"</span><span class="punc-t">;</span>`,
      ``,
      `<span class="kw">export</span> <span class="kw">fn</span> <span class="fn-t">contact</span><span class="punc-t">():</span> <span class="kw">void</span> <span class="punc-t">{</span>`,
      ``,
      `  <span class="fn-t">printf</span><span class="punc-t">(</span><span class="str-t">"Email:    laouiti.malika@yahoo.com"</span><span class="punc-t">);</span>`,
      `  <span class="fn-t">printf</span><span class="punc-t">(</span><span class="str-t">"Phone:    +216 25 731 613"</span><span class="punc-t">);</span>`,
      `  <span class="fn-t">printf</span><span class="punc-t">(</span><span class="str-t">"GitHub:   github.com/MalikaLaouiti"</span><span class="punc-t">);</span>`,
      `  <span class="fn-t">printf</span><span class="punc-t">(</span><span class="str-t">"LinkedIn: linkedin.com/in/malika-laouiti"</span><span class="punc-t">);</span>`,
      `  <span class="fn-t">printf</span><span class="punc-t">(</span><span class="str-t">"Location: Cité El Feth, Jemmel, Monastir 5020 🇹🇳"</span><span class="punc-t">);</span>`,
      ``,
      `  <span class="cmt-t">// disponible immédiatement — stage développement</span>`,
      ``,
      `<span class="punc-t">}</span>`,
    ],
  },

  // ── package.json ──────────────────────────────────────────────────────────
  config: {
    name: "package.json",
    lang: "JSON",
    icon: "json",
    lines: [
      `<span class="punc-t">{</span>`,
      `  <span class="prop-t">"name"</span><span class="punc-t">:</span>        <span class="str-t">"malika-laouiti-portfolio"</span><span class="punc-t">,</span>`,
      `  <span class="prop-t">"version"</span><span class="punc-t">:</span>     <span class="str-t">"1.0.0"</span><span class="punc-t">,</span>`,
      `  <span class="prop-t">"author"</span><span class="punc-t">:</span>      <span class="str-t">"LAOUITI Malika"</span><span class="punc-t">,</span>`,
      `  <span class="prop-t">"description"</span><span class="punc-t">:</span> <span class="str-t">"Développeuse Fullstack & Systèmes"</span><span class="punc-t">,</span>`,
      `  <span class="prop-t">"available"</span><span class="punc-t">:</span>   <span class="bool-t">true</span><span class="punc-t">,</span>`,
      `  <span class="prop-t">"lang"</span><span class="punc-t">:</span>        <span class="str-t">"SourceLang"</span><span class="punc-t">,</span>  <span class="cmt-t">// mon propre langage (PFE)</span>`,
      `  <span class="prop-t">"scripts"</span><span class="punc-t">: {</span>`,
      `    <span class="prop-t">"demo"</span><span class="punc-t">:</span>    <span class="str-t">"open https://opendash.vercel.app"</span><span class="punc-t">,</span>`,
      `    <span class="prop-t">"github"</span><span class="punc-t">:</span>  <span class="str-t">"open github.com/MalikaLaouiti"</span><span class="punc-t">,</span>`,
      `    <span class="prop-t">"contact"</span><span class="punc-t">:</span> <span class="str-t">"mailto:Laouiti.malika@yahoo.com"</span>`,
      `  <span class="punc-t">},</span>`,
      `  <span class="prop-t">"stack"</span><span class="punc-t">: {</span>`,
      `    <span class="prop-t">"web"</span><span class="punc-t">:</span>     <span class="punc-t">[</span><span class="str-t">"Next.js 15"</span><span class="punc-t">,</span> <span class="str-t">"TypeScript"</span><span class="punc-t">,</span> <span class="str-t">"Tailwind"</span><span class="punc-t">],</span>`,
      `    <span class="prop-t">"backend"</span><span class="punc-t">:</span> <span class="punc-t">[</span><span class="str-t">"Express.js"</span><span class="punc-t">,</span> <span class="str-t">"MySQL"</span><span class="punc-t">,</span> <span class="str-t">"PostgreSQL"</span><span class="punc-t">],</span>`,
      `    <span class="prop-t">"systems"</span><span class="punc-t">:</span> <span class="punc-t">[</span><span class="str-t">"C"</span><span class="punc-t">,</span> <span class="str-t">"Flex/Bison"</span><span class="punc-t">,</span> <span class="str-t">"Azure AI"</span><span class="punc-t">],</span>`,
      `    <span class="prop-t">"desktop"</span><span class="punc-t">:</span> <span class="punc-t">[</span><span class="str-t">"Python/PyQt5"</span><span class="punc-t">,</span> <span class="str-t">".NET C#"</span><span class="punc-t">]</span>`,
      `  <span class="punc-t">}</span>`,
      `<span class="punc-t">}</span>`,
    ],
  },
};

export const FILE_KEYS: FileKey[] = [
  "about", "skills", "experience", "projects",
  "demos", "contact", "config",
];
