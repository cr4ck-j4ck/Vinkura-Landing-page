import React from 'react';
import { Metadata } from 'next';
import OrbitUI from './OrbitUI';

export const metadata: Metadata = {
  title: "Vinkura Orbit | Sovereign Deployment Infrastructure for India",
  description: "The operational foundation for sovereign deployment. Vinkura Orbit links official mission-logic to the tactical edge, enabling air-gapped operations and secure on-prem clusters for India's critical government and defence systems.",
  keywords: [
    "Vinkura Orbit", "sovereign deployment India", "edge computing government",
    "on-premise AI infrastructure India", "air-gapped deployment",
    "secure government cloud India", "mission critical infrastructure",
    "data residency India", "sovereign cloud India",
  ],
  openGraph: {
    title: "Vinkura Orbit | Sovereign Deployment Infrastructure for India",
    description: "Air-gapped, on-premise sovereign deployment infrastructure for India's critical government and defence systems.",
    url: "https://vinkura.in/products/orbit",
  },
  alternates: { canonical: "https://vinkura.in/products/orbit" },
};

export default function Page() {
  return <OrbitUI />;
}
