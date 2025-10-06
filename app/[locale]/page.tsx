import { Hero } from "@/components/home/hero";
import { Pillars } from "@/components/home/pillars";
import { DivisionCarousel } from "@/components/home/divisions";
import { CaseStudiesHighlight } from "@/components/home/case-studies-highlight";
import { LeadMagnetBlock } from "@/components/home/lead-magnet";
import { Testimonials } from "@/components/home/testimonials";
import { RegionsMap } from "@/components/home/regions-map";
import { ContactCTA } from "@/components/home/contact-cta";
import type { Locale } from "../../i18n.config";

type HomePageProps = {
  params: Promise<{ locale: Locale }>;
};

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  return (
    <>
      <Hero locale={locale} />
      <Pillars locale={locale} />
      <DivisionCarousel />
      <CaseStudiesHighlight locale={locale} />
      <LeadMagnetBlock locale={locale} />
      <Testimonials />
      <RegionsMap />
      <ContactCTA locale={locale} />
    </>
  );
}
