import React from 'react';
import { Metadata } from 'next';
import AboutUI from '../company/about/AboutUI';

export const metadata: Metadata = {
  title: "About Vinkura | India's Operational Intelligence Company",
  description: "We build the software that connects real government operations. Vinkura provides operational intelligence, workflow automation, and sovereign deployment infrastructure for law enforcement, district administration, and state departments across India.",
  keywords: [
    "about Vinkura", "Vinkura AI company", "operational intelligence company India",
    "India GovTech startup", "Palantir of India", "sovereign AI company",
    "public systems infrastructure India", "government technology company India",
  ],
  openGraph: {
    title: "About Vinkura | India's Operational Intelligence Company",
    description: "Building the software that connects real government operations across India. Intelligence, workflow, and sovereign deployment for public institutions.",
    url: "https://vinkura.in/about-us",
  },
  alternates: { canonical: "https://vinkura.in/about-us" },
};

export default function Page() {
  return <AboutUI />;
}
