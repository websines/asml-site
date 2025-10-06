import { Section } from "@/components/section";

const sdgTargets = ["SDG 7", "SDG 9", "SDG 11", "SDG 12", "SDG 13", "SDG 17"];

const timeline = [
  {
    year: "2016",
    title: "Foundations",
    description: "A&S Logistique Mondiale launches to solve Caribbean import bottlenecks with Asia sourcing teams.",
  },
  {
    year: "2018",
    title: "Corporate Infrastructure",
    description: "GlobalLLC.io spins up to provide entity formation, banking, and payments support for regional founders.",
  },
  {
    year: "2020",
    title: "Experiential Expansion",
    description: "Lifeline Event Solutions joins the umbrella to deliver global-standard activations across the Caribbean.",
  },
  {
    year: "2022",
    title: "Watersports & Renewables",
    description: "Neptune’s Playground and AquaRush formalize the watersports franchise program. Offgrid Caribbean launches microgrid initiatives.",
  },
  {
    year: "2024",
    title: "Integrated Growth",
    description: "Cross-division PMO, analytics, and compliance teams connect every scope from sourcing to guest experience.",
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-20">
      <section className="container-xl overflow-hidden rounded-[32px] border border-border/40 bg-gradient-to-br from-surface to-surface-strong px-8 py-16 shadow-[0_50px_160px_rgba(15,23,42,0.45)]">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-center">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-primary">
              About A&S
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
              Multi-division operators enabling Caribbean & LATAM growth.
            </h1>
            <p className="text-lg leading-relaxed text-muted">
              We combine sourcing, logistics, corporate structure, renewables, watersports, and experiential teams into one accountable umbrella. Every scope is built to deliver measurable KPIs with compliance, finance, and analytics baked in.
            </p>
            <div className="grid gap-4 text-sm leading-relaxed text-muted">
              <p>
                Our teams work from Port of Spain, Bridgetown, Kingston, Panama City, Miami, Shenzhen, and Aruba—giving you coverage from factory floor to waterfront launch.
              </p>
              <p>
                We operate with enterprise-grade governance while keeping the agility of a founder-led collective. The result: launch velocity without the friction.
              </p>
            </div>
          </div>
          <div className="card-surface space-y-4 rounded-[32px] border border-border/40 bg-surface/80 p-6 text-sm text-muted">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-muted/70">
              Impact Pillars
            </p>
            <div className="grid gap-3">
              <div className="rounded-2xl border border-border/40 bg-surface/70 p-4">
                <p className="text-lg font-semibold text-foreground">Regional GDP uplift</p>
                <p className="mt-2 leading-relaxed">
                  Supply chains, watersports, and renewables that create new revenue streams and jobs.
                </p>
              </div>
              <div className="rounded-2xl border border-border/40 bg-surface/70 p-4">
                <p className="text-lg font-semibold text-foreground">USD earning power</p>
                <p className="mt-2 leading-relaxed">
                  Entity formation, banking, and payments stacks that unlock global customers and investors.
                </p>
              </div>
              <div className="rounded-2xl border border-border/40 bg-surface/70 p-4">
                <p className="text-lg font-semibold text-foreground">Resilient experiences</p>
                <p className="mt-2 leading-relaxed">
                  Tourism-ready activations and energy infrastructure built to withstand island realities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Alignment"
        title="Sustainable growth anchored to UN Sustainable Development Goals."
        description="Each engagement maps to environmental, economic, and community impact metrics."
        align="center"
      >
        <div className="flex flex-wrap justify-center gap-3 text-xs font-semibold uppercase tracking-[0.32em] text-secondary">
          {sdgTargets.map((sdg) => (
            <span key={sdg} className="rounded-full border border-secondary/30 px-4 py-2">
              {sdg}
            </span>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Timeline"
        title="A decade of building infrastructure, experiences, and corporate backbones."
        description="We started with logistics and sourcing, then layered on corporate services, events, and renewable expertise—now unified as A&S Global Impact."
      >
        <div className="relative grid gap-6 before:absolute before:left-[10px] before:top-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-primary/60 before:to-secondary/60 sm:before:left-[50%] sm:grid-cols-2">
          {timeline.map((item) => (
            <div
              key={item.year}
              className="relative rounded-3xl border border-border/40 bg-surface/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.35)] sm:odd:translate-x-[-18%] sm:even:translate-x-[18%]"
            >
              <span className="absolute -left-[18px] top-6 h-3 w-3 rounded-full bg-primary sm:left-[calc(50%-6px)]" aria-hidden />
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-muted/70">
                {item.year}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Leadership Reach"
        title="Operating nodes across the Caribbean, LATAM, Asia, and the U.S."
        description="No matter where your supply chain or guests originate, we have a specialist within reach."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-border/40 bg-surface/80 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted/70">
              Caribbean HQ
            </p>
            <p className="mt-3 text-lg font-semibold text-foreground">Port of Spain, Trinidad & Tobago</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Executive leadership, compliance, and logistics coordination hub.
            </p>
          </div>
          <div className="rounded-3xl border border-border/40 bg-surface/80 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted/70">
              Americas Hub
            </p>
            <p className="mt-3 text-lg font-semibold text-foreground">Panama City, Panama</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Consolidation center connecting LATAM and U.S. supply into island markets.
            </p>
          </div>
          <div className="rounded-3xl border border-border/40 bg-surface/80 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted/70">
              Asia Sourcing
            </p>
            <p className="mt-3 text-lg font-semibold text-foreground">Shenzhen & Ningbo, China</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Factory relationships, QA inspectors, and manufacturing project managers.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
