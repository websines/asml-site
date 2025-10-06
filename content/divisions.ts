export type Division = {
  name: string;
  summary: string;
  focus: string[];
  href: string;
  location: string;
};

export const divisionDetails: Division[] = [
  {
    name: "Offgrid Caribbean",
    summary: "Renewable energy, microgrid, and resiliency builds for resorts, islands, and government agencies.",
    focus: ["Microgrids", "Solar + Storage", "EV Infrastructure"],
    href: "https://offgridcaribbean.org",
    location: "Bridgetown, Barbados",
  },
  {
    name: "Neptune's Playground",
    summary: "Designs and operates premium watersports experiences with turnkey staffing and marketing support.",
    focus: ["Watersports", "Guest Experience", "Marketing"],
    href: "https://neptunesplayground.com",
    location: "Oranjestad, Aruba",
  },
  {
    name: "AquaRush Franchise",
    summary: "Franchise-ready watersports packages covering training, supplier access, and on-going maintenance programs.",
    focus: ["Franchise Playbooks", "Training", "Supplier Sourcing"],
    href: "https://aquarushfranchise.com",
    location: "Montego Bay, Jamaica",
  },
  {
    name: "GlobalLLC.io",
    summary: "U.S. and EU entity formation, banking, and payments integration for Caribbean and LATAM founders.",
    focus: ["LLC Formation", "Banking", "Compliance"],
    href: "https://globalllc.io",
    location: "Miami, USA",
  },
  {
    name: "Lifeline Event Solutions",
    summary: "Events and brand activations with international-grade production, décor, and sponsorship management.",
    focus: ["Events", "Production", "Sponsorship"],
    href: "https://lifelineeventsolutions.com",
    location: "Kingston, Jamaica",
  },
  {
    name: "Trini Vehicle Imports",
    summary: "Electric and specialty vehicle imports optimized for duty savings, fleet deployment, and compliance.",
    focus: ["EVs", "Fleet Sourcing", "Customs"],
    href: "https://trinivehicleimports.co",
    location: "Port of Spain, Trinidad & Tobago",
  },
];
