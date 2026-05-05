import { Metadata } from 'next';
import Hero from '@/components/Hero';
import AtAGlance from '@/components/AtAGlance';
import FeaturedSection from '@/components/FeaturedSection';
import SoftwareList from '@/components/SoftwareList';
import ResearchSection from '@/components/ResearchSection';
import Partners from '@/components/Partners';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: "VINKURA | India's Operational Intelligence Platform — The Palantir for Indian Government",
  description: "Vinkura is India's sovereign operational intelligence infrastructure. We turn scattered government records into actionable intelligence for law enforcement, district administration, and state departments. Purpose-built data integration, decision intelligence, and workflow automation for India's public systems.",
  keywords: [
    "Vinkura", "Vinkura AI", "Palantir for India", "Palantir alternative India",
    "India Palantir", "Indian Palantir", "operational intelligence India",
    "government data platform India", "sovereign AI India",
    "law enforcement technology India", "police software India",
    "public safety platform India", "decision intelligence government",
    "data integration India government", "GovTech India startup",
    "district administration software", "state government technology India",
    "Indian defence intelligence", "homeland security India software",
    "government workflow automation India",
  ],
  openGraph: {
    title: "VINKURA | India's Operational Intelligence Platform",
    description: "India's sovereign operational intelligence infrastructure. Turning scattered government records into actionable intelligence for law enforcement, governance, and national security.",
    url: "https://vinkura.in",
    type: "website",
  },
  alternates: {
    canonical: "https://vinkura.in",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedSection />
      <SoftwareList />
      <ResearchSection />
      <Partners />
      <CTA />
    </main>
  );
}
