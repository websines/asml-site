import { Section } from "@/components/section";

const provisions = [
  {
    title: "Use of services",
    body: `By engaging A&S Logistique Mondiale Ltd LLC, you agree to provide accurate project information, respect confidentiality, and comply with applicable laws in your operating markets.`,
  },
  {
    title: "Intellectual property",
    body: `All materials, processes, and documentation we deliver remain our intellectual property unless otherwise agreed in writing. You receive usage rights for the scope of work.`,
  },
  {
    title: "Payment terms",
    body: `Invoices are due within the agreed payment window stated on contracts or SOWs. Late payments may incur finance charges or suspension of services.`,
  },
  {
    title: "Limitation of liability",
    body: `We operate with due care and professional diligence. A&S is not liable for indirect damages or losses exceeding fees paid for the specific engagement.`,
  },
];

export default function TermsPage() {
  return (
    <div className="space-y-20">
      <section className="container-xl rounded-[32px] border border-border/40 bg-surface/80 px-8 py-16 shadow-[0_50px_160px_rgba(15,23,42,0.45)]">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-muted/70">Legal</p>
          <h1 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
            Terms of use
          </h1>
          <p className="text-sm uppercase tracking-[0.24em] text-muted/70">
            Last updated: October 1, 2025
          </p>
          <p className="text-lg leading-relaxed text-muted">
            These terms govern your use of the A&S Global Impact website, resources, and services. By accessing or engaging with our teams, you accept these terms.
          </p>
        </div>
      </section>

      <Section eyebrow="Key provisions" title="The essentials of partnering with A&S.">
        <div className="grid gap-6 text-sm leading-relaxed text-muted">
          {provisions.map((provision) => (
            <div key={provision.title} className="rounded-3xl border border-border/40 bg-surface/80 p-6">
              <h2 className="text-xl font-semibold text-foreground">{provision.title}</h2>
              <p className="mt-3">{provision.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Need a contract copy?"
        title="Request our master services agreement or NDAs at legal@aslmllc.net."
        align="center"
      >
        <p className="text-sm leading-relaxed text-muted">
          Email <a className="text-primary" href="mailto:legal@aslmllc.net">legal@aslmllc.net</a> and we’ll send the latest documentation tailored to your jurisdiction.
        </p>
      </Section>
    </div>
  );
}
