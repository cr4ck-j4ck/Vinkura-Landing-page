import React from 'react';
import { Metadata } from 'next';
import VinkuraCoreUI from './VinkuraCoreUI';

export const metadata: Metadata = {
  title: "Vinkura Core | The Operational Backbone for India's Public Systems",
  description: "Unify workflows, records, and accountability across your entire organization. Vinkura Core is the operating system for real-world government execution — India's sovereign data integration platform comparable to Palantir Foundry, purpose-built for Indian institutions.",
  keywords: [
    "Vinkura Core", "operating system government India", "public systems platform",
    "government data integration India", "Palantir Foundry alternative India",
    "sovereign infrastructure India", "workflow automation government",
    "data orchestration public sector", "enterprise government software India",
  ],
  openGraph: {
    title: "Vinkura Core | The Operational Backbone for India's Public Systems",
    description: "The operating system for real-world government execution. India's sovereign data integration platform for public institutions.",
    url: "https://vinkura.in/products/vinkura-core",
  },
  alternates: { canonical: "https://vinkura.in/products/vinkura-core" },
};

export default function Page() {
  return <VinkuraCoreUI />;
}
