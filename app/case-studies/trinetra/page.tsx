import React from 'react';
import { Metadata } from 'next';
import CaseStudyDetailUI from '../../../components/CaseStudyDetailUI';

export const metadata: Metadata = {
  title: "Trinetra Case Study | Multi-Zone Field Coordination for J&K Police",
  description: "Real-time field coordination at scale for high-altitude, high-stakes environments. How Trinetra enabled J&K Police to manage massive crowd coordination during Shri Amarnath Ji Yatra with mobile-first auditable reporting.",
  keywords: ["Trinetra case study", "field coordination India", "J&K Police technology", "Amarnath Yatra coordination", "crowd management India"],
  openGraph: {
    title: "Trinetra Case Study | Multi-Zone Field Coordination for J&K Police",
    description: "Real-time field coordination at scale for high-altitude, high-stakes environments in Jammu & Kashmir.",
    url: "https://vinkura.in/case-studies/trinetra",
  },
  alternates: { canonical: "https://vinkura.in/case-studies/trinetra" },
};

const data = {
  eyebrow: "Public Safety Infrastructure",
  title: "Trinetra",
  desc: "Real-time field coordination for J&K Police during Amarnath Yatra — 500,000+ pilgrims, 40km trek at 14,000ft, zero cellular connectivity.",
  challenge: "Over 500,000 pilgrims traversing a 40km mountainous trek at 14,000ft with zero cellular connectivity. Command HQ had no data-driven understanding of ground conditions. Radio communication was fragmented across zones, landslide risks could block routes without warning, and crowd choke-points at narrow passes routinely escalated toward stampede conditions.",
  solution: "Trinetra deployed an Offline-First architecture with a local embedded database at each field node. Ruggedized devices performed low-power GPS polling, stored structured records locally, and transmitted compressed telemetry bursts whenever any connectivity appeared. Multi-zone coordination between Baltal and Pahalgam was achieved through hierarchical sync — every device functioned as a self-contained operational node.",
  outcome: "Command HQ achieved instantaneous multi-zone coordination for the first time. Commanders held pilgrims at base camps before choke-points became stampedes. Medical emergency response times dropped as the system surfaced GPS-located distress signals, replacing fragmented radio relay.",
  img: "https://images.unsplash.com/photo-1544383335-cccf3b827515?q=80&w=2000",
  points: [
    { h: "Coordination", p: "Unified field signals into a single command view. Zone commanders at Baltal, Pahalgam, and intermediate checkpoints operated from the same situational picture." },
    { h: "Auditability", p: "Every officer movement and field report recorded as an immutable, timestamped log. Post-operation reviews reconstruct exact decision sequences." },
    { h: "Resilience", p: "Offline-First architecture — devices operated autonomously for hours with local GPS polling. Compressed telemetry synced automatically when any connection appeared." },
    { h: "Integration", p: "Connected Command HQ directly to the tactical edge. Field conditions surfaced at HQ within seconds, collapsing the information latency of high-altitude operations." }
  ]
};

export default function TrinetraPage() {
  return <CaseStudyDetailUI data={data} />;
}
