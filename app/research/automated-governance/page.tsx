import React from 'react';
import { Metadata } from 'next';
import AutomatedGovernanceUI from './AutomatedGovernanceUI';

export const metadata: Metadata = {
  title: "Automated Governance Research | Vinkura AI",
  description: "Systems for official accountability and process automation in Indian public governance. Research on how automation can strengthen procedural integrity without replacing human oversight.",
  keywords: [
    "automated governance India", "process automation government",
    "official accountability systems", "governance technology research",
    "public sector automation India", "digital governance India",
  ],
  openGraph: {
    title: "Automated Governance Research | Vinkura AI",
    description: "Systems for official accountability and process automation in Indian public governance.",
    url: "https://vinkura.in/research/automated-governance",
  },
  alternates: { canonical: "https://vinkura.in/research/automated-governance" },
};

export default function AutomatedGovernancePage() {
  return <AutomatedGovernanceUI />;
}
