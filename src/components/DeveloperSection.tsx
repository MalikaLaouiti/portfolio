export function DeveloperSection() {
  const technologies = [
    "SourceLang",
    "Next.js 15",
    "TypeScript",
    "Flex/Bison",
    "Azure AI",
  ];

  return (
    <div style={{ textAlign: "center", marginTop: 32 }}>
      <div
        style={{
          fontSize: 11,
          color: "#2a2a3a",
          letterSpacing: 4,
          textTransform: "uppercase",
          marginBottom: 8,
          animation: "fadeSlideUp 0.6s ease 0.2s both",
        }}
      >
        Initialisation du portfolio de
      </div>
      <div
        style={{
          fontSize: 28,
          fontWeight: 700,
          color: "#d4d4d4",
          letterSpacing: 1,
          animation: "fadeSlideUp 0.6s ease 0.4s both",
        }}
      >
        LAOUITI<span style={{ color: "#4fc1ff" }}> Malika</span>
      </div>
      <div
        style={{
          fontSize: 12,
          color: "#495162",
          marginTop: 6,
          animation: "fadeSlideUp 0.6s ease 0.6s both",
        }}
      >
        Développeuse Fullstack & Systèmes · Monastir, Tunisie 🇹🇳
      </div>

      {/* Tech Badges */}
      <div
        style={{
          display: "flex",
          gap: 6,
          justifyContent: "center",
          marginTop: 16,
          flexWrap: "wrap",
          animation: "fadeSlideUp 0.6s ease 0.8s both",
        }}
      >
        {technologies.map((tech) => (
          <span
            key={tech}
            style={{
              fontSize: 9,
              padding: "2px 8px",
              background: "#1a1a2a",
              border: "1px solid #2a2a3a",
              color: "#4a4a6a",
              borderRadius: 3,
              letterSpacing: 0.5,
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}