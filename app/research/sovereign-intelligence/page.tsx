import React from 'react';
import { Metadata } from 'next';
import SovereignIntelligenceUI from './SovereignIntelligenceUI';

export const metadata: Metadata = {
  title: "Sovereign Intelligence Research | Vinkura AI",
  description: "Exploring the intersection of artificial intelligence and national sovereignty. How India can build indigenous operational intelligence infrastructure without relying on foreign data platforms.",
  keywords: [
    "sovereign intelligence India", "AI sovereignty research",
    "indigenous AI infrastructure India", "national security AI India",
    "Palantir alternative research", "sovereign data India",
  ],
  openGraph: {
    title: "Sovereign Intelligence Research | Vinkura AI",
    description: "Exploring the intersection of AI and national sovereignty for India's operational infrastructure.",
    url: "https://vinkura.in/research/sovereign-intelligence",
  },
  alternates: { canonical: "https://vinkura.in/research/sovereign-intelligence" },
};

export default function SovereignIntelligencePage() {
  return <SovereignIntelligenceUI />;
}
