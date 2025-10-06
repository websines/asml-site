import { notFound } from "next/navigation";
import Link from "next/link";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { getSolutionBySlug, solutions } from "@/content/solutions";
import { i18n, withLocalePath, type Locale } from "@/lib/i18n";

export function generateStaticParams() {
  return i18n.locales.flatMap((locale) =>
    solutions.map((solution) => ({ locale, slug: solution.slug })),
  );
}

type SolutionPageProps = {
  params: { locale: Locale; slug: string };
};

export default function SolutionPage({ params }: SolutionPageProps) {
  const { slug, locale } = params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    notFound();
  }

  return (
    <div className="space-y-20">
      <section className="container-xl overflow-hidden rounded-[32px] border border-border/40 bg-gradient-to-br from-surface to-surface-strong px-8 py-14 shadow-[0_50px_160px_rgba(15,23,42,0.45)]">
        <div className="flex flex-wrap items-center justify-between gap-6 text-xs font-semibold uppercase tracking-[0.32em] text-muted/70">
          <span>{solution.heroEyebrow}</span>
          <span className="rounded-full bg-primary/20 px-4 py-2 text-primary">{solution.heroKpi}</span>
        </div>
        <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start">
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
              {solution.headline}
            </h1>
            <p className="text-lg leading-relaxed text-muted">{solution.summary}</p>
            <div className="grid gap-3 text-sm text-muted">
              {solution.painPoints.map((pain) => (
                <div key={pain} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary" aria-hidden />
                  <span>{pain}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.24em] text-muted/70">
              {solution.sectors.map((sector) => (
                <span key={sector} className="rounded-full border border-border/40 px-3 py-1">
                  {sector}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={withLocalePath(locale, "/contact")}>Talk with a strategist</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href={withLocalePath(locale, "/case-studies")}>View proof</Link>
              </Button>
            </div>
          </div>
          <div className="card-surface space-y-4 rounded-3xl border border-border/40 bg-surface/80 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-muted/70">
              Outcome Snapshot
            </p>
            <ul className="grid gap-4 text-sm text-muted/90">
              {solution.outcomes.map((outcome) => (
                <li key={outcome.label} className="rounded-2xl border border-border/40 bg-surface/70 p-4">
                  <p className="text-lg font-semibold text-foreground">{outcome.label}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{outcome.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Section
        eyebrow="How it works"
        title="Three structured phases to go from discovery to launch."
        description="Each phase comes with deliverables, dashboards, and owners so you always know where execution stands."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {solution.process.map((step, index) => (
            <div
              key={step.step}
              className="rounded-3xl border border-border/40 bg-surface/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.35)]"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.32em] text-muted/70">
                Step {index + 1}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-foreground">{step.step}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="What clients say"
        title="Trusted by operators who demand accountable execution."
        description="We deploy division leads and project managers who own timelines, compliance, and results."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {solution.testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="card-surface flex h-full flex-col gap-6 rounded-3xl border border-border/40 bg-surface/80 p-6"
            >
              <p className="text-base leading-relaxed text-foreground/90">“{testimonial.quote}”</p>
              <div className="mt-auto">
                <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-xs uppercase tracking-[0.24em] text-muted/70">
                  {testimonial.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="FAQ"
        title="Practical details before we start."
        description="Still have questions? Start a conversation and we’ll tailor a scope."
      >
        <div className="grid gap-4">
          {solution.faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-3xl border border-border/40 bg-surface/80 p-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between text-left text-lg font-semibold text-foreground">
                {faq.question}
                <span className="text-primary transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Section>

      <section className="container-xl overflow-hidden rounded-[32px] border border-border/40 bg-gradient-to-r from-primary/10 via-surface-strong to-secondary/10 px-10 py-16">
        <div className="mx-auto flex max-w-3xl flex-col gap-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-muted/70">
            Ready to scope this solution?
          </p>
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            Share your project and we’ll schedule a working session with the division lead.
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href={withLocalePath(locale, "/book-call")}>Book discovery call</Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link href={withLocalePath(locale, "/catalog")}>Download the catalog</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
