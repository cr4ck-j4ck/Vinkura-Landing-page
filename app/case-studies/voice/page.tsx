import React from 'react';
import { Metadata } from 'next';
import CaseStudyDetailUI from '../../../components/CaseStudyDetailUI';

export const metadata: Metadata = {
  title: "Voice Case Study | Multilingual Field Data Entry for Indian Police",
  description: "Voice-first operational data entry for hands-free reporting and real-time incident logging in Indian field conditions. How Voice enabled multilingual, offline-capable data capture for frontline officers.",
  keywords: ["Voice case study", "voice data entry India", "multilingual field reporting", "police voice technology India"],
  openGraph: {
    title: "Voice Case Study | Multilingual Field Data Entry for Indian Police",
    description: "Voice-first operational data entry for hands-free reporting and real-time incident logging in the field.",
    url: "https://vinkura.in/case-studies/voice",
  },
  alternates: { canonical: "https://vinkura.in/case-studies/voice" },
};

const data = {
  eyebrow: "Field Intelligence",
  title: "Voice",
  desc: "Voice-to-Record Translation Pipeline — converting multilingual speech into structured intelligence in high-noise tactical environments where typing is impossible.",
  challenge: "Officers in tactical gear managing chaotic environments cannot type on mobile keyboards. Critical intelligence — crowd movements, incident details, resource requests — was captured hours later from memory, transmitted via imprecise radio, or lost entirely.",
  solution: "Acoustic models trained on field-recorded corpora (sirens, crowds, radio crosstalk). Handles Hindi-English code-switching natively. Parses intent — spoken reports mapped to situation reports, resource requests, escalations. Each intent generates API payloads triggering DDMS alerts, E-Maalkhana records, and Trinetra updates automatically.",
  outcome: "Near-zero delta between field events and structured command intelligence. Officers speak once, the entire system updates. Reporting accuracy increased dramatically as structured capture replaced after-the-fact memory reconstruction.",
  img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=2000",
  points: [
    { h: "Multilingual", p: "Native Hindi-English code-switching within single utterances. Regional language variants across state forces. Acoustic models tuned for high-decibel field conditions." },
    { h: "Hands-Free", p: "No screen interaction required. Officers maintain full situational awareness while the system captures structured intelligence from speech." },
    { h: "Structured", p: "Intent parsing maps speech to categories — situation reports, resource requests, escalations. API payloads auto-trigger DDMS, E-Maalkhana, and Trinetra updates." },
    { h: "Privacy", p: "On-device processing — sensitive voice data never transits external servers. Raw audio is not stored; only extracted structured intelligence persists." }
  ]
};

export default function VoicePage() {
  return <CaseStudyDetailUI data={data} />;
}
