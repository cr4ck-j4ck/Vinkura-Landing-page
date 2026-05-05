import React from 'react';
import { Metadata } from 'next';
import CaseStudyDetailUI from '../../../components/CaseStudyDetailUI';

export const metadata: Metadata = {
  title: "DDMS Case Study | State-Wide Police Duty Management in India",
  description: "Modernizing duty management for 100k+ Indian police personnel with real-time auditability and AI-directed roster discipline. How DDMS transformed state-wide personnel deployment.",
  keywords: ["DDMS case study", "police duty management India", "personnel deployment", "state police roster India"],
  openGraph: {
    title: "DDMS Case Study | State-Wide Police Duty Management in India",
    description: "Modernizing duty management for 100k+ personnel with real-time auditability and AI-directed roster discipline.",
    url: "https://vinkura.in/case-studies/ddms",
  },
  alternates: { canonical: "https://vinkura.in/case-studies/ddms" },
};

const data = {
  eyebrow: "Human Capital Management",
  title: "DDMS",
  desc: "AI-assisted personnel deployment for Indian police — replacing paper boards and human bias with data-driven, auditable roster optimization.",
  challenge: "Tens of thousands of police personnel managed via paper boards by Reserve Inspectors. Allocation riddled with human bias — competent officers chronically over-deployed, others unutilized. No mechanism to evaluate legal duty-hour limits. During emergencies, commanders had zero visibility into who was available or what skills they carried. Past deployment history was completely unauditable.",
  solution: "DDMS implements constrained multi-objective optimization. The system ingests force size, leave/sick statuses, skill-tags (Riot Control, VIP Security, Cyber), and duty requirements. It evaluates legal constraints and proximity, then generates live conflict-free shift rosters pushed directly to mobile units.",
  outcome: "In Bareilly, duty allocation shifted from subjective decisions to data-driven optimization. Commanders gained a unified heatmap of deployment density and skill-distribution. Absenteeism dropped once an immutable digital ledger made every assignment permanently queryable.",
  img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000",
  points: [
    { h: "Optimization", p: "Allocation engine balances skill requirements, legal duty-hour limits, proximity, and fatigue indices simultaneously. Mathematically defensible deployment replacing memory-based decisions." },
    { h: "Supervision", p: "Real-time dashboards surface unit readiness, deployment density, and skill-gap analysis. Commanders identify under-covered zones within seconds." },
    { h: "Integrity", p: "Every duty assignment recorded as an immutable ledger entry with timestamp and authorizing officer. Eliminates post-hoc manipulation of deployment records." },
    { h: "Regulatory Compliance", p: "Legal mandates for max duty hours, rest intervals, and rotation enforced as hard constraints. Violations flagged before they occur, not discovered after." }
  ]
};


export default function DDMSPage() {
  return <CaseStudyDetailUI data={data} />;
}
