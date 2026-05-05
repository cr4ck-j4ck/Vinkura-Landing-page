import React from 'react';
import { Metadata } from 'next';
import CaseStudyDetailUI from '../../../components/CaseStudyDetailUI';

export const metadata: Metadata = {
  title: "Forge Case Study | Workflow Orchestration for Indian Government",
  description: "AI-driven workflow orchestration for complex official processes and cross-departmental coordination in Indian government institutions. How Forge automated manual handoffs across departments.",
  keywords: ["Forge case study", "workflow orchestration India", "government process automation", "cross-departmental coordination India"],
  openGraph: {
    title: "Forge Case Study | Workflow Orchestration for Indian Government",
    description: "AI-driven workflow orchestration for complex official processes and cross-departmental coordination.",
    url: "https://vinkura.in/case-studies/forge",
  },
  alternates: { canonical: "https://vinkura.in/case-studies/forge" },
};

const data = {
  eyebrow: "Operational Orchestration",
  title: "Forge",
  desc: "AI-driven workflow orchestration converting paper-heavy approval chains into executable digital state machines with SLA enforcement and immutable audit trails.",
  challenge: "A standard government approval requires eight physical desks and signatures. Files gather dust for weeks with no detection or escalation mechanism. Officers spend more time chasing approvals than performing duties. No audit trail shows who held a file, for how long, or why. Corruption thrives in these unaccountable gaps.",
  solution: "Forge models every approval as a directed graph with nodes, conditions, and time constraints. CRITICAL requests skip intermediate nodes to the District Commander. Files sitting 48+ hours auto-escalate with timestamped delay records. RBAC enforced at every transition. Every state change generates an immutable ledger entry.",
  outcome: "Manual handoff delays eliminated. Commanders gained real-time bottleneck dashboards — processing time by workflow type, compliance rates by department. Every file's complete lifecycle became reconstructible. Procedural integrity became a system property, not an aspirational policy.",
  img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000",
  points: [
    { h: "Automation", p: "Workflows as executable state machines. Conditional routing skips nodes for critical requests. SLA enforcement auto-escalates stalled files." },
    { h: "Visibility", p: "Real-time process mining — throughput metrics, compliance rates, chronic delay points by department. Bottlenecks caught as they form." },
    { h: "Compliance", p: "RBAC at every node. Immutable ledger entry for every transition. Complete file lifecycle reconstructible by any authorized reviewer." },
    { h: "Coordination", p: "Cross-departmental workflows flow through unified digital workspace. Structured handoff protocols replace days of file-chasing." }
  ]
};

export default function ForgePage() {
  return <CaseStudyDetailUI data={data} />;
}
