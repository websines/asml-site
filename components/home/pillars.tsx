import Link from "next/link";
import { pillars } from "@/content/home";
import { Section } from "@/components/section";
import { withLocalePath, type Locale } from "@/lib/i18n";

export function Pillars({ locale }: { locale: Locale }) {
  return (
    <Section
      eyebrow="What We Deliver"
      title="Five pillars to take you from concept to Caribbean launch."
      description="Each division snaps into the next—logistics, corporate structure, activations, and growth infrastructure engineered to deliver measurable outcomes."
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {pillars.map((pillar) => (
          <Link
            key={pillar.title}
            href={withLocalePath(locale, pillar.href)}
            className="card-surface group flex flex-col gap-4 rounded-3xl p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_40px_80px_rgba(249,115,22,0.25)]"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              {pillar.title
                .split(" ")
                .map((word) => word[0])
                .join("")
                .slice(0, 3)}
            </span>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-foreground">{pillar.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{pillar.description}</p>
            </div>
            <span className="mt-auto flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.32em] text-primary">
              Explore
              <span className="transition group-hover:translate-x-1">→</span>
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}
