import Link from "next/link";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { caseStudies, caseStudyFilters } from "@/content/case-studies";
import { withLocalePath, type Locale } from "@/lib/i18n";

export default async function CaseStudiesPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <div className="space-y-20">
      <Section
        eyebrow="Case Studies"
        title="Proof across logistics, watersports, corporate structure, and activation."
        description="Explore how we reduce transit variance, launch watersports franchises, stand up LLC stacks, and deliver global-standard experiences."
      >
        <div className="grid gap-3 sm:grid-cols-3">
          {Object.entries(caseStudyFilters).map(([key, options]) => (
            <div key={key} className="rounded-3xl border border-border/40 bg-surface/80 p-4 text-xs font-semibold uppercase tracking-[0.24em] text-muted/70">
              <p className="mb-3 text-muted/50">{key}</p>
              <div className="flex flex-wrap gap-2 text-[11px] lowercase tracking-[0.12em] text-muted/80">
                {options.map((option) => (
                  <span key={option} className="rounded-full border border-border/40 px-3 py-1">
                    {option}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <div className="container-xl grid gap-6 lg:grid-cols-3">
        {caseStudies.map((caseStudy) => (
          <article
            key={caseStudy.slug}
            className="card-surface flex h-full flex-col gap-6 rounded-3xl border border-border/40 bg-surface/80 p-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.24em] text-muted/70">
                <span>{caseStudy.industry}</span>
                <span className="rounded-full bg-primary/20 px-3 py-1 text-primary">
                  {caseStudy.heroMetric.value}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">{caseStudy.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{caseStudy.subtitle}</p>
              <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.24em] text-muted/70">
                {caseStudy.services.map((service) => (
                  <span key={service} className="rounded-full border border-border/40 px-3 py-1">
                    {service}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-auto flex items-center justify-between border-t border-border/30 pt-4">
              <Link href={withLocalePath(locale, `/case-studies/${caseStudy.slug}`)}>
                <Button variant="secondary" size="sm">Read</Button>
              </Link>
              <Link
                href={withLocalePath(locale, caseStudy.callToAction.href)}
                className="text-xs font-semibold uppercase tracking-[0.32em] text-primary"
              >
                Related solution →
              </Link>
            </div>
          </article>
        ))}
      </div>

      <section className="container-xl overflow-hidden rounded-[32px] border border-border/40 bg-gradient-to-r from-primary/15 via-surface to-secondary/15 px-10 py-16">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-muted/70">
            Have a similar challenge?
          </p>
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            Let’s map your metrics and craft a scope that delivers faster wins.
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href={withLocalePath(locale, "/book-call")}>
              <Button size="lg">Book a discovery call</Button>
            </Link>
            <Link href={withLocalePath(locale, "/contact")}>
              <Button variant="ghost" size="lg">Talk to the team</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
