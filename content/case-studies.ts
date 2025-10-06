type Metric = {
  label: string;
  value: string;
  description?: string;
};

type CaseStudySection = {
  title: string;
  body: string;
};

type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  industry: string;
  country: string;
  services: string[];
  heroMetric: Metric;
  overview: string;
  challenge: CaseStudySection;
  approach: CaseStudySection;
  outcome: CaseStudySection;
  metrics: Metric[];
  testimonial: {
    quote: string;
    name: string;
    role: string;
  };
  callToAction: {
    label: string;
    href: string;
  };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "lcl-fcl-miami-pos",
    title: "Miami → Port of Spain Logistics Upgrade",
    subtitle: "Regional distributor stabilized LCL flow and reduced demurrage fees across three islands.",
    industry: "Retail Distribution",
    country: "Trinidad & Tobago",
    services: ["Logistics", "Customs", "Sourcing"],
    heroMetric: {
      label: "Inbound lead time",
      value: "42% faster",
      description: "Reduced transit variance with dedicated space and customs playbooks.",
    },
    overview:
      "A regional distributor struggled with delayed shipments, mounting storage fees, and fragmented communication between freight forwarders and customs brokers.",
    challenge: {
      title: "Fragmented partners and mounting costs",
      body: "Vendors were shipping without consolidated planning, leading to partial loads and inconsistent customs documentation. The distributor faced demurrage fees and OSD claims every month.",
    },
    approach: {
      title: "Dedicated lane management",
      body: "A&S established weekly origin consolidation in Miami, implemented pre-shipment documentation QA, and embedded a customs specialist within the client team for live clearance support.",
    },
    outcome: {
      title: "Predictable flow, lower landed costs",
      body: "Lead time variance shrank to a 2-4 day window, demurrage fees dropped 70%, and the distributor reallocated staff to growth initiatives instead of crisis control.",
    },
    metrics: [
      { label: "Demurrage Fees", value: "-70%", description: "Cost savings within first 90 days." },
      { label: "Fill Rate", value: "98%", description: "Inventory availability across key SKUs." },
      { label: "Partner Satisfaction", value: "9.4/10", description: "Surveyed by client leadership." },
    ],
    testimonial: {
      quote:
        "We finally have predictable arrivals and a single accountable partner instead of four vendors pointing fingers.",
      name: "Sandra L.",
      role: "Operations Director",
    },
    callToAction: {
      label: "Explore logistics solutions",
      href: "/solutions/logistics",
    },
  },
  {
    slug: "watersports-franchise-rollout",
    title: "Resort Watersports Franchise Rollout",
    subtitle: "Four island resorts launched AquaRush programs in 90 days with full training and marketing support.",
    industry: "Hospitality",
    country: "Barbados, Saint Lucia, Antigua",
    services: ["Watersports", "Training", "Marketing"],
    heroMetric: {
      label: "Resorts live",
      value: "4 launches",
      description: "Supported by 360° franchise playbook and supplier access.",
    },
    overview:
      "A resort group wanted to differentiate waterfront experiences, but lacked equipment sourcing, training, and marketing capabilities to operate at scale.",
    challenge: {
      title: "No turnkey franchise model",
      body: "Each resort managed ad-hoc watersports vendors with inconsistent service levels, safety protocols, and brand standards.",
    },
    approach: {
      title: "AquaRush franchise deployment",
      body: "A&S sourced equipment, trained local teams, deployed booking technology, and launched integrated marketing campaigns across digital and on-property channels.",
    },
    outcome: {
      title: "Revenue lift & guest satisfaction",
      body: "Average daily revenue increased 38% while post-stay surveys recorded a 12-point lift in guest satisfaction for waterfront experiences.",
    },
    metrics: [
      { label: "Revenue Lift", value: "+38%", description: "Measured vs. pre-launch waterfront revenue." },
      { label: "Guest Satisfaction", value: "+12 pts", description: "Net promoter shift in post-stay surveys." },
      { label: "Launch Timeline", value: "90 days", description: "From contract to revenue across four islands." },
    ],
    testimonial: {
      quote:
        "A&S delivered a franchise-quality experience with training, marketing, and supplier backing we could never build alone.",
      name: "Melissa G.",
      role: "Group General Manager",
    },
    callToAction: {
      label: "See renewables & watersports",
      href: "/solutions/renewables-watersports",
    },
  },
  {
    slug: "llc-payments-stack",
    title: "LLC + Payments Stack in 21 Days",
    subtitle: "Caribbean SaaS venture launched USD billing with compliant banking and PSP integrations.",
    industry: "Technology",
    country: "Remote",
    services: ["LLC", "Banking", "Payments"],
    heroMetric: {
      label: "Go-live",
      value: "21 days",
      description: "From discovery to first USD settlement.",
    },
    overview:
      "A founder needed to incorporate in the U.S., secure USD banking, and integrate Stripe to collect subscriptions from global customers.",
    challenge: {
      title: "Rejections & compliance hurdles",
      body: "Traditional banks declined the application due to regional risk. Stripe required a compliant U.S. entity, EIN, and validated bank account before activation.",
    },
    approach: {
      title: "Structured incorporation sprint",
      body: "A&S formed a Delaware LLC, secured EIN, opened Mercury + Wise accounts, and shepherded Stripe onboarding with compliance narratives.",
    },
    outcome: {
      title: "USD settlement & investor-ready ops",
      body: "First Stripe payout hit within 21 days. The founder onboarded investors with clean governance docs, accounting automations, and compliance SOPs.",
    },
    metrics: [
      { label: "Stripe Approval", value: "5 days", description: "Submitted with curated compliance package." },
      { label: "Banking Stack", value: "Mercury + Wise", description: "Treasury + FX ready on day one." },
      { label: "Investor Confidence", value: "High", description: "Seed round closed post-launch." },
    ],
    testimonial: {
      quote:
        "Their playbooks made incorporation, banking, and Stripe onboarding painless—we were revenue-ready inside of three weeks.",
      name: "David F.",
      role: "Founder",
    },
    callToAction: {
      label: "Explore LLC & payments",
      href: "/solutions/banking-llc",
    },
  },
];

export const caseStudyFilters = {
  industry: ["Retail Distribution", "Hospitality", "Technology", "Government", "Events"],
  service: ["Logistics", "Customs", "Sourcing", "Watersports", "Training", "Marketing", "LLC", "Banking", "Payments"],
  country: ["Trinidad & Tobago", "Barbados", "Saint Lucia", "Antigua", "Remote"],
};

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}

export type { CaseStudy };
