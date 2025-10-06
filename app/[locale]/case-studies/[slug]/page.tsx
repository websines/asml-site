import { notFound } from "next/navigation";
import Link from "next/link";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/content/case-studies";
import { i18n, withLocalePath, type Locale } from "@/lib/i18n";

export function generateStaticParams() {
  return i18n.locales.flatMap((locale) =>
    caseStudies.map((caseStudy) => ({ locale, slug: caseStudy.slug })),
  );
}

type CaseStudyPageProps = {
  params: Promise<{ locale: Locale; slug: string }>;
};

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug, locale } = await params;
  const caseStudy = caseStudies.find((item) => item.slug === slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="space-y-20">
      <section className="container-xl overflow-hidden rounded-[32px] border border-border/40 bg-gradient-to-br from-surface to-surface-strong px-8 py-14 shadow-[0_50px_160px_rgba(15,23,42,0.45)]">
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.24em] text-muted/70">
          <span>{caseStudy.industry}</span>
          <span>{caseStudy.country}</span>
        </div>
        <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
              {caseStudy.title}
            </h1>
            <p className="text-lg leading-relaxed text-muted">{caseStudy.subtitle}</p>
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.24em] text-muted/70">
              {caseStudy.services.map((service) => (
                <span key={service} className="rounded-full border border-border/40 px-3 py-1">
                  {service}
                </span>
              ))}
            </div>
            <div className="grid gap-4 text-sm leading-relaxed text-muted">
              <p>{caseStudy.overview}</p>
              <div className="rounded-3xl border border-border/40 bg-surface/80 p-6">
                <h2 className="text-xl font-semibold text-foreground">{caseStudy.challenge.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{caseStudy.challenge.body}</p>
              </div>
              <div className="rounded-3xl border border-border/40 bg-surface/80 p-6">
                <h2 className="text-xl font-semibold text-foreground">{caseStudy.approach.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{caseStudy.approach.body}</p>
              </div>
              <div className="rounded-3xl border border-border/40 bg-surface/80 p-6">
                <h2 className="text-xl font-semibold text-foreground">{caseStudy.outcome.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{caseStudy.outcome.body}</p>
              </div>
            </div>
          </div>
          <aside className="card-surface space-y-6 rounded-3xl border border-border/40 bg-surface/80 p-6">
            <div className="space-y-4 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted/70">
                Hero Metric
              </p>
              <p className="text-3xl font-semibold text-primary">{caseStudy.heroMetric.value}</p>
              <p className="text-sm leading-relaxed text-muted">{caseStudy.heroMetric.description}</p>
            </div>
            <div className="grid gap-3 text-sm text-muted">
              {caseStudy.metrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-border/40 bg-surface/70 p-4">
                  <p className="text-lg font-semibold text-foreground">{metric.value}</p>
                  <p className="text-xs uppercase tracking-[0.24em] text-muted/70">{metric.label}</p>
                  {metric.description ? (
                    <p className="mt-1 text-sm leading-relaxed text-muted">{metric.description}</p>
                  ) : null}
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-border/40 bg-surface/70 p-4 text-sm text-muted">
              <p className="text-base font-semibold text-foreground">What they said</p>
              <p className="mt-3 leading-relaxed text-foreground/90">“{caseStudy.testimonial.quote}”</p>
              <p className="mt-3 text-xs uppercase tracking-[0.24em] text-muted/70">
                {caseStudy.testimonial.name} — {caseStudy.testimonial.role}
              </p>
            </div>
          </aside>
        </div>
      </section>

      <Section
        eyebrow="Request a similar outcome"
        title="Let’s map your KPIs and engineer the next win."
        description="Align with the division leads responsible for the results featured here."
      align="center"
    >
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link href={withLocalePath(locale, "/book-call")}>
          <Button size="lg">Book discovery call</Button>
        </Link>
        <Link href={withLocalePath(locale, caseStudy.callToAction.href)}>
          <Button variant="ghost" size="lg">{caseStudy.callToAction.label}</Button>
        </Link>
      </div>
    </Section>
    </div>
  );
}
