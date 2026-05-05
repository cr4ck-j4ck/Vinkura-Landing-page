import React from 'react';
import { Metadata } from 'next';
import SentinelUI from './SentinelUI';

export const metadata: Metadata = {
  title: "Vinkura Sentinel | Decision Intelligence for Public Safety in India",
  description: "The operational intelligence layer for public safety and official command. Vinkura Sentinel unifies records, workflows, and field signals into a shared operating context — India's answer to Palantir Gotham for law enforcement and national security.",
  keywords: [
    "Vinkura Sentinel", "decision intelligence India", "public safety AI India",
    "command intelligence platform", "Palantir Gotham alternative India",
    "law enforcement intelligence India", "operational context platform",
    "police command center software", "crime intelligence India",
  ],
  openGraph: {
    title: "Vinkura Sentinel | Decision Intelligence for Public Safety in India",
    description: "India's operational intelligence layer for public safety. Unifying records, workflows, and field signals for mission-critical execution.",
    url: "https://vinkura.in/products/sentinel",
  },
  alternates: { canonical: "https://vinkura.in/products/sentinel" },
};

export default function Page() {
  return <SentinelUI />;
}
