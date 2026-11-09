export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="script text-[2.6rem] leading-none font-bold italic">RB</span>
      <span className="flex flex-col leading-[1.05]">
        <span className="text-[0.95rem] font-semibold tracking-[0.22em]">ROYAL</span>
        <span className="text-[0.95rem] font-semibold tracking-[0.22em]">BEVERAGE</span>
      </span>
    </span>
  );
}

export function SketchArrow({ dir = "right", className = "" }: { dir?: "left" | "right"; className?: string }) {
  return (
    <svg
      viewBox="0 0 64 24"
      className={className}
      style={dir === "left" ? { transform: "scaleX(-1)" } : undefined}
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 12.5 C20 10.8, 42 13.2, 59 11.5" />
      <path d="M47 3.5 C51 6.5, 55 9, 59.5 11.3 C55.5 13.8, 51.5 16.8, 47.5 20.5" />
    </svg>
  );
}
