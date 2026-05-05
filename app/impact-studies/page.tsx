import React from 'react';
import { Metadata } from 'next';
import ImpactUI from './ImpactUI';

export const metadata: Metadata = {
  title: "Impact Studies | Measurable Government Outcomes by Vinkura AI",
  description: "Beyond software delivery: measurable operational impact. Explore how Vinkura AI evaluates workflow efficiency, visibility, and accountability in high-stakes government deployments across Indian states.",
  keywords: [
    "Vinkura impact studies", "operational efficiency government India",
    "public sector metrics India", "government workflow ROI",
    "modernization impact India", "GovTech impact measurement",
    "police technology outcomes India",
  ],
  openGraph: {
    title: "Impact Studies | Measurable Government Outcomes by Vinkura AI",
    description: "Measurable operational impact from Vinkura AI deployments across Indian government institutions.",
    url: "https://vinkura.in/impact-studies",
  },
  alternates: { canonical: "https://vinkura.in/impact-studies" },
};

export default function Page() {
  return <ImpactUI />;
}
