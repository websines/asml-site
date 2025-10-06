export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  location: string;
  division: string;
};

export const team: TeamMember[] = [
  {
    name: "Anjali Persaud",
    role: "Managing Director",
    location: "Port of Spain, Trinidad & Tobago",
    division: "A&S Global Impact",
    bio: "Leads the collective across sourcing, logistics, and experiential divisions with two decades of Caribbean expansion expertise.",
  },
  {
    name: "Marcelo Duarte",
    role: "Head of Logistics & Sourcing",
    location: "Panama City, Panama",
    division: "Global Freight",
    bio: "Oversees LCL/FCL lanes from Asia and LATAM, driving supplier performance, QC, and customs optimization.",
  },
  {
    name: "Isabella Chen",
    role: "Director of Supplier Development",
    location: "Shenzhen, China",
    division: "Sourcing",
    bio: "Connects Caribbean buyers with vetted factories, manages sampling, ESG audits, and production oversight.",
  },
  {
    name: "Christopher James",
    role: "Principal, Lifeline Event Solutions",
    location: "Kingston, Jamaica",
    division: "Experiential",
    bio: "Architects events and brand activations with global production standards and multi-market capabilities.",
  },
  {
    name: "Lucía Martínez",
    role: "Head of Renewables & Watersports",
    location: "Oranjestad, Aruba",
    division: "Neptune's Playground",
    bio: "Designs resilient waterfront experiences, renewable integrations, and franchise rollouts across the region.",
  },
  {
    name: "Darren Blake",
    role: "Director of Corporate Structuring",
    location: "Miami, USA",
    division: "GlobalLLC.io",
    bio: "Guides founders through jurisdiction selection, banking, compliance, and PSP onboarding.",
  },
];
