import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vinkura.in"),
  title: {
    default: "VINKURA | India's Operational Intelligence Infrastructure",
    template: "%s | Vinkura AI",
  },
  description: "Vinkura builds sovereign operational intelligence for India's public systems — law enforcement, district administration, and state departments. The data integration and decision intelligence platform purpose-built for Indian government operations.",
  keywords: [
    "Vinkura", "Vinkura AI", "operational intelligence India",
    "Palantir alternative India", "Palantir for India", "India Palantir",
    "sovereign AI India", "government data platform India",
    "public safety intelligence India", "law enforcement software India",
    "GovTech India", "police technology India", "district administration software",
    "data integration government India", "decision intelligence India",
    "operational infrastructure India", "Indian defence technology",
    "state government software India", "administrative workflow India",
    "sovereign data platform", "mission critical software India",
  ],
  authors: [{ name: "Vinkura AI", url: "https://vinkura.in" }],
  creator: "Vinkura AI",
  publisher: "Vinkura AI",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/VINKURA.png",
    apple: "/VINKURA.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://vinkura.in",
    siteName: "Vinkura AI",
    title: "VINKURA | India's Operational Intelligence Infrastructure",
    description: "Sovereign operational intelligence for India's public systems. The data integration and decision intelligence platform built for law enforcement, governance, and national security.",
    images: [
      {
        url: "/og_image.png",
        width: 1200,
        height: 630,
        alt: "Vinkura AI — Operational Intelligence for India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VINKURA | India's Operational Intelligence Infrastructure",
    description: "Sovereign operational intelligence for India's public systems. Data integration and decision intelligence built for law enforcement and governance.",
    images: ["/og_image.png"],
    creator: "@vinkuraai",
  },
  alternates: {
    canonical: "https://vinkura.in",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://vinkura.in/#organization",
        name: "Vinkura AI",
        url: "https://vinkura.in",
        logo: {
          "@type": "ImageObject",
          url: "https://vinkura.in/VINKURA.png",
        },
        description: "Vinkura builds sovereign operational intelligence infrastructure for India's public systems — law enforcement, district administration, and state departments. India's answer to Palantir for government operations.",
        foundingDate: "2024",
        foundingLocation: {
          "@type": "Place",
          name: "India",
        },
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        knowsAbout: [
          "Operational Intelligence",
          "Sovereign AI Infrastructure",
          "Public Safety Technology",
          "Government Data Integration",
          "Law Enforcement Software",
          "Decision Intelligence",
          "Administrative Workflow Automation",
        ],
        sameAs: [
          "https://www.linkedin.com/company/vinkura/",
          "https://huggingface.co/VinkuraAI",
          "https://www.youtube.com/",
          "https://github.com/vinkuraAI",
          "https://instagram.com/Vinkura.IN",
          "https://x.com/vinkuraAI"
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://vinkura.in/#website",
        url: "https://vinkura.in",
        name: "Vinkura AI",
        publisher: { "@id": "https://vinkura.in/#organization" },
        description: "India's operational intelligence infrastructure for public systems and sovereign governance.",
      },
      {
        "@type": "SoftwareApplication",
        name: "Vinkura Core",
        applicationCategory: "GovernmentApplication",
        operatingSystem: "Web, On-Premise",
        description: "The operational backbone for India's public systems — unifying workflows, records, and accountability across government organizations.",
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStoreOnly",
          areaServed: { "@type": "Country", name: "India" },
        },
        author: { "@id": "https://vinkura.in/#organization" },
      },
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
