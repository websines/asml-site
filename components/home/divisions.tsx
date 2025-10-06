import Link from "next/link";
import type { CSSProperties } from "react";
import { divisions } from "@/content/home";
import { Section } from "@/components/section";

const marqueeStyle = {
  "--marquee-duration": "48s",
} as CSSProperties;

const marqueeItems = [...divisions, ...divisions];

export function DivisionCarousel() {
  return (
    <Section
      eyebrow="Umbrella Divisions"
      title="Specialist brands under one accountable umbrella."
      description="Plug into renewables, watersports, sourcing, corporate services, and event teams that operate with shared playbooks and SLAs."
      align="center"
    >
      <div className="marquee-group relative overflow-hidden rounded-[30px] border border-border/30 bg-surface/40 p-4">
        <div className="marquee-fade" />
        <div className="marquee-track" style={marqueeStyle}>
          {marqueeItems.map((division, index) => (
            <Link
              key={`${division.name}-${index}`}
              href={division.href}
              target="_blank"
              rel="noreferrer"
              className="card-surface relative flex min-w-[260px] max-w-[280px] flex-col gap-4 rounded-3xl border border-border/30 bg-surface/80 p-6 transition hover:-translate-y-1 hover:border-secondary/40 hover:shadow-[0_30px_70px_rgba(34,211,238,0.25)]"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.32em] text-secondary">
                Division
              </span>
              <h3 className="mt-2 text-xl font-semibold text-foreground">{division.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{division.description}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.32em] text-secondary">
                Visit Site
                <span aria-hidden>↗</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}
