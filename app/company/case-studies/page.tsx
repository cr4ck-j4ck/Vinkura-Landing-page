import React from 'react';
import { Metadata } from 'next';
import CaseStudiesUI from './CaseStudiesUI';

export const metadata: Metadata = {
  title: "Case Studies | Vinkura AI Real-World Government Deployments in India",
  description: "Real deployments. Real constraints. Explore how Vinkura AI is modernizing India's public systems through DDMS, E-Maalkhana, E-CTC, Trinetra, and integrated command intelligence. Proven operational impact across Indian state police and administration.",
  keywords: [
    "Vinkura case studies", "DDMS deployment", "E-Maalkhana case study",
    "government IT modernization India", "mission critical software India",
    "police technology deployment India", "public sector digital transformation India",
    "operational intelligence outcomes",
  ],
  openGraph: {
    title: "Case Studies | Vinkura AI Real-World Government Deployments in India",
    description: "Real deployments, real constraints. How Vinkura AI is modernizing India's public systems with proven operational impact.",
    url: "https://vinkura.in/company/case-studies",
  },
  alternates: { canonical: "https://vinkura.in/company/case-studies" },
};

export default function Page() {
  return <CaseStudiesUI />;
}
