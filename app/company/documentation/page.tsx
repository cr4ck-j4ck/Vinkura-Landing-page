import React from 'react';
import { Metadata } from 'next';
import DocumentationUI from './DocumentationUI';

export const metadata: Metadata = {
  title: "Documentation | Technical Resources for Vinkura AI Systems",
  description: "Access the technical foundation for Vinkura AI systems. Documentation on platform architecture, sovereign deployment, security hardening, and operational protocols for public safety and governance in India.",
  keywords: [
    "Vinkura documentation", "platform architecture docs", "sovereign deployment guide",
    "API documentation Vinkura", "GovTech specifications India",
    "sovereign AI documentation", "government software technical docs India",
  ],
  openGraph: {
    title: "Documentation | Technical Resources for Vinkura AI Systems",
    description: "Platform architecture, sovereign deployment, and security documentation for Vinkura AI systems.",
    url: "https://vinkura.in/company/documentation",
  },
  alternates: { canonical: "https://vinkura.in/company/documentation" },
};

export default function Page() {
  return <DocumentationUI />;
}
