import React from 'react';
import { Metadata } from 'next';
import SecurityUI from './SecurityUI';

export const metadata: Metadata = {
  title: "Security & Trust | Vinkura AI Sovereign Security Standards",
  description: "Security is not a feature — it is a deployment condition. Explore Vinkura AI's approach to access control, auditability, sovereign data residency, and infrastructure trust. Built for India's highest-stakes government environments.",
  keywords: [
    "Vinkura security", "sovereign trust India", "data encryption government India",
    "auditability government software", "RBAC government India",
    "public sector security standards", "sovereign data residency India",
    "government cybersecurity India",
  ],
  openGraph: {
    title: "Security & Trust | Vinkura AI Sovereign Standards",
    description: "Access control, auditability, and sovereign infrastructure trust for India's highest-stakes government environments.",
    url: "https://vinkura.in/company/security",
  },
  alternates: { canonical: "https://vinkura.in/company/security" },
};

export default function Page() {
  return <SecurityUI />;
}
