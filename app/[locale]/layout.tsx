import type { ReactNode } from "react";
import { Suspense } from "react";
import { redirect } from "next/navigation";
import { SiteFooter, SiteHeader, WhatsAppChip } from "@/components/navigation/site-header";
import { BackgroundOrnament } from "@/components/ui/background";
import { TrackingManager } from "@/components/analytics/tracking-manager";
import { AnalyticsProvider } from "@/components/analytics/analytics-provider";
import { i18n, type Locale, isValidLocale } from "../../i18n.config";

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    redirect(`/${i18n.defaultLocale}`);
  }

  return (
    <Suspense fallback={null}>
      <AnalyticsProvider>
        <TrackingManager />
        <div className="relative min-h-dvh overflow-x-hidden" data-locale={locale}>
          <BackgroundOrnament />
          <SiteHeader locale={locale as Locale} />
          <main className="flex flex-col gap-24 pb-24 pt-20 lg:gap-32 lg:pb-32">{children}</main>
          <SiteFooter locale={locale as Locale} />
          <WhatsAppChip />
        </div>
      </AnalyticsProvider>
    </Suspense>
  );
}
