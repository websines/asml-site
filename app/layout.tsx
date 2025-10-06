import type { Metadata } from "next";
import { Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const display = Manrope({
  variable: "--font-display",
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aslmllc.net"),
  title: {
    default: "A&S Global Impact 2025",
    template: "%s | A&S Global Impact 2025",
  },
  description:
    "Global sourcing, logistics, LLC infrastructure, and experiential divisions serving the Caribbean and LATAM.",
  authors: [{ name: "A&S Logistique Mondiale Ltd LLC" }],
  keywords: [
    "Caribbean logistics",
    "global sourcing",
    "watersports franchise",
    "LLC setup",
    "A&S Global Impact",
  ],
  openGraph: {
    type: "website",
    title: "A&S Global Impact 2025",
    description:
      "From factory to franchise—structures, shipping, and scale under one roof for the Caribbean and LATAM.",
    url: "https://www.aslmllc.net",
    siteName: "A&S Global Impact",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "A&S Global Impact 2025",
    description:
      "Explore sourcing, logistics, renewables, and franchise solutions tailored for the Caribbean and LATAM.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${display.variable} ${mono.variable} font-sans antialiased bg-surface text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
