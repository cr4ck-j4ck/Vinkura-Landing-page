import React from 'react';
import { Metadata } from 'next';
import AboutUI from './AboutUI';

export const metadata: Metadata = {
  title: "About Vinkura | India's Operational Intelligence Company",
  description: "We build the software that connects real government operations. Vinkura provides operational intelligence, workflow automation, and sovereign deployment infrastructure for law enforcement, district administration, and state departments across India.",
  keywords: [
    "about Vinkura", "Vinkura AI company", "operational intelligence India",
    "India GovTech startup", "Palantir of India", "sovereign AI company",
    "government technology company India", "public systems infrastructure",
  ],
  openGraph: {
    title: "About Vinkura | India's Operational Intelligence Company",
    description: "Building the software that connects real government operations across India.",
    url: "https://vinkura.in/company/about",
  },
  alternates: { canonical: "https://vinkura.in/company/about" },
};

export default function Page() {
  return <AboutUI />;
}
