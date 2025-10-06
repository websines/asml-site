import Link from "next/link";
import { Section } from "@/components/section";

const sections = [
  {
    title: "Data we collect",
    body: `We capture the information you submit via forms (name, company, contact details, stated interests) alongside behavioral data such as catalog downloads, call bookings, and email interactions. This data helps us deliver relevant solutions and follow up responsibly.`,
  },
  {
    title: "How we use your information",
    body: `Your data routes to our CRM/ESP for lead handling, project scoping, and marketing communications. We may also share necessary details with trusted division partners to fulfill your requests. We do not sell or rent your information.`,
  },
  {
    title: "Data retention & rights",
    body: `We retain contact records as long as we have an active business relationship or legitimate interest. You can request access, updates, or deletion at any time by emailing privacy@aslmllc.net.`,
  },
  {
    title: "Cookies & analytics",
    body: `We use cookies and similar technologies to measure campaign performance and improve experience. Optional marketing pixels load only after consent.`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="space-y-20">
      <section className="container-xl rounded-[32px] border border-border/40 bg-surface/80 px-8 py-16 shadow-[0_50px_160px_rgba(15,23,42,0.45)]">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-muted/70">Legal</p>
          <h1 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
            Privacy policy
          </h1>
          <p className="text-sm uppercase tracking-[0.24em] text-muted/70">
            Last updated: October 1, 2025
          </p>
          <p className="text-lg leading-relaxed text-muted">
            A&S Logistique Mondiale Ltd LLC (&ldquo;A&S&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;) respects your privacy. This policy explains how we collect, use, and protect your data when you interact with our digital properties, catalog downloads, and lead capture funnels.
          </p>
        </div>
      </section>

      <Section eyebrow="Details" title="How we safeguard your information.">
        <div className="grid gap-6 text-sm leading-relaxed text-muted">
          {sections.map((section) => (
            <div key={section.title} className="rounded-3xl border border-border/40 bg-surface/80 p-6">
              <h2 className="text-xl font-semibold text-foreground">{section.title}</h2>
              <p className="mt-3">{section.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Contact"
        title="Questions about privacy?"
        description="Reach our compliance team at privacy@aslmllc.net or write to A&S Logistique Mondiale Ltd LLC, Port of Spain, Trinidad & Tobago."
        align="center"
      >
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs uppercase tracking-[0.32em] text-muted/70">
          <Link href="mailto:privacy@aslmllc.net" className="rounded-full border border-border/40 px-4 py-2 text-primary">
            privacy@aslmllc.net
          </Link>
          <span className="rounded-full border border-border/40 px-4 py-2">+1 (868) 217-1111</span>
        </div>
      </Section>
    </div>
  );
}
