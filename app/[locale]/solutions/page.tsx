import Link from "next/link";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { solutionFilters, solutions } from "@/content/solutions";
import { withLocalePath, type Locale } from "@/lib/i18n";

type SolutionsPageProps = {
  params: { locale: Locale };
};

export default function SolutionsPage({ params }: SolutionsPageProps) {
  const { locale } = params;

  return (
    <div className="space-y-20">
      <Section
        eyebrow="Solutions"
        title="Modular services engineered to unlock Caribbean & LATAM growth."
        description="From factory control and customs to corporate structure, watersports, and renewables—every solution connects to the next under one accountable team."
      >
        <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-muted">
          {solutionFilters.map((filter) => (
            <span
              key={filter}
              className="rounded-full border border-border/50 bg-surface px-4 py-2 text-muted/80"
            >
              {filter}
            </span>
          ))}
        </div>
      </Section>

      <div className="container-xl grid gap-6 lg:grid-cols-2">
        {solutions.map((solution) => (
          <article
            key={solution.slug}
            className="card-surface flex flex-col gap-6 rounded-3xl border border-border/40 bg-surface/80 p-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.24em] text-muted/70">
                <span>{solution.heroEyebrow}</span>
                <span className="rounded-full bg-primary/20 px-3 py-1 text-primary">
                  {solution.heroKpi}
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-foreground">{solution.name}</h3>
              <p className="text-sm leading-relaxed text-muted">{solution.summary}</p>
              <ul className="grid gap-2 text-sm text-muted/90">
                {solution.solutionHighlights.slice(0, 3).map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary" aria-hidden />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-between border-t border-border/30 pt-4">
              <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.24em] text-muted/70">
                {solution.sectors.slice(0, 3).map((sector) => (
                  <span key={sector} className="rounded-full bg-surface px-3 py-1">
                    {sector}
                  </span>
                ))}
              </div>
              <Button asChild variant="secondary" size="sm">
                <Link href={withLocalePath(locale, `/solutions/${solution.slug}`)}>View details</Link>
              </Button>
            </div>
          </article>
        ))}
      </div>

      <section className="container-xl overflow-hidden rounded-[32px] border border-border/40 bg-gradient-to-r from-secondary/10 via-surface to-primary/10 px-10 py-16">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-muted/80">
            Need a blended scope?
          </p>
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            Combine logistics, sourcing, corporate, and experiential teams into one integrated retainer.
          </h2>
          <p className="text-base leading-relaxed text-muted">
            We align SLAs, dashboards, and accountability across divisions so your project has a single operating core—from supply chain to guest experience.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href={withLocalePath(locale, "/contact")}>Share your brief</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href={withLocalePath(locale, "/case-studies")}>See proof</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
