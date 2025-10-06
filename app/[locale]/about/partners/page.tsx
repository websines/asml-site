import Link from "next/link";
import { Section } from "@/components/section";
import { partners } from "@/content/partners";

export default function PartnersPage() {
  return (
    <div className="space-y-20">
      <Section
        eyebrow="Partners"
        title="Credible partners backing our logistics, finance, and experiential work."
        description="We collaborate with banking, technology, training, and infrastructure partners who understand Caribbean realities."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {partners.map((partner) => (
            <article
              key={partner.name}
              className="card-surface flex h-full flex-col gap-4 rounded-3xl border border-border/40 bg-surface/80 p-6"
            >
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.24em] text-muted/70">
                <span>{partner.category}</span>
                {partner.href ? (
                  <Link
                    href={partner.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary transition hover:text-primary/75"
                  >
                    Visit ↗
                  </Link>
                ) : null}
              </div>
              <h3 className="text-xl font-semibold text-foreground">{partner.name}</h3>
              <p className="text-sm leading-relaxed text-muted">{partner.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Compliance"
        title="Ready with insurance, certifications, and documentation."
        description="We maintain liability coverage, safety certifications, and compliance documentation for each operating market. Request what you need and we’ll provide it within 24 hours."
        align="center"
      >
        <div className="rounded-[28px] border border-border/40 bg-surface/80 p-6 text-sm leading-relaxed text-muted">
          <ul className="grid gap-2">
            <li>• Certificate of insurance (per event, project, or annual coverage).</li>
            <li>• Vendor onboarding packets for resorts, governments, and enterprises.</li>
            <li>• ESG reporting snapshots tied to SDG-aligned commitments.</li>
          </ul>
        </div>
      </Section>
    </div>
  );
}
