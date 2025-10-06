import { regionPins } from "@/content/home";
import { Section } from "@/components/section";

export function RegionsMap() {
  return (
    <Section
      eyebrow="Regional Coverage"
      title="Delivery hubs across the Caribbean, Latin America, and strategic U.S. gateways."
      description="We operate from Shenzhen, Ningbo, Panama City, and Miami into Trinidad, Jamaica, Barbados, Guyana, and beyond—with on-ground teams handling compliance and launch."
      align="center"
    >
      <div className="w-full">
        <div className="relative mx-auto aspect-[16/10] w-full max-w-4xl overflow-hidden rounded-[32px] border border-border/30 bg-gradient-to-br from-surface to-surface-strong">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_65%)]" aria-hidden />
          {regionPins.map((pin) => (
            <div
              key={pin.label}
              className="group absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2"
              style={{ left: `${pin.coords.x}%`, top: `${pin.coords.y}%` }}
            >
              <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground shadow-[0_20px_40px_rgba(249,115,22,0.35)]">
                {pin.label
                  .split(" ")
                  .map((word) => word[0])
                  .join("")
                  .slice(0, 3)}
              </span>
              <span className="whitespace-nowrap rounded-full bg-surface/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-muted opacity-0 transition group-hover:opacity-100">
                {pin.label}
              </span>
            </div>
          ))}
          <svg
            aria-hidden
            viewBox="0 0 800 500"
            className="absolute inset-0 h-full w-full opacity-20"
          >
            <path
              d="M60 260C120 200 170 210 210 170C250 130 320 60 390 90C420 102 430 138 455 150C520 180 600 150 640 180C704 228 756 288 724 340C692 392 524 430 450 428C362 426 330 370 270 360C230 353 210 392 160 380C110 368 0 320 60 260Z"
              fill="url(#mapGradient)"
              opacity="0.6"
            />
            <defs>
              <linearGradient id="mapGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#22d3ee" stopOpacity="0.6" />
                <stop offset="1" stopColor="#f97316" stopOpacity="0.6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </Section>
  );
}
