"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LocaleToggle } from "@/components/navigation/locale-toggle";
import { withLocalePath, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import type { NavItem } from "./config";

type MobileNavigationProps = {
  navItems: NavItem[];
  locale: Locale;
};

export function MobileNavigation({ navItems, locale }: MobileNavigationProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-surface/80 text-foreground"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className={cn("relative block h-4 w-5", open && "rotate-45")}>
          <span
            className={cn(
              "absolute inset-x-0 top-0 h-[2px] rounded-full bg-foreground transition-all",
              open && "top-1/2 -mt-[1px] -rotate-90",
            )}
          />
          <span
            className={cn(
              "absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 rounded-full bg-foreground transition-all",
              open && "opacity-0",
            )}
          />
          <span
            className={cn(
              "absolute inset-x-0 bottom-0 h-[2px] rounded-full bg-foreground transition-all",
              open && "top-1/2 -mt-[1px]",
            )}
          />
        </span>
      </button>
      <div
        className={cn(
          "fixed inset-0 z-50 transform bg-black/50 backdrop-blur-sm transition-opacity",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setOpen(false)}
      />
      <aside
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-[85vw] max-w-sm transform bg-surface-strong px-6 pb-10 pt-20 shadow-[0_40px_120px_rgba(15,23,42,0.6)] transition duration-200",
          open ? "translate-x-0" : "translate-x-full",
        )}
        aria-hidden={!open}
      >
        <div className="flex flex-col gap-6">
          <div className="grid gap-4">
            {navItems.map((item) => (
              <div key={item.label} className="space-y-3">
                <Link
                  href={item.href}
                  className="text-lg font-semibold text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children ? (
                  <div className="grid gap-2 pl-4 text-sm text-muted">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block rounded-xl border border-transparent p-3 transition hover:border-border hover:bg-surface"
                        onClick={() => setOpen(false)}
                      >
                        <p className="font-medium text-foreground/90">{child.label}</p>
                        {child.description ? (
                          <p className="mt-1 text-xs leading-relaxed text-muted/80">
                            {child.description}
                          </p>
                        ) : null}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4 pt-4">
            <Button asChild size="md" onClick={() => setOpen(false)}>
              <Link href={withLocalePath(locale, "/book-call")}>Book a Discovery Call</Link>
            </Button>
            <LocaleToggle currentLocale={locale} />
          </div>
        </div>
      </aside>
    </div>
  );
}
