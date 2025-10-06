import { Section } from "@/components/section";
import { team } from "@/content/team";

export default function TeamPage() {
  return (
    <div className="space-y-20">
      <Section
        eyebrow="Leadership"
        title="Meet the operators guiding each division."
        description="Specialists across logistics, sourcing, events, renewables, and corporate structures collaborate on every engagement."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {team.map((member) => (
            <article
              key={member.name}
              className="card-surface flex h-full flex-col gap-4 rounded-3xl border border-border/40 bg-surface/80 p-6"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted/70">
                  {member.division}
                </p>
                <h2 className="mt-3 text-xl font-semibold text-foreground">{member.name}</h2>
                <p className="text-sm text-muted">{member.role}</p>
              </div>
              <p className="text-sm leading-relaxed text-muted/90">{member.bio}</p>
              <p className="mt-auto text-xs uppercase tracking-[0.24em] text-muted/70">
                {member.location}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Partner with us"
        title="We pair every engagement with executive sponsorship and division leads."
        description="Once scope is confirmed, we introduce your primary contact, PMO, and supporting leads within 48 hours."
        align="center"
      >
        <p className="text-sm leading-relaxed text-muted">
          Looking to collaborate? Email <a className="text-primary" href="mailto:hello@aslmllc.net">hello@aslmllc.net</a> with your portfolio. We prioritize partners who thrive in multi-market, compliance-heavy environments.
        </p>
      </Section>
    </div>
  );
}
