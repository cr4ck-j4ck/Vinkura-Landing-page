import React from 'react';
import { Metadata } from 'next';
import CaseStudyDetailUI from '../../../components/CaseStudyDetailUI';

export const metadata: Metadata = {
  title: "Sentinel Case Study | Command Decision Intelligence for Indian Police",
  description: "Unifying fragmented data streams into a single operational reality for command-level decision making in Indian law enforcement. How Sentinel transformed intelligence analysis across state police command centers.",
  keywords: ["Sentinel case study", "command intelligence India", "police decision intelligence", "operational intelligence India"],
  openGraph: {
    title: "Sentinel Case Study | Command Decision Intelligence for Indian Police",
    description: "Unifying fragmented data streams into a single operational reality for command-level decision making.",
    url: "https://vinkura.in/case-studies/sentinel",
  },
  alternates: { canonical: "https://vinkura.in/case-studies/sentinel" },
};

const data = {
  eyebrow: "Command Intelligence",
  title: "Sentinel",
  desc: "Command intelligence layer fusing data from Trinetra, DDMS, E-Maalkhana, and E-CTC into a unified operational reality with entity resolution and anomaly detection.",
  challenge: "Command Centers had no unified perspective. Data arrived from incompatible systems — each with its own schema. The same individual appeared as 'A. Khan' in one system and 'Arif Khan' in another with no linkage. Crowd density sat in one dashboard, personnel deployment in another — making it impossible to detect dangerous mismatches.",
  solution: "Sentinel's Entity Resolution Engine links fragmented identities across systems — matching 'A. Khan' from Trinetra to 'Arif Khan' from E-CTC to 'Mohd. Arif Khan' from DDMS. Pattern Detection performs real-time anomaly analysis: crowd spikes in under-deployed zones, evidence approaching court dates without forensic return. Command-priority alerts are generated from cross-system correlations no single system could detect.",
  outcome: "Command centers operated from a unified reality for the first time. Cross-system entity linking exposed invisible relationships. Anomaly detection surfaced risks before they materialized. Decision-making shifted from reactive report correlation to proactive fused intelligence.",
  img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000",
  points: [
    { h: "Aggregation", p: "Multi-source ingestion normalizes records from all Vinkura modules into a unified schema. Eliminates manual correlation that consumed analyst hours." },
    { h: "Knowledge Graphs", p: "Entity-linked mapping connects individuals, locations, cases, and evidence into a traversable graph. Cross-system linkage reveals patterns no single system surfaces." },
    { h: "Intelligence", p: "Anomaly detection across fused streams — crowd spikes in under-deployed zones, evidence approaching court dates without forensic return. Cross-system intelligence only." },
    { h: "Accountability", p: "Every command decision logged with the intelligence context that triggered it. Post-operation reviews reconstruct the exact picture the commander operated from." }
  ]
};


export default function SentinelPage() {
  return <CaseStudyDetailUI data={data} />;
}
