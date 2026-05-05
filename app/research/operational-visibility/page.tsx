import React from 'react';
import { Metadata } from 'next';
import OperationalVisibilityUI from './OperationalVisibilityUI';

export const metadata: Metadata = {
  title: "Operational Visibility Research | Vinkura AI",
  description: "Measuring the impact of real-time coordination and geospatial intelligence on large-scale field deployments in India. Research on how operational visibility transforms government decision-making.",
  keywords: [
    "operational visibility research", "geospatial intelligence India",
    "field deployment coordination", "real-time government intelligence",
    "operational awareness India", "government decision intelligence",
  ],
  openGraph: {
    title: "Operational Visibility Research | Vinkura AI",
    description: "Measuring the impact of real-time coordination and geospatial intelligence on large-scale field deployments.",
    url: "https://vinkura.in/research/operational-visibility",
  },
  alternates: { canonical: "https://vinkura.in/research/operational-visibility" },
};

export default function OperationalVisibilityPage() {
  return <OperationalVisibilityUI />;
}
