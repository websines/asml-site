export type Partner = {
  name: string;
  category: string;
  description: string;
  href?: string;
};

export const partners: Partner[] = [
  {
    name: "Mercury Bank",
    category: "Banking Partner",
    description: "USD banking stack and treasury management for Caribbean founders launching U.S. entities.",
    href: "https://mercury.com",
  },
  {
    name: "Wise Business",
    category: "Payments & FX",
    description: "Cross-border accounts and FX solutions supporting multi-currency operations across LATAM and the Caribbean.",
    href: "https://wise.com",
  },
  {
    name: "Panama Transload Services",
    category: "Logistics Partner",
    description: "Bonded warehousing and consolidation hub providing multi-origin control in Panama City.",
  },
  {
    name: "AquaRush Training Institute",
    category: "Watersports Training",
    description: "Certifies operators on safety, maintenance, and guest experience for watersports franchises.",
  },
  {
    name: "Caribbean Development Fund",
    category: "Finance & Grants",
    description: "Supports renewable and resiliency projects with blended finance tied to SDG outcomes.",
  },
  {
    name: "Cloudflare",
    category: "Security & Performance",
    description: "CDN, WAF, and performance toolkit safeguarding A&S digital properties and lead funnels.",
    href: "https://cloudflare.com",
  },
];
