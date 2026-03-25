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