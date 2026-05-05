import React from 'react';
import { Metadata } from 'next';
import CareersUI from './CareersUI';

export const metadata: Metadata = {
  title: "Careers at Vinkura | Build India's Operational Intelligence Infrastructure",
  description: "Join Vinkura to build the software infrastructure for India's public safety, governance, and sovereign operations. Work on high-consequence systems deployed across Indian states that matter in the real world.",
  keywords: [
    "Vinkura careers", "founding engineer India", "GovTech jobs India",
    "operational software jobs", "sovereign AI jobs India",
    "defence tech jobs India", "startup jobs India AI",
    "government technology careers India",
  ],
  openGraph: {
    title: "Careers at Vinkura | Build India's Operational Intelligence Infrastructure",
    description: "Join Vinkura to build software infrastructure for India's public safety and sovereign operations.",
    url: "https://vinkura.in/company/careers",
  },
  alternates: { canonical: "https://vinkura.in/company/careers" },
};

export default function Page() {
  return <CareersUI />;
}
