export type NavItem = {
  label: string;
  href: string;
  description?: string;
  badge?: string;
  children?: Array<NavItem>;
  external?: boolean;
};

export const solutionsNav: NavItem = {
  label: "Solutions",
  href: "/solutions",
  description:
    "Modular services that connect sourcing, logistics, corporate structure, and activation.",
  children: [
    {
      label: "Logistics & Freight",
      href: "/solutions/logistics",
      description: "LCL/FCL lanes from Shenzhen, Ningbo, Panama City, and Miami to the Caribbean.",
    },
    {
      label: "Global Sourcing",
      href: "/solutions/global-sourcing",
      description: "From RFQ to QC to delivery with vetted factory partners and on-ground teams.",
    },
    {
      label: "LLC & Payments Stack",
      href: "/solutions/banking-llc",
      description: "Entity setup, USD banking, and compliance for regional founders and operators.",
    },
    {
      label: "Events & Brand Activation",
      href: "/solutions/events-brand-activation",
      description: "Corporate showcases, décor, and experiential builds for global standards.",
    },
    {
      label: "Renewables & Watersports",
      href: "/solutions/renewables-watersports",
      description: "Microgrid, EV, and waterfront experiences engineered for tourism growth.",
    },
  ],
};

export const navItems: NavItem[] = [
  solutionsNav,
  {
    label: "Divisions",
    href: "/divisions",
    description:
      "Meet the specialist brands delivering sourcing, renewables, and experiences across the region.",
  },
  {
    label: "Catalog",
    href: "/catalog",
    description: "Download the Global Impact 2025 catalog after a quick opt-in.",
  },
  {
    label: "Case Studies",
    href: "/case-studies",
    description: "Proof of delivery across logistics, watersports, and corporate activations.",
  },
  {
    label: "About",
    href: "/about",
    description: "Our mission, leadership, and regional presence.",
  },
  {
    label: "Contact",
    href: "/contact",
    description: "Route your project and request a discovery call.",
  },
];
