import { COMPILE_STEPS } from "@/src/lib/compileSteps";

interface ProgressSectionProps {
  progress: number;
}

const FILES = ["about", "skills", "exp", "proj", "demos", "docs"];

export function ProgressSection({ progress }: ProgressSectionProps) {
  const stepIndex = Math.min(
    COMPILE_STEPS.length - 1,
    Math.floor((progress / 100) * COMPILE_STEPS.length)
  );

  return (
    <div
      style={{
        background: "#141414",
        border: "1px solid #2a2a2a",
        borderTop: "none",
        borderRadius: "0 0 6px 6px",
        padding: "14px 18px 18px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 8,
        }}
      >
        <span style={{ fontSize: 11, color: "#6a9955" }}>
          {COMPILE_STEPS[stepIndex]}
        </span>
        <span style={{ fontSize: 11, color: "#495162" }}>
          {Math.round(progress)}%
        </span>
      </div>

      {/* Progress Bar */}
      <div
        style={{
          height: 3,
          background: "#1e1e1e",
          borderRadius: 2,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${progress}%`,
            background: "linear-gradient(90deg, #007acc, #4fc1ff)",
            borderRadius: 2,
            transition: "width 0.05s linear",
            boxShadow: "0 0 8px #4fc1ff88",
          }}
        />
        {progress < 100 && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: `${progress}%`,
              width: 40,
              height: "100%",
              background:
                "linear-gradient(90deg, transparent, #4fc1ff44, transparent)",
              animation: "shimmer 0.8s linear infinite",
            }}
          />
        )}
      </div>

      {/* File Dots */}
      <div
        style={{
          display: "flex",
          gap: 6,
          marginTop: 12,
          justifyContent: "center",
        }}
      >
        {FILES.map((file, i) => {
          const active = progress >= (i / FILES.length) * 100;
          return (
            <div
              key={file}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 3,
              }}
            >
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: active ? "#4fc1ff" : "#2a2a2a",
                  boxShadow: active ? "0 0 6px #4fc1ff" : "none",
                  transition: "all 0.4s ease",
                }}
              />
              <span
                style={{
                  fontSize: 8,
                  color: active ? "#495162" : "#2a2a2a",
                  transition: "color 0.4s",
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                {file}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}