export type SolutionDetail = {
  slug: string;
  name: string;
  headline: string;
  summary: string;
  heroEyebrow: string;
  heroKpi: string;
  sectors: string[];
  painPoints: string[];
  solutionHighlights: string[];
  process: Array<{ step: string; description: string }>;
  outcomes: Array<{ label: string; description: string }>;
  testimonials: Array<{ quote: string; name: string; role: string }>;
  faqs: Array<{ question: string; answer: string }>;
};

export const solutions: SolutionDetail[] = [
  {
    slug: "logistics",
    name: "Logistics & Freight",
    headline: "Predictable LCL/FCL lanes from Asia & the Americas into the Caribbean.",
    heroEyebrow: "Logistics",
    heroKpi: "42% faster inbound",
    summary:
      "Origin control in Shenzhen, Ningbo, Panama City, and Miami with bonded partners, customs brokerage, and last-mile coordination across the Caribbean.",
    sectors: ["Supply Chain", "Retail", "Industrial"],
    painPoints: [
      "Volatile sailing schedules and lack of accountability after freight forwarder handoff.",
      "Customs documentation errors that trigger storage fees and demurrage.",
      "No visibility into consolidation, inspections, and last-mile delivery timelines.",
    ],
    solutionHighlights: [
      "Weekly sailings with committed space allocations and live milestone tracking.",
      "Origin QC, unit consolidation, and export documentation handled in-house.",
      "Customs clearance playbooks per island with duty optimization and local teams.",
    ],
    process: [
      {
        step: "Origin Intake",
        description:
          "RFQ, vendor onboarding, and factory coordination with QC inspectors stationed in Shenzhen and Ningbo.",
      },
      {
        step: "Consolidate & Sail",
        description:
          "Container consolidation, compliance audit, and sailing confirmation with shared dashboards and notifications.",
      },
      {
        step: "Clear & Deliver",
        description:
          "Customs brokerage, bonded trucking, and duty optimization with island-based teams closing the loop on delivery.",
      },
    ],
    outcomes: [
      {
        label: "2-4 day",
        description: "Variance window on arrivals via milestone tracking and proactive communications.",
      },
      {
        label: "18% duty savings",
        description: "Achieved via tariff engineering and bonded warehousing for key importers.",
      },
      {
        label: "Dedicated team",
        description: "Single point of contact integrated with your procurement and finance workflows.",
      },
    ],
    testimonials: [
      {
        quote:
          "The transparency on sailings and proactive customs planning removed 90% of the firefighting we used to do.",
        name: "Sandra L.",
        role: "Operations Director, Regional Distributor",
      },
    ],
    faqs: [
      {
        question: "Which ports do you consolidate from?",
        answer:
          "Primary lanes include Shenzhen, Ningbo, Panama City, and Miami. We also arrange sailings from Houston, Cartagena, and Kingston based on seasonality and demand.",
      },
      {
        question: "Do you manage customs and inland delivery?",
        answer:
          "Yes. Our bonded partners and brokerage teams handle clearance, duty optimization, and last-mile delivery aligned with your receiving windows.",
      },
    ],
  },
  {
    slug: "global-sourcing",
    name: "Global Sourcing",
    headline: "Factory-to-launch procurement with vetted suppliers and on-ground QA.",
    heroEyebrow: "Sourcing",
    heroKpi: "140+ vetted factories",
    summary:
      "Category experts handle RFQs, sampling, inspections, and compliance to supply retail, hospitality, and government contracts across the region.",
    sectors: ["Retail", "Hospitality", "Public Sector"],
    painPoints: [
      "Fragmented suppliers without Caribbean compliance or export readiness.",
      "Lack of USD payment rails and factory credit terms for emerging brands.",
      "No regional stocking strategy, leading to constant out-of-stock events.",
    ],
    solutionHighlights: [
      "Category leads for décor, FF&E, electronics, watersports, fleet, and renewable components.",
      "QA inspectors in Asia and LATAM deliver pre-shipment inspections and compliance audits.",
      "Inventory modeling and bonded warehousing for just-in-time island distribution.",
    ],
    process: [
      {
        step: "Discovery & RFQ",
        description: "Scope requirements, technical specs, compliance standards, and budget envelopes before supplier matchmaking.",
      },
      {
        step: "Sampling & Validation",
        description: "Coordinate samples, certification packages, and pilot runs with on-ground QA and third-party labs.",
      },
      {
        step: "Scale & Support",
        description: "Lock pricing, production cadence, and replenishment schedules with financing, logistics, and after-sales support.",
      },
    ],
    outcomes: [
      {
        label: "Vendor bench",
        description: "Plug into 140+ vetted factories across Asia, LATAM, and North America.",
      },
      {
        label: "Compliance ready",
        description: "Documentation stacks prepared for BVI, T&T, Barbados, and other regulatory regimes.",
      },
      {
        label: "Working capital",
        description: "Leverage supplier credit and structured payments to protect cash flow.",
      },
    ],
    testimonials: [
      {
        quote:
          "They built an entire sourcing program for our resort expansion covering décor, AV, and watersports experiences—all launched on schedule.",
        name: "Kendra R.",
        role: "VP Procurement, Hospitality Group",
      },
    ],
    faqs: [
      {
        question: "Do you provide factory financing?",
        answer:
          "We help negotiate supplier terms and pair you with partner financiers when larger production runs require capital support.",
      },
      {
        question: "Can you manage sustainability or ESG requirements?",
        answer:
          "Yes. We vet suppliers for ESG compliance, provide audit reports, and align sourcing with SDG-aligned procurement frameworks.",
      },
    ],
  },
  {
    slug: "banking-llc",
    name: "LLC & Payments Stack",
    headline: "USD-friendly LLC entities, banking, and PSP integrations in weeks, not months.",
    heroEyebrow: "Corporate Services",
    heroKpi: "21 day avg. go-live",
    summary:
      "Launch U.S. or EU entities, secure compliant banking, and connect Stripe, PayPal, or alternative PSPs tailored for Caribbean founders.",
    sectors: ["Founders", "Agencies", "Ecommerce"],
    painPoints: [
      "Rejected by banks due to region risk or lack of U.S. presence.",
      "Complex KYC/AML requirements and missing compliance documentation.",
      "Disconnected PSPs leading to settlement delays and FX losses.",
    ],
    solutionHighlights: [
      "Delaware, Wyoming, or UK entity formation with EIN and registered agent.",
      "Banking stack setup (Mercury, Relay, Wise) plus corporate cards and book-keeping templates.",
      "PSP onboarding (Stripe, PayPal, Payoneer) with compliance coaching and SOPs.",
    ],
    process: [
      {
        step: "Entity Blueprint",
        description: "Validate jurisdiction, ownership, and compliance requirements. Prepare documentation and incorporations.",
      },
      {
        step: "Bank & PSP Setup",
        description: "Submit applications, manage follow-ups, and configure settlement workflows with security best practices.",
      },
      {
        step: "Operational Handover",
        description: "Provide SOPs, accounting templates, and training for treasury and compliance teams.",
      },
    ],
    outcomes: [
      {
        label: "USD settlement",
        description: "Start collecting USD with compliant PSPs and banking rails.",
      },
      {
        label: "Audit-ready",
        description: "Entity books and compliance documentation packaged from day one.",
      },
      {
        label: "Advisor access",
        description: "Ongoing support for renewals, tax filings, and growth funding.",
      },
    ],
    testimonials: [
      {
        quote:
          "We went from zero U.S. presence to a fully compliant LLC, bank accounts, and Stripe gateway in three weeks.",
        name: "David F.",
        role: "Founder, LATAM SaaS",
      },
    ],
    faqs: [
      {
        question: "Which jurisdictions do you support?",
        answer:
          "Primarily Delaware, Wyoming, New Mexico, the UK, and select EU jurisdictions. We recommend the best fit based on your expansion goals.",
      },
      {
        question: "Do you handle bookkeeping or tax filings?",
        answer:
          "We onboard specialist partners and provide SOPs, but ongoing bookkeeping/tax filing can be retained with your chosen partner.",
      },
    ],
  },
  {
    slug: "events-brand-activation",
    name: "Events & Brand Activation",
    headline: "Experiential builds that convert investors, corporates, and travelers into advocates.",
    heroEyebrow: "Events",
    heroKpi: "4 countries in 90 days",
    summary:
      "Design, production, and execution for corporate events, government showcases, and tourism experiences across the region.",
    sectors: ["Corporate", "Government", "Tourism"],
    painPoints: [
      "Inconsistent production standards versus global benchmarks.",
      "Fragmented vendor management across décor, lighting, and fabrication.",
      "Limited post-event measurement and lead capture.",
    ],
    solutionHighlights: [
      "Concepting, CAD design, fabrication, and on-site execution from one team.",
      "Integrated AV, scenic, décor, and staffing with compliance and insurance handled.",
      "Post-event reporting on leads, conversions, and media amplification.",
    ],
    process: [
      {
        step: "Strategy & Creative",
        description:
          "Workshop objectives, audience, and KPIs. Deliver creative treatments, floor plans, and production schedules.",
      },
      {
        step: "Fabricate & Stage",
        description:
          "Source materials, fabricate scenic elements, secure permits, and run technical rehearsals with your team.",
      },
      {
        step: "Activate & Report",
        description:
          "Execute on-site with show-calling, staffing, lead capture, and debrief dashboards.",
      },
    ],
    outcomes: [
      {
        label: "Turnkey team",
        description: "One accountable crew covering creative, production, and sponsorship fulfillment.",
      },
      {
        label: "Global standards",
        description: "International-grade AVL, scenic, and compliance documentation.",
      },
      {
        label: "Lead analytics",
        description: "Capture and route leads into your CRM with automation-ready templates.",
      },
    ],
    testimonials: [
      {
        quote:
          "Our brand activation hit every KPI—attendance, media pickup, and partnerships—all while matching global quality standards.",
        name: "Roxanne J.",
        role: "Head of Brand, Financial Services",
      },
    ],
    faqs: [
      {
        question: "Do you handle international riders and compliance?",
        answer:
          "Yes. We manage technical riders, insurance, safety compliance, and vendor onboarding to align with multinational standards.",
      },
      {
        question: "Can you assist with sponsorship or partner integration?",
        answer:
          "We design sponsor-ready experiences and handle fulfillment, reporting, and amplification across channels.",
      },
    ],
  },
  {
    slug: "renewables-watersports",
    name: "Renewables & Watersports",
    headline: "Clean energy infrastructure and waterfront experiences that drive regional tourism and resilience.",
    heroEyebrow: "Renewables & Watersports",
    heroKpi: "Net-zero ready",
    summary:
      "Microgrid, solar, EV fleet, and watersports deployments built to withstand tropical environments and deliver high guest satisfaction.",
    sectors: ["Tourism", "Hospitality", "Public Sector"],
    painPoints: [
      "Limited technical partners who understand island infrastructure constraints.",
      "High maintenance costs and downtime for waterfront attractions.",
      "Sustainability targets without clear roadmap or financing.",
    ],
    solutionHighlights: [
      "Engineering partners for solar, storage, EV charging, and microgrid integration.",
      "Turnkey watersports franchise packages with training, maintenance, and revenue modeling.",
      "Financing advisory and grant sourcing for resiliency projects aligned with SDGs.",
    ],
    process: [
      {
        step: "Assess & Model",
        description:
          "Site and asset audit, demand modeling, and financial feasibility for energy and experiential investments.",
      },
      {
        step: "Deploy & Train",
        description:
          "Engineering drawings, procurement, installation, and staff certification covering safety and operations.",
      },
      {
        step: "Operate & Optimize",
        description:
          "Maintenance schedules, monitoring dashboards, and revenue optimization support with on-call specialists.",
      },
    ],
    outcomes: [
      {
        label: "Tourism uplift",
        description: "Watersports experiences that increase ADR and guest satisfaction scores.",
      },
      {
        label: "Resilience",
        description: "Microgrid-ready assets reducing downtime and diesel dependence.",
      },
      {
        label: "Financing pathways",
        description: "Access to ESG-aligned funding, grants, and franchise models with proven ROI.",
      },
    ],
    testimonials: [
      {
        quote:
          "Our resort added an AquaRush program and solar microgrid in one build—guest scores went up and energy costs dropped.",
        name: "Michelle A.",
        role: "General Manager, Caribbean Resort",
      },
    ],
    faqs: [
      {
        question: "Do you maintain the equipment after launch?",
        answer:
          "We provide preventative maintenance programs, spare parts stocking, and on-call technicians across the region.",
      },
      {
        question: "Can projects be financed?",
        answer:
          "Yes. We structure financing via partner lenders, manufacturer programs, or blended finance tied to ESG benchmarks.",
      },
    ],
  },
];

export const solutionFilters = [
  "Supply Chain",
  "Retail",
  "Industrial",
  "Hospitality",
  "Public Sector",
  "Founders",
  "Agencies",
  "Ecommerce",
  "Corporate",
  "Government",
  "Tourism",
];

export function getSolutionBySlug(slug: string) {
  return solutions.find((solution) => solution.slug === slug);
}
