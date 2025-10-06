import Link from "next/link";
import { caseStudyHighlights } from "@/content/home";
import { Section } from "@/components/section";
import { withLocalePath, type Locale } from "@/lib/i18n";

export function CaseStudiesHighlight({ locale }: { locale: Locale }) {
  return (
    <Section
      eyebrow="Proof of Execution"
      title="Outcomes across logistics, franchising, and corporate structuring."
      description="We lead multi-division builds with measurable KPIs—transit time, revenue lift, guest experience, and compliance."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {caseStudyHighlights.map((cs) => (
          <Link
            key={cs.title}
            href={withLocalePath(locale, cs.href)}
            className="card-surface flex flex-col justify-between rounded-3xl border border-border/40 bg-surface/80 p-6 transition hover:-translate-y-1 hover:border-foreground/20"
          >
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.32em] text-muted/70">
                Case Study
              </span>
              <h3 className="text-xl font-semibold text-foreground">{cs.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{cs.summary}</p>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-2xl font-semibold text-primary">{cs.metric}</p>
              <span className="text-xs font-semibold uppercase tracking-[0.32em] text-primary">
                View →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
