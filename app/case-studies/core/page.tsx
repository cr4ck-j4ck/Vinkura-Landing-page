import React from 'react';
import { Metadata } from 'next';
import CaseStudyDetailUI from '../../../components/CaseStudyDetailUI';

export const metadata: Metadata = {
  title: "Vinkura Core Case Study | Platform Foundation for Indian Government",
  description: "The operating layer for mission-critical official software and cross-departmental data orchestration across Indian government institutions. How Vinkura Core unifies fragmented legacy systems into a sovereign data backbone.",
  keywords: ["Vinkura Core case study", "government platform India", "data orchestration India", "cross-departmental integration"],
  openGraph: {
    title: "Vinkura Core Case Study | Platform Foundation for Indian Government",
    description: "The operating layer for mission-critical official software and cross-departmental data orchestration.",
    url: "https://vinkura.in/case-studies/core",
  },
  alternates: { canonical: "https://vinkura.in/case-studies/core" },
};

const data = {
  eyebrow: "Official Infrastructure",
  title: "Vinkura Core",
  desc: "The operating substrate beneath every Vinkura module — shared database, role engine, encrypted bus, and audit ledger replacing fifty disconnected vendor tools.",
  challenge: "Government institutions procure dozens of tools sharing zero data. An officer logging an FIR must carry a printout to the evidence locker for re-entry. Duty rosters live in spreadsheets disconnected from court calendars. The result is institutional blindness — no authority has a unified view across departments.",
  solution: "Core provides unified GraphQL/REST API with three graph structures: Identity Graph (officer rank, permissions, clearances), Entity Graph (relational ties between evidence, rosters, court dates), and Audit Ledger (immutable append-only log of every action). SystemState synchronizes all modules in near-real-time.",
  outcome: "Commanders access case status — assigned officers, evidence chain, next hearing, pending forensics — from a single interface. Every module inherits identity, auditability, and relational context from Core on day one.",
  img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000",
  points: [
    { h: "Interoperability", p: "Single API replacing dozens of vendor interfaces. All modules connect through standardized schemas. Cross-departmental queries execute programmatically." },
    { h: "Security", p: "Sovereign deployment with complete Indian data residency. Encrypted inter-module communication. Role-based access prevents unauthorized exposure." },
    { h: "Accountability", p: "Immutable Audit Ledger captures every action across every module. Compliance reviews reconstruct exact sequences with cryptographic proof." },
    { h: "Sustainability", p: "New modules inherit full identity, audit, and entity-graph infrastructure automatically. No custom integration — prevents the cycle of buying new silos." }
  ]
};


export default function CorePage() {
  return <CaseStudyDetailUI data={data} />;
}
