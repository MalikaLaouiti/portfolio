import { useEffect, useState } from "react";

const CODE_TOKENS = [
  '"server"',
  "printf(",
  "export fn",
  "void",
  "component",
  "About()",
  "skills()",
  "→ AST",
  "Flex",
  "Bison",
  "TypeScript",
  "Next.js",
  "MySQL",
  ".tsx",
  ".ts",
  "=> {}",
  "return",
  "import",
  "const",
  "printf(",
];

interface Particle {
  id: number;
  x: number;
  y: number;
  token: string;
  opacity: number;
  speed: number;
  size: number;
}

export function VisualEffects() {
  const [particles] = useState<Particle[]>(() =>
    Array.from({ length: 22 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      token: CODE_TOKENS[Math.floor(Math.random() * CODE_TOKENS.length)],
      opacity: 0.04 + Math.random() * 0.1,
      speed: 15 + Math.random() * 35,
      size: 10 + Math.random() * 6,
    }))
  );

  const corners = [
    { top: 20, left: 20, rotate: 0 },
    { top: 20, right: 20, rotate: 90 },
    { bottom: 20, right: 20, rotate: 180 },
    { bottom: 20, left: 20, rotate: 270 },
  ];

  return (
    <>
      {/* Floating Code Particles */}
      {particles.map((p) => (
        <span
          key={p.id}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            top: `${p.y}%`,
            fontSize: p.size,
            color: "#4fc1ff",
            opacity: p.opacity,
            fontFamily: "'JetBrains Mono', monospace",
            animation: `floatUp ${p.speed}s linear infinite`,
            animationDelay: `${-Math.random() * p.speed}s`,
            pointerEvents: "none",
            userSelect: "none",
            whiteSpace: "nowrap",
          }}
        >
          {p.token}
        </span>
      ))}

      {/* Scanline Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.07) 2px, rgba(0,0,0,0.07) 4px)",
          zIndex: 1,
        }}
      />

      {/* Corner Decorations */}
      {corners.map((corner, i) => {
        const { rotate, ...position } = corner;
        return (
          <svg
            key={i}
            width={28}
            height={28}
            viewBox="0 0 28 28"
            style={{
              position: "absolute",
              opacity: 0.25,
              zIndex: 2,
              transform: `rotate(${rotate}deg)`,
              ...position,
            }}
          >
            <path
              d="M2 26 L2 2 L26 2"
              stroke="#007acc"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
        );
      })}

      {/* Grid Lines */}
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.03,
          zIndex: 1,
        }}
      >
        {Array.from({ length: 20 }, (_, i) => (
          <line
            key={`h${i}`}
            x1="0"
            y1={`${i * 5.5}%`}
            x2="100%"
            y2={`${i * 5.5}%`}
            stroke="#4fc1ff"
            strokeWidth="0.5"
          />
        ))}
        {Array.from({ length: 30 }, (_, i) => (
          <line
            key={`v${i}`}
            x1={`${i * 3.5}%`}
            y1="0"
            x2={`${i * 3.5}%`}
            y2="100%"
            stroke="#4fc1ff"
            strokeWidth="0.5"
          />
        ))}
      </svg>
    </>
  );
}