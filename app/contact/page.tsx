import React from 'react';
import { Metadata } from 'next';
import ContactUI from './ContactUI';

export const metadata: Metadata = {
  title: "Contact Vinkura | Request a Briefing or Demo",
  description: "Get in touch with Vinkura AI for operational intelligence deployment, government technology consultation, or a product briefing. India's sovereign data integration platform for law enforcement and public administration.",
  keywords: [
    "contact Vinkura", "Vinkura demo", "request briefing Vinkura",
    "government technology India contact", "Palantir alternative India contact",
    "operational intelligence consultation", "public safety software India",
    "sovereign AI deployment India",
  ],
  openGraph: {
    title: "Contact Vinkura | Request a Briefing or Demo",
    description: "Get in touch with Vinkura AI for operational intelligence deployment, government technology consultation, or a product briefing.",
    url: "https://vinkura.in/contact",
  },
  alternates: {
    canonical: "https://vinkura.in/contact",
  },
};

export default function Page() {
  return <ContactUI />;
}
