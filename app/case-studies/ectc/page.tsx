import React from 'react';
import { Metadata } from 'next';
import CaseStudyDetailUI from '../../../components/CaseStudyDetailUI';

export const metadata: Metadata = {
  title: "E-CTC Case Study | Electronic Case Tracking for Indian Judiciary",
  description: "Electronic Case Tracking & Coordination for judicial readiness and investigation sync across Indian law enforcement. How E-CTC reduced prosecution delays and improved case lifecycle visibility.",
  keywords: ["E-CTC case study", "electronic case tracking India", "judicial readiness", "prosecution delays India"],
  openGraph: {
    title: "E-CTC Case Study | Electronic Case Tracking for Indian Judiciary",
    description: "Electronic Case Tracking & Coordination for judicial readiness and investigation sync.",
    url: "https://vinkura.in/case-studies/ectc",
  },
  alternates: { canonical: "https://vinkura.in/case-studies/ectc" },
};

const data = {
  eyebrow: "Judicial Interoperability",
  title: "E-CTC",
  desc: "Bridging investigation and prosecution — tracking every case from FIR to verdict with dependency-aware coordination that destroys judicial delays.",
  challenge: "The gap between police investigation and courts is where cases die. Charge-sheets filed late because officers lack visibility into evidentiary completeness. Forensic reports return to wrong desks. Court dates missed because no system tracks dependencies. Decades of judicial pendency — not because cases lack merit, but because disconnected paper trails have no coordination logic.",
  solution: "E-CTC tracks case lifecycle from FIR through charge-sheet, trial dates, and verdict. Acts as a dependency checker: 'Cannot file charge-sheet — Forensics has not returned item #242 from E-Maalkhana.' Statutory deadlines trigger alerts weeks before expiry. Every milestone, handoff, and delay recorded with timestamp and responsible authority.",
  outcome: "Cases that stalled for months now flow through structured digital handoffs with dependency verification. Charge-sheets arrive complete — system prevents submission until prerequisites are met. Officers know weeks ahead which evidence and witnesses are required.",
  img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2000",
  points: [
    { h: "Lifecycle Management", p: "FIR through verdict tracked with timestamps. Statutory deadlines trigger alerts weeks before expiry — proactive compliance, not reactive discovery." },
    { h: "Collaboration", p: "Shared workspace for IOs, prosecutors, forensic labs, and courts. Each party sees exactly what they need — evidentiary gaps, readiness status, compliance metrics." },
    { h: "SLA Management", p: "Dependency-aware coordination blocks filing when forensics are outstanding. Tracks statutory limits across all active cases. Delays auto-escalated." },
    { h: "Data Integrity", p: "Every record and handoff archived as immutable entry. Complete case history reconstructible on demand. Defense challenges face structured digital records." }
  ]
};


export default function ECTCPage() {
  return <CaseStudyDetailUI data={data} />;
}
