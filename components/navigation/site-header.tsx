import Link from "next/link";
import { navItems, solutionsNav, type NavItem } from "./config";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { MobileNavigation } from "@/components/navigation/mobile-navigation";
import { LocaleToggle } from "@/components/navigation/locale-toggle";
import { withLocalePath, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
      {...props}
    >
      <path d="M4.25 7.75L10 13.5l5.75-5.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DesktopNavigation({ items }: { items: NavItem[] }) {
  return (
    <nav className="hidden items-center gap-6 text-sm font-medium text-muted lg:flex">
      {items.map((item) =>
        item.children ? (
          <SolutionsFlyout key={item.label} item={item} />
        ) : (
          <NavLink key={item.label} item={item} />
        ),
      )}
    </nav>
  );
}

function NavLink({ item }: { item: NavItem }) {
  return (
    <Link
      href={item.href}
      className="relative inline-flex items-center gap-1 transition hover:text-foreground"
    >
      {item.label}
      {item.badge ? (
        <span className="rounded-full bg-secondary/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-secondary">
          {item.badge}
        </span>
      ) : null}
    </Link>
  );
}

function SolutionsFlyout({ item }: { item: NavItem }) {
  return (
    <div className="group relative inline-flex">
      <Link
        href={item.href}
        className="inline-flex items-center gap-1 transition hover:text-foreground"
      >
        {item.label}
        <ChevronDownIcon className="h-3 w-3 transition duration-150 group-hover:rotate-180" />
      </Link>
      <div className="invisible absolute left-1/2 top-full z-40 mt-3 w-[520px] -translate-x-1/2 scale-95 rounded-3xl border border-border/50 bg-surface-strong/95 p-6 opacity-0 shadow-[0px_40px_120px_rgba(15,23,42,0.45)] backdrop-blur-xl transition-all duration-200 group-hover:visible group-hover:scale-100 group-hover:opacity-100">
        <div className="grid gap-4">
          {item.children?.map((child) => (
            <Link
              key={child.label}
              href={child.href}
              className="flex items-start gap-3 rounded-2xl border border-transparent p-4 transition hover:border-border hover:bg-surface"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
                {child.label
                  .split(" ")
                  .map((word) => word[0])
                  .join("")
                  .slice(0, 3)}
              </div>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-foreground">{child.label}</p>
                {child.description ? (
                  <p className="text-xs leading-relaxed text-muted">{child.description}</p>
                ) : null}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function localizeNavItem(item: NavItem, locale: Locale): NavItem {
  return {
    ...item,
    href: withLocalePath(locale, item.href),
    children: item.children?.map((child) => ({
      ...child,
      href: withLocalePath(locale, child.href),
    })),
  };
}

export function SiteHeader({ locale }: { locale: Locale }) {
  const localizedNavItems = navItems.map((item) => localizeNavItem(item, locale));
  const localizedSolutionsNav = localizeNavItem(solutionsNav, locale);
  const mobileNavItems = [
    localizedSolutionsNav,
    ...localizedNavItems.filter((item) => item.label !== solutionsNav.label),
  ];

  return (
    <header className="relative sticky top-0 z-50 border-b border-border/30 bg-transparent">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-surface/95 via-surface/80 to-transparent backdrop-blur-xl" />
      <div className="container-xl relative z-10 flex h-20 items-center justify-between">
        <Logo locale={locale} />
        <DesktopNavigation items={localizedNavItems} />
        <div className="hidden items-center gap-4 lg:flex">
          <LocaleToggle currentLocale={locale} />
          <Button asChild size="sm" className="shadow-lg shadow-primary/30">
            <Link href={withLocalePath(locale, "/book-call")}>Book a Discovery Call</Link>
          </Button>
        </div>
        <MobileNavigation navItems={mobileNavItems} locale={locale} />
      </div>
    </header>
  );
}

export function SiteFooter({ locale }: { locale: Locale }) {
  const year = new Date().getFullYear();
  const localizedNavItems = navItems.map((item) => localizeNavItem(item, locale));

  return (
    <footer className="relative mt-auto border-t border-border/30 bg-transparent py-12">
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-surface/90 via-surface/80 to-transparent backdrop-blur-xl" />
      <div className="container-xl grid gap-10 md:grid-cols-4">
        <div className="space-y-4">
          <Logo locale={locale} />
          <p className="text-sm leading-relaxed text-muted">
            From factory to franchise—structures, shipping, renewables, and experiences engineered for Caribbean and LATAM growth.
          </p>
        </div>
        <div className="grid gap-2 text-sm text-muted">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted/70">
            Navigation
          </p>
          {localizedNavItems.map((item) => (
            <Link key={item.label} href={item.href} className="transition hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </div>
        <div className="grid gap-2 text-sm text-muted">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted/70">
            Divisions
          </p>
          <Link href="https://offgridcaribbean.org" className="transition hover:text-foreground" rel="noreferrer" target="_blank">
            Offgrid Caribbean
          </Link>
          <Link href="https://neptunesplayground.com" className="transition hover:text-foreground" rel="noreferrer" target="_blank">
            Neptune&apos;s Playground
          </Link>
          <Link href="https://aquarushfranchise.com" className="transition hover:text-foreground" rel="noreferrer" target="_blank">
            AquaRush Franchise
          </Link>
          <Link href="https://globalllc.io" className="transition hover:text-foreground" rel="noreferrer" target="_blank">
            GlobalLLC.io
          </Link>
          <Link href="https://lifelineeventsolutions.com" className="transition hover:text-foreground" rel="noreferrer" target="_blank">
            Lifeline Event Solutions
          </Link>
          <Link href="https://trinivehicleimports.co" className="transition hover:text-foreground" rel="noreferrer" target="_blank">
            Trini Vehicle Imports
          </Link>
        </div>
        <div className="space-y-4 text-sm text-muted">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted/70">
            Contact
          </p>
          <p className="text-sm leading-relaxed text-muted">
            WhatsApp: <a className="text-foreground" href="https://wa.me/18682171111" target="_blank" rel="noreferrer">+1 (868) 217-1111</a>
          </p>
          <p className="text-sm leading-relaxed text-muted">
            Email: <a className="text-foreground" href="mailto:hello@aslmllc.net">hello@aslmllc.net</a>
          </p>
          <div className="flex gap-3 text-xs uppercase tracking-[0.24em] text-muted/80">
            <Link href={withLocalePath(locale, "/legal/privacy")} className="transition hover:text-foreground">
              Privacy
            </Link>
            <span aria-hidden>•</span>
            <Link href={withLocalePath(locale, "/legal/terms")} className="transition hover:text-foreground">
              Terms
            </Link>
          </div>
        </div>
      </div>
      <div className="container-xl mt-10 flex flex-col items-center gap-2 border-t border-border/20 pt-6 text-[12px] uppercase tracking-[0.24em] text-muted/70 md:flex-row md:justify-between">
        <span>© {year} A&S Logistique Mondiale Ltd LLC. All rights reserved.</span>
        <span>Powered by the Hummingbird Collective</span>
      </div>
    </footer>
  );
}

export function WhatsAppChip() {
  return (
    <Link
      href="https://wa.me/18682171111"
      target="_blank"
      rel="noreferrer"
      className={cn(
        "fixed bottom-6 right-6 z-40 flex items-center gap-3 rounded-full border border-primary/40 bg-surface/90 px-5 py-3 text-sm font-semibold text-foreground shadow-xl shadow-primary/20 backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(249,115,22,0.35)]",
        "lg:bottom-8 lg:right-8",
      )}
    >
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">WA</span>
      <span className="hidden sm:inline">Chat with A&S</span>
    </Link>
  );
}
