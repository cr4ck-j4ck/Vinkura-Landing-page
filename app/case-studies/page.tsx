import React from 'react';
import { Metadata } from 'next';
import CaseStudiesUI from '../company/case-studies/CaseStudiesUI';

export const metadata: Metadata = {
  title: "Case Studies | Vinkura AI Government Deployments in India",
  description: "Real-world official deployments, constraints, and outcomes. Explore how Vinkura AI transforms public safety and governance across Indian states — from J&K Police field coordination to state-wide duty management systems.",
  keywords: [
    "Vinkura case studies", "government deployment India",
    "police technology case study India", "public safety outcomes",
    "operational intelligence deployment", "GovTech India results",
    "J&K Police technology", "UP Police technology",
  ],
  openGraph: {
    title: "Case Studies | Vinkura AI Government Deployments in India",
    description: "Real-world official deployments and outcomes. How Vinkura AI transforms public safety and governance across Indian states.",
    url: "https://vinkura.in/case-studies",
  },
  alternates: { canonical: "https://vinkura.in/case-studies" },
};

export default function Page() {
  return <CaseStudiesUI />;
}
