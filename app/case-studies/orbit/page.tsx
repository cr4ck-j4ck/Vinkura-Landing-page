import React from 'react';
import { Metadata } from 'next';
import CaseStudyDetailUI from '../../../components/CaseStudyDetailUI';

export const metadata: Metadata = {
  title: "Orbit Case Study | Sovereign On-Premise Deployment for Indian Government",
  description: "Secure edge and on-premise deployment infrastructure for sovereign data residency and high-availability official systems in India. How Orbit enabled air-gapped government operations.",
  keywords: ["Orbit case study", "sovereign deployment India", "on-premise government India", "air-gapped operations"],
  openGraph: {
    title: "Orbit Case Study | Sovereign On-Premise Deployment for Indian Government",
    description: "Secure edge and on-premise deployment for sovereign data residency and high-availability official systems.",
    url: "https://vinkura.in/case-studies/orbit",
  },
  alternates: { canonical: "https://vinkura.in/case-studies/orbit" },
};

const data = {
  eyebrow: "Sovereign Infrastructure",
  title: "Orbit",
  desc: "Sovereign deployment infrastructure — enabling the entire Vinkura stack to run on-premise within air-gapped facilities where sensitive state data must never traverse public internet.",
  challenge: "Vinkura processes classified intelligence, personnel data, evidence chains, and active investigations. Indian law frequently prohibits public cloud placement. Real-time coordination demands local processing — no round-trips to distant data centers. Many sites operate with restricted or zero internet connectivity.",
  solution: "Orbit provides managed on-premise orchestration optimized for bare-metal execution. The entire Vinkura stack deploys within the institution's physical boundary. Military-grade encryption at rest and in transit. Edge-aware container orchestration with policy-based sync rules controlling data replication. Remote health monitoring for isolated nodes.",
  outcome: "Complete data sovereignty — sensitive data never leaves premises. AI inference runs locally with zero latency. Air-gapped installations at full capability. Scales from single-server district HQ to multi-node state command centers.",
  img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=2000",
  points: [
    { h: "Sovereignty", p: "Complete physical control over all data. No transit to external servers under any condition — sovereignty is architectural, not contractual." },
    { h: "Resilience", p: "High-availability with redundant state-snapshotting. Built for generator-dependent facilities, extreme weather, and intermittent power." },
    { h: "Security", p: "Zero-trust boundaries — every inter-node communication authenticated and encrypted. Infrastructure actions logged in the same Audit Ledger." },
    { h: "Management", p: "Unified control plane for distributed nodes. Version control, health monitoring, and remote diagnostics across geographically separated installations." }
  ]
};

export default function OrbitPage() {
  return <CaseStudyDetailUI data={data} />;
}
