export function BackgroundOrnament() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_55%),radial-gradient(circle_at_bottom,rgba(249,115,22,0.1),transparent_60%)]" />
      <div className="absolute left-1/2 top-[12%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-b from-primary/40 via-primary/10 to-transparent blur-[160px]" />
      <svg
        viewBox="0 0 800 800"
        className="absolute left-1/2 top-1/2 h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2 opacity-[0.08]"
      >
        <defs>
          <pattern
            id="grid"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 80 0 L 0 0 0 80"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}
